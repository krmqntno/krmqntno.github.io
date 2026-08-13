import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

/**
 * Pflichtangaben nach § 5 DDG. Anschrift steht seit 13.08.2026 drin, sie
 * kommt aus `content/site.ts` und wird von der Datenschutzerklaerung
 * mitbenutzt.
 *
 * Eine Telefonnummer steht bewusst nicht hier. Nach der Rechtsprechung des
 * EuGH reicht ein zweiter schneller Kanal, die Mailadresse erfuellt das.
 * TODO Kerim: wenn du doch eine Nummer angeben willst, sag Bescheid.
 */
export default function Impressum() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
      <h1 className="display text-4xl">Impressum</h1>

      <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="mb-2 font-semibold">Angaben gemäß § 5 DDG</h2>
          <p className="text-muted-foreground">
            Kerim Quintino
            <br />
            {site.street}
            <br />
            {site.city}
            <br />
            {site.country}
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Kontakt</h2>
          <p className="text-muted-foreground">
            E Mail: {site.email}
            <br />
            Instagram: @{site.instagram}
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Umsatzsteuer</h2>
          <p className="text-muted-foreground">
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="text-muted-foreground">
            Kerim Quintino, Anschrift wie oben.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Streitschlichtung</h2>
          <p className="text-muted-foreground">
            Ich bin nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Haftung für Links</h2>
          <p className="text-muted-foreground">
            Diese Seite verlinkt auf Instagram und auf Calendly. Für die Inhalte
            dieser Seiten sind allein deren Betreiber verantwortlich. Zum
            Zeitpunkt der Verlinkung war dort nichts Rechtswidriges erkennbar.
            Wenn dir dort etwas auffällt, schreib mir und ich nehme den Link
            raus.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Bildnachweis</h2>
          <p className="text-muted-foreground">
            Alle Fotos und Videos stammen von mir oder werden mit Zustimmung der
            abgebildeten Personen verwendet.
          </p>
        </section>
      </div>
    </div>
  );
}
