import { Section, SectionHeader } from "@/components/section";
import { ServiceChain } from "@/components/service-chain";
import { ProofWall } from "@/components/proof-wall";

export function Services() {
  return (
    <Section id="leistungen">
      <SectionHeader
        eyebrow="Leistungen"
        title="Wir bauen deine Personenmarke. Zusammen."
        lead="Ich übernehme Skript, Schnitt, Grafiken, Captions und den Funnel. Du bringst dein Gesicht, dein Wissen und die Zeit, es zu zeigen."
      />

      <ServiceChain />
      <ProofWall />
    </Section>
  );
}
