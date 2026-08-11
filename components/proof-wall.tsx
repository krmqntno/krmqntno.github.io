"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { CountUp } from "@/components/count-up";
import { cn } from "@/lib/utils";
import { proofReels, type ProofReel } from "@/content/proof";

const de = new Intl.NumberFormat("de-DE");
const deOne = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

/** Grosse Zahlen kurz, kleine ausgeschrieben. */
function short(n: number) {
  if (n >= 1_000_000) return `${deOne.format(n / 1_000_000)} Mio`;
  return de.format(n);
}

const totalViews = proofReels.reduce((sum, r) => sum + r.views, 0);

export function ProofWall() {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState<ProofReel | null>(null);

  // Merkt sich das Ziel, sonst zaehlen schnelle Klicks waehrend des Scrollens
  // immer wieder vom alten Index aus.
  const target = useRef(0);

  const goTo = useCallback((i: number) => {
    const el = scroller.current;
    if (!el) return;
    const slide = el.children[i] as HTMLElement | undefined;
    if (!slide) return;
    target.current = i;
    el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }, []);

  // Beim Wischen gewinnt die Folie, die am dichtesten am linken Rand steht.
  const onScroll = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - el.scrollLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    target.current = best;
    setIndex((prev) => (prev === best ? prev : best));
  }, []);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const current = proofReels[index];

  return (
    <div id="ergebnisse" className="mt-14 scroll-mt-24 border-t border-border pt-10">
      <h3 className="display max-w-2xl text-2xl sm:text-3xl">
        Fünf Reels, {short(totalViews)} Aufrufe.
      </h3>
      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-center lg:gap-14">
        {/* Zahlen zur aktuellen Folie, zaehlen bei jedem Wechsel neu hoch */}
        <div className="order-2 lg:order-1">
          <p className="text-sm text-muted-foreground">
            Reel {index + 1} von {proofReels.length}
          </p>

          <p className="display mt-3 text-5xl tabular-nums sm:text-6xl">
            <CountUp key={`views-${index}`} to={current.views} duration={900} />
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">Aufrufe</p>

          <dl className="mt-8 flex gap-10 border-t border-border pt-6">
            <div>
              <dt className="display text-2xl tabular-nums">
                <CountUp
                  key={`follower-${index}`}
                  to={current.follower}
                  duration={900}
                />
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                neue Follower
              </dd>
            </div>
            <div>
              <dt className="display text-2xl tabular-nums">
                {current.seconds} Sek.
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                im Schnitt gesehen
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(Math.max(0, target.current - 1))}
              disabled={index === 0}
              aria-label="Vorheriges Reel"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary disabled:opacity-40"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() =>
                goTo(Math.min(proofReels.length - 1, target.current + 1))
              }
              disabled={index === proofReels.length - 1}
              aria-label="Nächstes Reel"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary disabled:opacity-40"
            >
              <ArrowRight size={16} />
            </button>

            <span className="ml-2 flex gap-1.5">
              {proofReels.map((r, i) => (
                <button
                  key={r.image}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Reel ${i + 1} zeigen`}
                  aria-current={i === index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-6 bg-primary" : "w-2 bg-border",
                  )}
                />
              ))}
            </span>
          </div>
        </div>

        {/* Wischbare Screenshots, bestes Reel zuerst */}
        <div
          ref={scroller}
          onScroll={onScroll}
          /* relative, damit offsetLeft der Folien gegen den Scroller misst */
          className="relative order-1 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 lg:order-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {proofReels.map((r, i) => (
            <button
              key={r.image}
              type="button"
              onClick={() => setOpen(r)}
              aria-label={`Screenshot vergrößern: ${de.format(r.views)} Aufrufe`}
              className={cn(
                "group relative w-full shrink-0 snap-start overflow-hidden rounded-2xl bg-[#0b0e13] p-3 transition-opacity duration-300",
                i === index ? "opacity-100" : "opacity-60",
              )}
            >
              <Image
                src={r.image}
                alt={`Instagram Insights: ${de.format(r.views)} Aufrufe, ${de.format(r.follower)} neue Follower`}
                width={r.width}
                height={r.height}
                sizes="(min-width: 1024px) 720px, 92vw"
                priority={i === 0}
                className="w-full rounded-xl"
              />
              <span className="absolute right-6 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <Maximize2 size={14} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot aus den Instagram Insights"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl"
          >
            <Image
              src={open.image}
              alt={`Instagram Insights mit ${de.format(open.views)} Aufrufen und ${de.format(open.follower)} neuen Followern`}
              width={open.width}
              height={open.height}
              className="w-full rounded-2xl"
            />
            <button
              type="button"
              onClick={close}
              aria-label="Screenshot schließen"
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
