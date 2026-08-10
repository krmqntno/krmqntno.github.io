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
              Ich heiße Kerim, bin selbstständig und mache Instagram für Berater
              und Makler aus Finanzen und Immobilien. Rund 120 Beiträge im Monat
              gehen durch meine Hände, vom Skript bis zum fertigen Reel.
            </p>
            <p>
              Angefangen habe ich am Schnittplatz. Irgendwann war klar, dass der
              beste Schnitt nichts rettet, wenn der Hook nicht sitzt und niemand
              weiß, was er nach dem Video tun soll. Seitdem übernehme ich den
              ganzen Weg.
            </p>
            <p>
              Ich habe mich bewusst auf eine Nische festgelegt. Ich weiß, welche
              Hooks hier ziehen, welche Aussagen du besser nicht triffst und ab
              wann ein Kanal Anfragen produziert statt nur Likes.
            </p>
            <p>
              Ich verspreche dir keine Zahlen. Ich sage dir, wenn eine Idee
              nichts taugt, und ich sage dir auch, wenn ich nicht der Richtige
              für dich bin.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
