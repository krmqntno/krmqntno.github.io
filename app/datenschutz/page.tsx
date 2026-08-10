import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

/**
 * TODO Kerim: Vor dem Livegang von jemandem mit Rechtskenntnis prüfen lassen.
 * Der Text deckt den tatsächlichen Stand ab: Vercel als Hoster, Resend für den
 * Formularversand, keine Analytics, keine Cookies. Sobald du Analytics oder
 * Pixel einbaust, muss dieser Text erweitert werden.
 */
export default function Datenschutz() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
      <h1 className="display text-4xl">Datenschutzerklärung</h1>

      <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="mb-2 font-semibold">Verantwortlicher</h2>
          <p className="text-muted-foreground">
            Kerim Quintino, [Straße und Hausnummer], [PLZ Ort], Deutschland.
            <br />
            E Mail: {site.email}
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Hosting</h2>
          <p className="text-muted-foreground">
            Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA gehostet. Beim Aufruf der Seite verarbeitet
            Vercel technisch notwendige Serverdaten wie IP Adresse, Zeitpunkt
            des Zugriffs, aufgerufene Seite und Browsertyp. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO, mein berechtigtes Interesse an einem
            sicheren und stabilen Betrieb. Die Übermittlung in die USA erfolgt
            auf Grundlage der Standardvertragsklauseln.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Kontaktformular</h2>
          <p className="text-muted-foreground">
            Wenn du das Formular nutzt, verarbeite ich die von dir angegebenen
            Daten, also Name, Mailadresse, optional dein Instagram Profil, die
            Auswahl deines Anliegens und deine Nachricht, ausschließlich zur
            Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
            und lit. a DSGVO. Der Versand läuft über die Resend Inc., 2261
            Market Street, San Francisco, CA 94114, USA, als Auftragsverarbeiter.
            Deine Anfrage lösche ich, sobald sie erledigt ist und keine
            gesetzlichen Aufbewahrungsfristen entgegenstehen.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Cookies und Analyse</h2>
          <p className="text-muted-foreground">
            Diese Website setzt keine Cookies und nutzt keine Analyse oder
            Trackingdienste.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Externe Links</h2>
          <p className="text-muted-foreground">
            Verlinkungen zu Instagram Profilen führen zur Meta Platforms Ireland
            Limited. Erst wenn du einen solchen Link anklickst, werden Daten an
            Meta übertragen. Es sind keine Meta Skripte auf dieser Seite
            eingebunden.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Deine Rechte</h2>
          <p className="text-muted-foreground">
            Du hast das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
            Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die
            Zukunft widerrufen. Außerdem steht dir ein Beschwerderecht bei einer
            Datenschutzaufsichtsbehörde zu.
          </p>
        </section>
      </div>
    </div>
  );
}
