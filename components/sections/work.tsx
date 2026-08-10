import Image from "next/image";
import { Section, SectionHeader } from "@/components/section";
import { LazyVideo } from "@/components/lazy-video";
import { cases } from "@/content/cases";

export function Work() {
  return (
    <Section id="arbeiten">
      <SectionHeader
        eyebrow="Arbeiten"
        title="Fünf Kanäle, eine Nische."
        lead="Alles hier ist durch meine Hände gegangen. Namen und Zahlen zeige ich nur mit Freigabe der Kunden."
      />

      <div className="mt-14 flex flex-col gap-4">
        {cases.map((c) => (
          <article
            key={c.slug}
            className="rounded-2xl border border-border bg-card p-7 sm:p-9"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
              <div className="lg:w-[38%] lg:shrink-0">
                <h3 className="text-xl font-semibold tracking-tight">
                  {c.name}
                </h3>
                <a
                  href={`https://instagram.com/${c.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-primary hover:underline"
                >
                  @{c.handle}
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  {c.niche} · {c.scope}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {c.formats.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-secondary px-3 py-1 text-[13px] text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:flex-1">
                <p className="text-[15px] leading-relaxed">{c.summary}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {c.results.map((r) => (
                    <li
                      key={r}
                      className="flex gap-2.5 text-[15px] text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {c.media.length > 0 ? (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {c.media.map((m) =>
                  m.type === "video" ? (
                    <LazyVideo
                      key={m.src}
                      src={m.src}
                      poster={m.poster}
                      label={m.label}
                    />
                  ) : (
                    <Image
                      key={m.src}
                      src={m.src}
                      alt={m.label}
                      width={1080}
                      height={1350}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="rounded-2xl border border-border"
                    />
                  )
                )}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
