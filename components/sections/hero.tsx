import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { stats } from "@/content/site";
import { CountUp } from "@/components/count-up";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.16),transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-10 pb-14 sm:px-8 sm:pt-16 sm:pb-20">
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

        <h1 className="display max-w-3xl text-[38px] sm:text-5xl lg:text-[68px]">
          {/* Fester Umbruch, damit der zweite Satz nicht zerrissen wird. */}
          <span className="block">Menschen kaufen von Menschen.</span>
          <span className="block">Nicht von Logos.</span>
        </h1>

        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground sm:text-lg">
          Deshalb baue ich keinen Firmenkanal, sondern dich. Skript, Schnitt,
          Grafiken und Funnel kommen von mir. Du lernst dabei, wie Content
          wirklich läuft.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#kontakt"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background transition-all hover:brightness-125 active:scale-[0.98]"
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

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label}>
              <dt className="display text-[32px] tabular-nums sm:text-4xl">
                <CountUp
                  to={s.to}
                  decimals={"decimals" in s ? s.decimals : 0}
                  suffix={"suffix" in s ? s.suffix : ""}
                  delay={i * 120}
                />
              </dt>
              <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
