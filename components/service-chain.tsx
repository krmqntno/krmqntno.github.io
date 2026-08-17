"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  BarChart3,
  PenLine,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { services, type Service } from "@/content/services";

const icons: Record<Service["icon"], LucideIcon> = {
  video: Video,
  pen: PenLine,
  zap: Zap,
  chart: BarChart3,
};

/** Abstand zwischen zwei Stationen beim Aufbauen der Kette. */
const STEP_MS = 420;

export function ServiceChain() {
  const ref = useRef<HTMLDivElement>(null);
  // -1 heisst: noch nichts gezeichnet. Am Ende ist step === services.length.
  const [step, setStep] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        // Ohne Animationswunsch steht die Kette sofort komplett da.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setStep(services.length);
          return;
        }
        // Stationen leuchten nacheinander auf, die Linie waechst dazwischen mit.
        timer = window.setInterval(() => {
          setStep((s) => {
            if (s >= services.length) {
              clearInterval(timer);
              return s;
            }
            return s + 1;
          });
        }, STEP_MS);
      },
      { threshold: 0.25 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, []);

  const done = step >= services.length - 1;

  return (
    <div ref={ref} className="mt-10">
      {/* Desktop: waagerechte Strecke, Linie spannt von Icon zu Icon */}
      <ol className="hidden gap-10 lg:grid lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          const active = step >= i;
          return (
            <li
              key={s.title}
              className={cn(
                "relative transition-all duration-500",
                // 45 Prozent Deckkraft drueckte den grauen Text unter die
                // Kontrastschwelle. Der Unterschied zwischen wartend und aktiv
                // bleibt sichtbar, die Station ist aber vorher schon lesbar.
                active ? "-translate-y-0.5 opacity-100" : "opacity-75",
              )}
            >
              {s.handoff ? (
                <>
                  {/* left 52 = Icon (44) plus 8 Luft, -right-8 endet 8 vor dem naechsten Icon */}
                  <span className="absolute -right-8 left-[52px] top-[22px] h-px bg-border" />
                  <span
                    className={cn(
                      "absolute -right-8 left-[52px] top-[22px] h-px origin-left bg-primary transition-transform duration-[420ms] ease-out",
                      step >= i + 1 ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute -right-8 left-[52px] top-8 text-center text-[11px] uppercase tracking-[0.1em] text-muted-foreground transition-opacity duration-500",
                      step >= i + 1 ? "opacity-100" : "opacity-0",
                    )}
                  >
                    {s.handoff}
                  </span>
                </>
              ) : null}

              <span
                className={cn(
                  "relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-background transition-colors duration-500",
                  active
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground",
                )}
              >
                <Icon size={20} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          );
        })}
      </ol>

      {/* Desktop: Ruecklauf von den Zahlen zurueck zum Text */}
      <div
        className={cn(
          "relative mt-10 hidden h-9 transition-opacity duration-700 lg:block",
          done ? "opacity-100" : "opacity-0",
        )}
      >
        <div
          aria-hidden
          className="absolute inset-x-[22px] top-0 h-9 rounded-b-[28px] border-b border-l border-r border-border"
        />
        <ArrowUp
          aria-hidden
          size={14}
          className="absolute -top-1.5 left-[15px] text-primary"
        />
      </div>

      {/* Mobil: dieselbe Kette senkrecht */}
      <ol className="lg:hidden">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          const active = step >= i;
          const last = i === services.length - 1;
          return (
            <li key={s.title} className="relative flex gap-5 pb-7 last:pb-0">
              {!last ? (
                <>
                  <span className="absolute bottom-0 left-[21px] top-12 w-px bg-border" />
                  <span
                    className={cn(
                      "absolute bottom-0 left-[21px] top-12 w-px origin-top bg-primary transition-transform duration-[420ms] ease-out",
                      step >= i + 1 ? "scale-y-100" : "scale-y-0",
                    )}
                  />
                </>
              ) : null}

              <span
                className={cn(
                  "relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-background transition-colors duration-500",
                  active
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground",
                )}
              >
                <Icon size={20} />
              </span>

              <div
                className={cn(
                  "transition-opacity duration-500",
                  // Gleiche Begruendung wie in der Desktopfassung oben.
                  active ? "opacity-100" : "opacity-75",
                )}
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                {s.handoff ? (
                  <p className="mt-3 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    {s.handoff}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>

    </div>
  );
}
