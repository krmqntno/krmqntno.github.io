import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { stats } from "@/content/site";
import { CountUp } from "@/components/count-up";

/**
 * Der Hero ist der Startpunkt des Einflugs (components/film/intro.tsx).
 * Alles mit p3d reicht die dritte Dimension bis zu den Stuecken durch, die
 * mit data-stand beim Laden aufrecht zur Linse stehen. Kein overflow hidden
 * hier, das wuerde sie flach druecken.
 */
export function Hero() {
  return (
    <section className="p3d relative rounded-t-[inherit] bg-background">
      <div className="p3d relative mx-auto w-full max-w-6xl px-5 pt-10 pb-14 sm:px-8 sm:pt-16 sm:pb-20">
        {/* Name steht schon im Header, hier reicht das Gesicht. */}
        {/*
          Angezeigt wird das Bild mit 56 px, die Datei ist doppelt so breit
          fuer Bildschirme mit hoher Pixeldichte. Auf statischem Hosting gibt
          es keine Bildoptimierung, die Datei wird also so ausgeliefert, wie
          sie hier liegt.
        */}
        <Image
          src="/img/kerim-portrait.webp"
          alt="Kerim Quintino"
          width={112}
          height={112}
          priority
          className="mb-6 h-14 w-14 rounded-full border border-border object-cover"
        />

        <h1 className="display max-w-3xl text-[40px] sm:text-5xl lg:text-[56px]">
          {/* Fester Umbruch, damit der zweite Satz nicht zerrissen wird. */}
          <span className="block">Menschen kaufen von Menschen.</span>
          <span className="tail block">Nicht von Logos.</span>
        </h1>

        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground sm:text-lg">
          Deshalb baue ich keinen Firmenkanal, sondern dich. Skript, Schnitt,
          Grafiken und Funnel kommen von mir. Du lernst dabei, wie Content
          wirklich läuft.
        </p>

        {/* data-tile-anchor: hier starten die vier KQ Kacheln */}
        <div data-tile-anchor className="p3d mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#kontakt"
            data-stand="24"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background shadow-[0_10px_24px_-8px_rgba(26,33,51,0.4)] transition-[filter] hover:brightness-125"
          >
            Erstgespräch anfragen
            <ArrowRight size={18} />
          </a>
          <a
            href="#ergebnisse"
            className="inline-flex h-13 items-center justify-center rounded-full border border-border bg-background px-8 text-base font-medium transition-colors hover:bg-secondary"
          >
            Ergebnisse ansehen
          </a>
        </div>

        <dl className="p3d mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-stand={60 + (i % 2) * 20}
              className="rounded-2xl border border-border bg-white px-5 py-4 shadow-[0_12px_30px_-12px_rgba(26,33,51,0.22)]"
            >
              <dt className="display text-[28px] tabular-nums sm:text-[32px]">
                <CountUp
                  to={s.to}
                  decimals={"decimals" in s ? s.decimals : 0}
                  suffix={"suffix" in s ? s.suffix : ""}
                  delay={i * 120}
                />
              </dt>
              <dd className="mt-1.5 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
