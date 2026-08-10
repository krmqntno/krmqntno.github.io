import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

/**
 * TODO Kerim: Pflichtangaben nach § 5 DDG.
 * Ohne ladungsfähige Anschrift ist die Seite abmahnfähig.
 * Ersetze alle Platzhalter in eckigen Klammern, bevor die Seite live geht.
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
            [Straße und Hausnummer]
            <br />
            [PLZ Ort]
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Kontakt</h2>
          <p className="text-muted-foreground">
            Telefon: [Telefonnummer]
            <br />
            E Mail: {site.email}
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
