import { Section, SectionHeader } from "@/components/section";
import { ReelShowcase } from "@/components/reel-showcase";

export function Work() {
  return (
    <Section id="arbeiten">
      <SectionHeader
        eyebrow="Arbeiten"
        title="Wisch dich durch."
        lead="Jedes Reel hier ist von mir. Rechts steht, was es gebracht hat und warum es funktioniert hat."
      />

      <ReelShowcase />
    </Section>
  );
}
