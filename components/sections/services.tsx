import {
  BarChart3,
  Layers,
  MessageSquare,
  PenLine,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { services, type Service } from "@/content/services";

const icons: Record<Service["icon"], LucideIcon> = {
  video: Video,
  layers: Layers,
  pen: PenLine,
  message: MessageSquare,
  zap: Zap,
  chart: BarChart3,
};

export function Services() {
  return (
    <Section id="leistungen">
      <SectionHeader
        eyebrow="Leistungen"
        title="Alles, was zwischen deiner Idee und dem fertigen Beitrag liegt."
        lead="Du buchst keine einzelnen Videos. Du buchst jemanden, der deinen Kanal jeden Monat am Laufen hält."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.05)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon size={19} />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
