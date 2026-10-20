"use client";

import { useEffect, useRef } from "react";
import seite from "@/content/seite.json";
import { KqGlyph, KqTile } from "./kq";
import {
  captureMode,
  clamp,
  easeInOutQuad,
  lerp,
  reducedMotion,
  smooth,
  smoother,
  subscribe,
} from "./loop";

/**
 * Der Schluss. Unter dem Kontakt steigt die Kamera auf: das Blatt (als
 * Standbild aus scripts/capture-sheet.mjs) wird kleiner, bis die ganze Seite
 * als Streifen dasteht. Dann stuerzt sie zurueck auf den Hero, alles
 * darunter verblasst, und der Hero landet als Karte unter der Schlusszeile.
 *
 * Desktop beginnt nahtlos: die Sektion zieht sich um eine Bildschirmhoehe
 * unter das Blatt, und im ersten Bild liegt das Standbild genau ueber dem
 * echten Blatt. Auf dem Handy passt das Standbild nicht zum Handylayout,
 * dort startet der Schluss direkt mit dem Streifen.
 */

const LINE = ["Menschen", "kaufen", "von", "Menschen."];
const TAIL = ["Nicht", "von", "Logos."];

const W = seite.w;
const H = seite.h;
const HERO = seite.heroH;

type Phases = { rise: [number, number]; over: [number, number]; dive: [number, number]; title: number; hold: number };

const DESK: Phases = { rise: [0, 0.34], over: [0.34, 0.44], dive: [0.44, 0.66], title: 0.63, hold: 0.8 };
const MOB: Phases = { rise: [0, 0], over: [0, 0.12], dive: [0.12, 0.5], title: 0.48, hold: 0.66 };

const span = (u: number, [a, b]: [number, number]) => (b > a ? clamp((u - a) / (b - a)) : 1);

export function Finale() {
  const sec = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const tiles = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const s = sec.current;
    const st = stage.current;
    const c = card.current;
    const ti = title.current;
    const sheet = document.getElementById("sheet");
    if (!s || !st || !c || !ti || !sheet || captureMode()) return;
    const reduce = reducedMotion();
    const words = Array.from(ti.querySelectorAll<HTMLElement>("[data-w]"));
    let size = "";

    return subscribe(({ y, vw, vh }) => {
      const desk = vw >= 1024 && !reduce;
      const key = `${vw}x${vh}x${desk}`;
      if (key !== size) {
        size = key;
        s.style.marginTop = desk ? `-${vh}px` : "0px";
        s.style.height = `${reduce ? vh : desk ? vh * 3.6 : vh * 2.6}px`;
      }

      const top = s.offsetTop;
      const len = s.offsetHeight - vh;
      const u = reduce || len <= 0 ? 1 : clamp((y - top) / len);
      st.style.visibility = !desk || y > top + 1 ? "visible" : "hidden";
      const P = desk ? DESK : MOB;

      // Schlusszeile und Karte als Block, senkrecht mittig, Karte so gross
      // wie der Platz darunter erlaubt.
      const minTop = Math.max(24, vh * 0.055);
      const titleH = ti.offsetHeight;
      const aspect = W / HERO;
      const cardW = Math.min(vw * (desk ? 0.7 : 1) - (desk ? 0 : 32), 1018, (vh - minTop - titleH - 26 - 36) * aspect);
      const titleTop = Math.max(minTop, (vh - (titleH + 26 + cardW / aspect)) / 2);
      ti.style.top = `${titleTop}px`;
      const cardTop = titleTop + titleH + 26;
      const sCard = cardW / W;
      const margin = desk ? 42 : 28;
      const sFit = (vh - 2 * margin) / H;
      const s0 = sheet.offsetWidth / W;

      let sc: number;
      let yTop: number;
      let hv = H;
      let fade = 0;
      let rad: number;
      let land = 0;

      const d = span(u, P.dive);
      if (u < P.over[0]) {
        // Aufstieg: logarithmisch zoomen, Unterkante faellt auf die 42 px Linie
        const a = span(u, P.rise);
        sc = s0 * Math.pow(sFit / s0, smoother(a));
        const bottom = vh - margin * smooth(0, 0.35, a);
        yTop = bottom - H * sc;
        rad = 24 * sc;
      } else if (u < P.dive[0]) {
        // Draufsicht: ganze Seite als Streifen, kriecht 3,5 Prozent naeher
        const b = span(u, P.over);
        sc = sFit * (1 + 0.035 * smooth(0, 1, b));
        yTop = (vh - H * sc) / 2;
        rad = 24 * sc;
      } else {
        // Sturz: Oberkante bleibt oben, waechst, dann sinkt sie auf die Kartenposition
        const s1 = sFit * 1.035;
        sc = s1 * Math.pow(sCard / s1, easeInOutQuad(d));
        const top0 = (vh - H * s1) / 2;
        yTop = lerp(top0, cardTop, smooth(0.55, 1, d));
        hv = lerp(H, HERO, smooth(0.25, 0.85, d));
        fade = smooth(0.05, 0.55, d);
        rad = lerp(Math.max(3, 24 * sc), 38, smooth(0.5, 1, d));
        land = smooth(0.7, 1, d);
        const h = clamp((u - P.hold) / (1 - P.hold));
        sc *= 1 + 0.02 * smooth(0, 1, h);
      }

      const cw = W * sc;
      const ch = hv * sc;
      const x = (vw - cw) / 2;
      c.style.height = `${hv.toFixed(1)}px`;
      c.style.borderRadius = `${(rad / sc).toFixed(1)}px`;
      c.style.transform = `translate3d(${x.toFixed(1)}px, ${yTop.toFixed(1)}px, 0) scale(${sc.toFixed(5)})`;
      // Erst in den Dunst blenden, dann abschneiden: alles unter dem Hero
      // wird durchsichtig, der Hero bleibt voll stehen.
      const m = `linear-gradient(to bottom, #000 ${HERO}px, rgba(0,0,0,${(1 - fade).toFixed(3)}) ${HERO + 1}px)`;
      c.style.maskImage = m;
      c.style.webkitMaskImage = m;
      c.style.setProperty("--land", land.toFixed(3));

      // Schlusszeile Wort fuer Wort, jedes steigt 16 px aus 12 px Unschaerfe
      words.forEach((w) => {
        const at = P.title + Number(w.dataset.w) * 0.012;
        const t = smooth(at, at + 0.035, u);
        w.style.opacity = t.toFixed(3);
        w.style.transform = `translateY(${((1 - t) * 16).toFixed(1)}px)`;
        w.style.filter = t < 1 ? `blur(${((1 - t) * 12).toFixed(1)}px)` : "";
      });

      // Kacheln an der Karte. Zwei sitzen auf den oberen Ecken, eine scharf
      // am rechten Rand, zwei grosse weiche treiben unten herein.
      const h = clamp((u - P.hold) / (1 - P.hold));
      const k = desk ? 1 : 0.6;
      const spots = [
        { x: x - 26 * k, y: yTop - 26 * k, s: 56 * k, rot: -8 },
        { x: x + cw - 32 * k, y: yTop - 24 * k, s: 52 * k, rot: 8 },
        { x: x + cw - 20 * k, y: yTop + ch * 0.56, s: 40 * k, rot: -5 },
        // Am Handy gibt es keinen Rand neben der Karte, dort sitzen die
        // weichen Kacheln unter ihr statt auf den Zahlen.
        desk
          ? { x: x - 190, y: yTop + ch - 120 + (1 - land) * 240, s: 240, rot: 12 }
          : { x: x - 108, y: yTop + ch - 10 + (1 - land) * 240, s: 144, rot: 12 },
        desk
          ? { x: x + cw - 60, y: yTop + ch - 110 + (1 - land) * 240, s: 210, rot: -10 }
          : { x: x + cw - 30, y: yTop + ch + 4 + (1 - land) * 240, s: 126, rot: -10 },
      ];
      spots.forEach((p, i) => {
        const el = tiles.current[i];
        if (!el) return;
        const drift = Math.sin(h * 3 + i * 1.7) * 3;
        const lift = i < 3 ? lerp(0.6, 1, land) : 1;
        el.style.opacity = (i < 3 ? land : land * (i === 3 ? 0.85 : 0.5)).toFixed(3);
        el.style.width = el.style.height = `${p.s}px`;
        el.style.transform = `translate3d(${(p.x + drift).toFixed(1)}px, ${(p.y - drift).toFixed(1)}px, 0) rotate(${p.rot}deg) scale(${lift.toFixed(3)})`;
      });
    });
  }, []);

  let n = 0;
  return (
    <section
      ref={sec}
      id="schluss"
      aria-label="Schluss"
      className="relative z-10"
      style={{ height: "260vh" }}
    >
      <div ref={stage} className="floor sticky top-0 h-screen overflow-hidden">
        <div ref={title} className="absolute inset-x-0 z-10 px-5 text-center">
          <span
            data-w={n++}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[14px] font-medium shadow-[0_2px_10px_rgba(26,33,51,0.08)]"
          >
            <span className="inline-flex size-[18px] items-center justify-center rounded-[5px] bg-[#1d1d1f] text-white">
              <KqGlyph className="size-[14px]" />
            </span>
            Kerim Quintino
          </span>
          <h2 className="display mt-4 text-[30px] sm:text-[40px] lg:text-[50px]">
            {LINE.map((w) => (
              <span key={w + n} data-w={n++} className="inline-block whitespace-pre opacity-0">
                {w}{" "}
              </span>
            ))}
            <span className="tail mt-1 block text-[33px] sm:text-[44px] lg:text-[55px]">
              {TAIL.map((w) => (
                <span key={w + n} data-w={n++ + 2} className="inline-block whitespace-pre opacity-0">
                  {w}{" "}
                </span>
              ))}
            </span>
          </h2>
        </div>

        <div
          ref={card}
          className="finale-card absolute left-0 top-0 origin-top-left overflow-hidden bg-white"
          style={{ width: W, height: H }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/seite.webp" alt="" width={W} height={H} loading="lazy" decoding="async" className="absolute left-0 top-0 max-w-none" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/seite-hero.webp" alt="" width={W} height={HERO} loading="lazy" decoding="async" className="absolute left-0 top-0 max-w-none" style={{ width: W, height: HERO }} />
        </div>

        {(["dark", "dark", "light", "dark", "dark"] as const).map((tone, i) => (
          <KqTile
            key={i}
            tone={tone}
            innerRef={(el) => {
              tiles.current[i] = el;
            }}
            className={`absolute left-0 top-0 opacity-0 ${i < 3 ? "shadow-tile" : i === 3 ? "blur-[26px]" : "blur-[22px]"}`}
          />
        ))}
      </div>
    </section>
  );
}
