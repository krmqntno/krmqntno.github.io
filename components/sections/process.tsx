import { Section, SectionHeader } from "@/components/section";
import { process } from "@/content/process";

export function Process() {
  return (
    <Section id="ablauf" className="bg-background">
      <SectionHeader
        eyebrow="Ablauf"
        title="Vier Schritte, keine Überraschungen."
        lead="Du weißt vorher, was passiert, wer was macht und wann du das erste Ergebnis siehst."
      />

      <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p) => (
          <li key={p.step} className="border-t border-border pt-6">
            <span className="text-[13px] font-medium tracking-[0.12em] text-primary">
              {p.step}
            </span>
            <h3 className="mt-3 text-[17px] font-semibold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
