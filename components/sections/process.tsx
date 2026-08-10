import { Section, SectionHeader } from "@/components/section";
import { ProcessScroller } from "@/components/process-scroller";

export function Process() {
  return (
    <Section id="ablauf" className="bg-background">
      <SectionHeader
        eyebrow="Ablauf"
        title="Vier Schritte, keine Überraschungen."
        lead="Du weißt vorher, was passiert, wer was macht und wann du das erste Ergebnis siehst."
      />

      <ProcessScroller />
    </Section>
  );
}
