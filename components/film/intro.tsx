"use client";

import { useEffect, useRef } from "react";
import { KqTile } from "./kq";
import { captureMode, lerp, reducedMotion, smooth, subscribe } from "./loop";

/**
 * Der Einflug. Beim Laden liegt das Blatt schraeg, Oberkante weg von der
 * Linse, als schaue die Kamera tief ueber dem Hero die Seite hinauf. Scrollen
 * kippt es in den ersten 70 Prozent einer Bildschirmhoehe flach, danach ist
 * die Seite eine normale Seite.
 *
 * Dazu: vier KQ Kacheln starten mit 32 px links und rechts der Knoepfe,
 * wachsen und haengen sich an die Ecken des Blatts, ziehen dann nach oben weg.
 * Eine grosse unscharfe Kachel zieht in der Seitenmitte links vorbei.
 * Unten liegt ein Unschaerfeband (nah an der Linse), oben ein schwaches.
 */

type TileSpec = {
  tone: "dark" | "light";
  size: number;
  /** Ziel relativ zum Blatt: Seite, x Versatz in Kachelbreiten, y in px oder Anteil der Hoehe */
  side: "l" | "r";
  dx: number;
  y: number;
  rot: number;
  trail: number;
};

const TILES: TileSpec[] = [
  { tone: "dark", size: 112, side: "l", dx: -0.62, y: 84, rot: -8, trail: 1.0 },
  { tone: "light", size: 100, side: "r", dx: -0.3, y: 58, rot: 7, trail: 1.25 },
  { tone: "light", size: 72, side: "l", dx: -0.78, y: 0.5, rot: 5, trail: 1.45 },
  { tone: "dark", size: 84, side: "r", dx: -0.42, y: 0.58, rot: -6, trail: 1.15 },
];

/** Umkehrung von smoothstep, per Halbierung. */
function unsmooth(v: number) {
  let lo = 0;
  let hi = 1;
  for (let n = 0; n < 20; n++) {
    const m = (lo + hi) / 2;
    if (m * m * (3 - 2 * m) < v) lo = m;
    else hi = m;
  }
  return (lo + hi) / 2;
}

export function FilmIntro() {
  const tiles = useRef<(HTMLDivElement | null)[]>([]);
  const passer = useRef<HTMLDivElement>(null);
  const near = useRef<HTMLDivElement>(null);
  const far = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sheet = document.getElementById("sheet");
    const anchor = document.querySelector<HTMLElement>("[data-tile-anchor]");
    const stands = Array.from(document.querySelectorAll<HTMLElement>("[data-stand]"));
    const head = document.querySelector<HTMLElement>("h1");
    const buttons = anchor ? Array.from(anchor.querySelectorAll<HTMLElement>("a")) : [];
    const statRow = document.querySelector<HTMLElement>("#sheet dl");
    if (!sheet || !anchor || !head || !statRow || !buttons.length || reducedMotion() || captureMode()) return;

    return subscribe(({ y, vw, vh }) => {
      const desk = vw >= 1024;
      const k = 1 - smooth(0, vh * 0.7, y);

      // Blatt kippen. Drehpunkt bei 78 Prozent der Bildhoehe, darueber
      // weicht die Seite zurueck, darunter kommt sie der Linse nah.
      if (k > 0.001) {
        const origin = y + vh * 0.78 - sheet.offsetTop;
        sheet.style.transformOrigin = `50% ${origin.toFixed(0)}px`;
        sheet.style.transformStyle = "preserve-3d";
        sheet.style.transform = `perspective(${desk ? 1500 : 1100}px) rotateX(${((desk ? 34 : 18) * k).toFixed(2)}deg)`;
      } else if (sheet.style.transform) {
        // Ganz flach heisst: gar keine Transformation, sonst haengen feste
        // Elemente wie das Screenshot Fenster am Blatt statt am Bildschirm.
        sheet.style.transform = "";
        sheet.style.transformStyle = "";
      }

      stands.forEach((el) => {
        const z = Number(el.dataset.stand) || 30;
        el.style.transform =
          k > 0.001 ? `translateZ(${(z * k).toFixed(1)}px) rotateX(${(-30 * k).toFixed(2)}deg)` : "";
      });

      if (near.current) near.current.style.opacity = k.toFixed(3);
      if (far.current) far.current.style.opacity = (k * 0.8).toFixed(3);

      // Kacheln
      const a = anchor.getBoundingClientRect();
      const first = buttons[0].getBoundingClientRect();
      const last = buttons[buttons.length - 1].getBoundingClientRect();
      // Linke Kante des Textes. Linke Kacheln bleiben die ganze Zeit links
      // davon, sonst kreuzen sie die Headline.
      const textL = head.getBoundingClientRect().left;
      // Tatsaechliche Zeilen der Headline, nicht ihr Block
      const lines = document.createRange();
      lines.selectNodeContents(head);
      const hr = lines.getBoundingClientRect();
      // Die Karten stehen beim Laden auf und ragen dann ueber die Reihe hinaus
      const stats = Array.from(statRow.children).reduce(
        (u, c) => {
          const r = c.getBoundingClientRect();
          return { left: Math.min(u.left, r.left), right: Math.max(u.right, r.right), top: Math.min(u.top, r.top) };
        },
        { left: Infinity, right: -Infinity, top: Infinity },
      );
      const L = sheet.offsetLeft;
      const R = L + sheet.offsetWidth;
      const q = y / vh;
      const e = smooth(0.02, 0.38, q);
      const scaleBase = desk ? 1 : 0.5;
      TILES.forEach((t, i) => {
        const el = tiles.current[i];
        if (!el) return;
        const left = t.side === "l";
        // Schmaler Rand neben dem Text: Kacheln werden kleiner, statt auf die
        // Headline zu rutschen.
        const size = Math.min(
          t.size * scaleBase,
          left ? (textL - 14) / 0.65 : (vw - 8 - (Math.max(hr.right, stats.right) + 14)) / 1.15,
        );
        // Reihenfolge auf der eigenen Seite, fuer den Abstand beim Start
        const j = TILES.slice(0, i).filter((o) => o.side === t.side).length;
        let tx: number;
        let sx: number;
        if (left) {
          // Darf zur Haelfte aus dem Bild ragen, aber nie an den Text
          tx = Math.max(-size * 0.45, Math.min(L + t.dx * size, textL - 14 - size * 1.1));
          sx = Math.max(-16, first.left - 18 - 32 - j * 40);
        } else {
          tx = Math.min(vw - size - 8, R + t.dx * size);
          // Auf dem Handy ist die Knopfreihe so breit wie der Bildschirm
          sx = Math.min(last.right + 18 + j * 40, vw - 44 - (1 - j) * 38);
        }
        const ty = t.y < 1 ? vh * t.y : t.y;
        const sy = a.top + a.height / 2 - 16;
        // Rechts zuerst nach aussen, dann hoch. Gestiegen wird erst, wenn die
        // Kachel an Headline und Zahlenreihe vorbei ist. Den Zeitpunkt liefert
        // die Umkehrung der Seitwaertsbewegung, so gibt es keinen Sprung.
        let ey = e;
        let ex = e;
        if (!left) {
          ex = smooth(0.02, 0.22, q);
          const f = (Math.max(hr.right, stats.right) + 14 + size * 0.15 - sx) / (tx - sx);
          const qc = 0.02 + 0.2 * unsmooth(Math.min(1, Math.max(0, f)));
          ey = smooth(qc, Math.max(qc + 0.16, 0.38), q);
        }
        const x = lerp(sx, tx, ex);
        let yy = lerp(sy, ty, ey) - Math.max(0, q - 0.45) * vh * t.trail;
        const s = lerp(32, size, e) / t.size;
        // Die Zahlenreihe schiebt sich beim Scrollen von unten heran. Solange
        // eine Kachel ueber ihr steht, bleibt sie oberhalb.
        const w = s * t.size;
        if (x + w * 1.1 > stats.left) {
          // Stufenlos loslassen, waehrend die Kachel rechts an der Reihe vorbeizieht
          const hold = Math.min(1, Math.max(0, (stats.right + 14 + w * 0.6 - x) / (w * 0.6)));
          yy -= Math.max(0, yy - (stats.top - 18 - w * 1.1)) * hold;
        }
        // Auf schmalen Bildschirmen gibt es keinen Rand neben dem Blatt,
        // dort wuerden die Kacheln auf Text liegen.
        const gone = yy < -size - 40 || vw < 640;
        el.style.visibility = gone ? "hidden" : "visible";
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${yy.toFixed(1)}px, 0) rotate(${(t.rot * e).toFixed(2)}deg) scale(${s.toFixed(4)})`;
      });

      // Vorbeiziehende Kachel, nah und unscharf, nur wo links Platz ist.
      const p = passer.current;
      if (p) {
        const docH = document.documentElement.scrollHeight - vh;
        const pr = docH > 0 ? y / docH : 0;
        const t = (pr - 0.34) / 0.2;
        const on = desk && t > 0 && t < 1;
        p.style.visibility = on ? "visible" : "hidden";
        if (on) p.style.transform = `translate3d(-110px, ${lerp(vh + 80, -380, t).toFixed(1)}px, 0) rotate(-10deg)`;
      }
    });
  }, []);

  return (
    <div className="film-layer pointer-events-none fixed inset-0 z-40" aria-hidden>
      <div ref={far} className="dof-band dof-far" />
      <div ref={near} className="dof-band dof-near" />
      {TILES.map((t, i) => (
        <KqTile
          key={i}
          tone={t.tone}
          innerRef={(el) => {
            tiles.current[i] = el;
          }}
          className="absolute left-0 top-0 origin-top-left shadow-tile"
          style={{ width: t.size, height: t.size, visibility: "hidden" }}
        />
      ))}
      <KqTile
        tone="dark"
        innerRef={passer}
        className="absolute left-0 top-0 blur-[10px]"
        style={{ width: 300, height: 300, visibility: "hidden" }}
      />
    </div>
  );
}
