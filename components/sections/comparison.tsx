import { Check, X } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { comparison } from "@/content/comparison";
import { cn } from "@/lib/utils";

export function Comparison() {
  return (
    <Section id="unterschied">
      <SectionHeader
        eyebrow="Der Unterschied"
        title="Warum nicht einfach eine Agentur."
        lead="Andere versprechen dir sechs Stunden im Monat und ein fertiges Ergebnis. Das funktioniert 2026 nicht mehr. Hier steht, wie es stattdessen läuft."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        {[comparison.others, comparison.mine].map((col, i) => {
          const mine = i === 1;
          return (
            <div
              key={col.label}
              className={cn(
                "rounded-2xl border p-8 sm:p-9",
                mine
                  ? "border-foreground/15 bg-secondary"
                  : "border-border bg-card"
              )}
            >
              <p
                className={cn(
                  "text-[13px] font-medium uppercase tracking-[0.12em]",
                  mine ? "text-primary" : "text-muted-foreground"
                )}
              >
                {col.label}
              </p>

              <ul className="mt-7 flex flex-col gap-5">
                {col.points.map((p) => (
                  <li key={p} className="flex gap-3.5">
                    <span
                      className={cn(
                        "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                        mine
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {mine ? <Check size={14} /> : <X size={14} />}
                    </span>
                    <span
                      className={cn(
                        "text-[16px] leading-relaxed",
                        mine ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
