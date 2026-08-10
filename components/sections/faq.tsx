import { Plus } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { faq } from "@/content/faq";

export function Faq() {
  return (
    <Section id="fragen">
      <SectionHeader eyebrow="Fragen" title="Was die meisten zuerst wissen wollen." />

      <div className="mt-12 max-w-3xl">
        {faq.map((item) => (
          <details
            key={item.q}
            className="group border-b border-border py-5 first:border-t"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-medium tracking-tight [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus
                size={18}
                className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
              />
            </summary>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
