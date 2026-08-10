import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { stats } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.16),transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-[13px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Freie Kapazität ab dem nächsten Monat
        </p>

        <div className="mb-8 flex items-center gap-3.5">
          <Image
            src="/img/kerim-portrait.jpg"
            alt="Kerim Quintino"
            width={240}
            height={240}
            priority
            className="h-12 w-12 rounded-full border border-border object-cover"
          />
          <div>
            <p className="text-[15px] font-medium leading-tight">
              Kerim Quintino
            </p>
            <p className="text-sm text-muted-foreground">
              Social Media Manager, kein Agenturteam
            </p>
          </div>
        </div>

        <h1 className="display max-w-3xl text-[40px] sm:text-6xl lg:text-7xl">
          {/* Fester Umbruch, damit der zweite Satz nicht zerrissen wird. */}
          <span className="block">Menschen kaufen von Menschen.</span>
          <span className="block">Nicht von Logos.</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Deshalb baue ich keinen Firmenkanal, sondern dich. Skript, Schnitt,
          Grafiken und Funnel kommen von mir. Du lernst dabei, wie Content
          wirklich läuft.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#kontakt"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background transition-all hover:brightness-125 active:scale-[0.98]"
          >
            Erstgespräch anfragen
            <ArrowRight size={18} />
          </a>
          <a
            href="#arbeiten"
            className="inline-flex h-13 items-center justify-center rounded-full border border-border bg-background px-8 text-base font-medium transition-colors hover:bg-secondary"
          >
            Arbeiten ansehen
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="display text-3xl sm:text-4xl">{s.value}</dt>
              <dd className="mt-1.5 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
