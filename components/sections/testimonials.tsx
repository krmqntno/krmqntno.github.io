import { Section, SectionHeader } from "@/components/section";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="stimmen">
      <SectionHeader eyebrow="Stimmen" title="Was Kunden sagen." />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.author}
            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7"
          >
            <blockquote className="text-[15px] leading-relaxed">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{t.author}</span>
              <br />
              {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
