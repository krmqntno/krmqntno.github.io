"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { process } from "@/content/process";

export function ProcessScroller() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = refs.current.filter(Boolean) as HTMLLIElement[];
    if (nodes.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Der Schritt, der am weitesten oben sichtbar ist, gewinnt.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target as HTMLLIElement);
        if (index >= 0) setActive(index);
      },
      // Aktiv wird, was sich im mittleren Drittel des Viewports befindet.
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-20">
      {/* Fortschrittsleiste, klebt auf Desktop */}
      <div className="hidden lg:block">
        <div className="sticky top-28">
          <p className="text-sm text-muted-foreground">
            Schritt {active + 1} von {process.length}
          </p>

          <ol className="mt-6 flex flex-col gap-1">
            {process.map((p, i) => (
              <li key={p.step} className="flex items-center gap-4">
                <span className="relative flex h-10 w-6 items-center justify-center">
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border" />
                  <span
                    className={cn(
                      "relative h-2.5 w-2.5 rounded-full transition-all duration-300",
                      i <= active
                        ? "scale-100 bg-primary"
                        : "scale-75 bg-border"
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "text-[15px] transition-colors duration-300",
                    i === active
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {p.title}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Die Schritte selbst */}
      <ol className="flex flex-col gap-5 lg:gap-0">
        {process.map((p, i) => (
          <li
            key={p.step}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={cn(
              "transition-opacity duration-500 lg:flex lg:min-h-[44vh] lg:flex-col lg:justify-center",
              i === active ? "opacity-100" : "lg:opacity-35"
            )}
          >
            <div className="rounded-2xl border border-border bg-card p-7 sm:p-9 lg:border-0 lg:bg-transparent lg:p-0">
              <span className="text-[13px] font-medium tracking-[0.12em] text-primary">
                {p.step}
              </span>
              <h3 className="display mt-3 text-2xl sm:text-3xl lg:text-4xl">
                {p.title}
              </h3>
              <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
