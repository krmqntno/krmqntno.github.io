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
            Du musst nicht verstehen, was gerade funktioniert.
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-[17px] leading-relaxed text-muted-foreground">
            <p>
              Ich bin jung und mit Instagram groß geworden. Was dort läuft, sehe
              ich jeden Tag selbst, nicht als Recherche, sondern weil es mein
              Alltag ist. Ich merke Wochen vorher, welches Format kippt und
              welches gerade anfängt zu ziehen.
            </p>
            <p>
              Genau das musst du dir nicht draufschaffen. Nicht wie ein Hook
              aufgebaut ist, nicht warum Leute in Sekunde drei wegwischen, nicht
              welche Hebel im Feed wirken. Dafür hast du mich, und weil wir
              jeden Monat zusammen durch die Zahlen gehen, bekommst du es
              nebenbei mit.
            </p>
            <p>
              Was ich dir nicht abnehmen kann, ist der Teil, für den es dich
              braucht. Vor der Kamera stehst du, deine Storys macht niemand für
              dich. Wer 2026 gar nichts tun will, wird auch mit dem besten
              Schnitt nicht sichtbar.
            </p>
            <p>
              Du bringst dein Fachwissen, dein Gesicht und dein Ziel mit. Ich
              bringe das Handwerk. Gearbeitet wird an deinen Zielen, nicht an
              meinen.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
