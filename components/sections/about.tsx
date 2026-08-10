import Image from "next/image";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="ueber-mich" className="bg-background">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary">
          <Image
            src="/img/kerim.jpg"
            alt="Kerim Quintino am Laptop"
            width={1000}
            height={1333}
            sizes="(max-width: 1024px) 100vw, 420px"
            className="h-full w-full object-cover object-[50%_35%]"
            priority={false}
          />
        </div>

        <div className="max-w-xl">
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.12em] text-primary">
            Über mich
          </p>
          <h2 className="display text-3xl sm:text-4xl">
            Ich bin kein Agenturteam. Du bekommst mich.
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-[17px] leading-relaxed text-muted-foreground">
            <p>
              Ich heiße Kerim, bin selbstständiger Social Media Manager und
              arbeite fast ausschließlich mit Beratern und Maklern aus Finanzen
              und Immobilien. Rund 120 Beiträge im Monat gehen bei mir durch die
              Hand, vom Skript bis zum fertigen Reel.
            </p>
            <p>
              Ich habe mich bewusst auf eine Nische festgelegt. Ich weiß, welche
              Hooks in diesem Feld funktionieren, welche Aussagen du besser
              nicht triffst und ab wann ein Kanal Anfragen produziert statt nur
              Likes.
            </p>
            <p>
              Was du bei mir nicht bekommst: Reichweitenversprechen, große Worte
              und Templates von der Stange. Was du bekommst: jemanden, der
              deinen Kanal jeden Tag im Blick hat und dir sagt, wenn eine Idee
              nichts taugt.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
