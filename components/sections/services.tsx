import {
  BarChart3,
  PenLine,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { services, type Service } from "@/content/services";

const icons: Record<Service["icon"], LucideIcon> = {
  video: Video,
  pen: PenLine,
  zap: Zap,
  chart: BarChart3,
};

export function Services() {
  return (
    <Section id="leistungen">
      <SectionHeader
        eyebrow="Leistungen"
        title="Dein Aufwand: sechs Stunden im Monat."
        lead="Daraus wird ein voller Monat Content, vom Skript bis zur Anfrage in deinen DMs."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.05)] sm:p-9"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon size={20} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
