import { Section, SectionHeader } from "@/components/section";
import { ReelShowcase } from "@/components/reel-showcase";
import { TopReels } from "@/components/top-reels";

export function Work() {
  return (
    <Section id="arbeiten">
      <SectionHeader
        eyebrow="Arbeiten"
        title="Wisch dich durch."
        lead="Jedes Reel hier ist von mir. Rechts steht, warum es so gebaut ist und nicht anders."
      />

      <ReelShowcase />
      <TopReels />
    </Section>
  );
}
