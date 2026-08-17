import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

/**
 * Stand 17.08.2026. Der Text beschreibt genau das, was die Seite tut:
 * GitHub Pages als Hoster, Calendly erst nach Klick, Schriften lokal
 * ausgeliefert, keine eigenen Cookies, kein Analytics, kein Pixel, kein
 * Kontaktformular.
 *
 * OFFENER PUNKT, Kerim weiss davon: fuer ein kostenloses GitHub Konto gibt es
 * keinen zugesicherten Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.
 * GitHubs DPA gilt Leistungen „under a written and executed agreement", also
 * dem Customer Agreement, nicht den angeklickten Terms of Service. Deshalb
 * behauptet dieser Text keinen AVV. Wer einen braucht, muss auf einen Hoster
 * wechseln, der ihn im gewaehlten Tarif zusichert.
 *
 * Wenn sich daran etwas aendert, muss dieser Text mit. Besonders:
 * - Analytics, Pixel oder Vercel Speed Insights einbauen -> eigener Absatz
 *   plus echtes Consent Banner, die Zwei Klick Loesung reicht dann nicht mehr.
 * - Kontaktformular zurueckholen -> Absatz zum Auftragsverarbeiter zurueck.
 * - Schriften von einem fremden Server laden -> Absatz „Schriftarten" faellt.
 *
 * Durchgang gegen Art. 13 DSGVO am 17.08.2026. Enthalten sind jetzt
 * Verantwortlicher, Zwecke, Rechtsgrundlagen, Empfaenger, Drittlandtransfer,
 * Speicherdauer beziehungsweise Kriterien, saemtliche Betroffenenrechte,
 * Beschwerderecht nach Art. 77, das hervorgehobene Widerspruchsrecht nach
 * Art. 21 Abs. 4, der Hinweis auf fehlende automatisierte
 * Entscheidungsfindung nach Art. 22 und die Frage, ob eine Bereitstellung
 * verpflichtend ist.
 *
 * TODO Kerim: vor dem Bewerben der Seite von jemandem mit Rechtskenntnis
 * gegenlesen lassen. Ich bin kein Anwalt.
 */
export default function Datenschutz() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
      <h1 className="display text-4xl">Datenschutzerklärung</h1>

      <p className="mt-4 text-sm text-muted-foreground">
        Stand: 17. August 2026
      </p>

      <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="mb-2 font-semibold">Verantwortlicher</h2>
          <p className="text-muted-foreground">
            Verantwortlich für die Verarbeitung deiner Daten auf dieser Website
            bin ich:
            <br />
            Kerim Quintino, {site.street}, {site.city}, {site.country}.
            <br />
            E Mail: {site.email}
          </p>
          <p className="mt-3 text-muted-foreground">
            Einen Datenschutzbeauftragten habe ich nicht benannt. Ich arbeite
            allein, damit greifen die Schwellen des Art. 37 DSGVO und des § 38
            BDSG nicht.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Kurz vorweg</h2>
          <p className="text-muted-foreground">
            Diese Website setzt keine eigenen Cookies, speichert nichts auf
            deinem Gerät und nutzt weder Analyse noch Werbedienste. Der einzige
            Dienst von außerhalb ist der Terminkalender von Calendly, und der
            lädt erst, wenn du ihn selbst anklickst. Solange du das nicht tust,
            verlässt außer den technisch nötigen Serverdaten nichts diese Seite.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Hosting und Serverdaten</h2>
          <p className="text-muted-foreground">
            Diese Website liegt als fertige Datei bei GitHub Pages, einem Dienst
            der GitHub Inc., 88 Colin P Kelly Jr Street, San Francisco, CA
            94107, USA. Beim Aufruf der Seite verarbeitet GitHub technisch
            notwendige Serverdaten, also deine IP Adresse, den Zeitpunkt des
            Zugriffs, die aufgerufene Seite, die übertragene Datenmenge und
            Angaben zu Browser und Betriebssystem. Ohne diese Daten lässt sich
            die Seite nicht ausliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
            DSGVO, mein berechtigtes Interesse an einem sicheren und stabilen
            Betrieb. Ich selbst bekomme diese Logs nicht zu sehen, werte sie
            nicht aus und führe sie mit nichts zusammen. Die Übermittlung in die
            USA stützt sich darauf, dass GitHub Inc. unter dem EU US Data
            Privacy Framework zertifiziert ist, für das die EU Kommission ein
            angemessenes Schutzniveau festgestellt hat.
          </p>
          <p className="mt-3 text-muted-foreground">
            Wie lange GitHub diese Serverdaten aufbewahrt, bestimmt GitHub
            selbst. Ich habe darauf keinen Einfluss und keinen Zugriff, ich kann
            die Daten weder abrufen noch löschen. Es gilt die Löschfrist, die
            GitHub in der eigenen Datenschutzerklärung nennt, nachzulesen unter{" "}
            <a
              href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              docs.github.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Terminbuchung über Calendly</h2>
          <p className="text-muted-foreground">
            Auf der Seite kannst du direkt ein Erstgespräch buchen. Der Kalender
            dafür kommt von der Calendly LLC, 271 17th St NW, Atlanta, GA 30363,
            USA.
          </p>
          <p className="mt-3 text-muted-foreground">
            Der Kalender ist bewusst nicht fest eingebaut. Beim Aufruf der Seite
            steht dort zunächst nur ein Hinweis mit einem Knopf. Erst wenn du
            auf diesen Knopf klickst, wird der Kalender geladen und erst dann
            werden Daten an Calendly übertragen. Dazu gehören deine IP Adresse,
            Angaben zu Browser und Gerät, die zuvor besuchte Seite und, falls du
            wirklich buchst, die Daten aus dem Buchungsformular, also Name,
            Mailadresse, Termin und was du sonst dort einträgst. Calendly setzt
            dabei eigene Cookies und speichert Daten in deinem Browser.
          </p>
          <p className="mt-3 text-muted-foreground">
            Rechtsgrundlage für das Laden des Kalenders und das Speichern auf
            deinem Gerät ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO
            und § 25 Abs. 1 TDDG, die du mit dem Klick erteilst. Buchst du
            danach einen Termin, verarbeite ich die dabei angegebenen Daten nach
            Art. 6 Abs. 1 lit. b DSGVO, um das Gespräch vorzubereiten und
            durchzuführen. Deine Einwilligung gilt nur für den aktuellen
            Seitenaufruf. Sie wird nirgendwo gespeichert, weder in einem Cookie
            noch anderswo. Wenn du die Seite neu lädst, ist der Kalender wieder
            weg. Cookies, die Calendly bereits gesetzt hat, kannst du in den
            Einstellungen deines Browsers löschen.
          </p>
          <p className="mt-3 text-muted-foreground">
            Auch hier werden Daten in die USA übermittelt. Calendly stützt das
            auf die Standardvertragsklauseln und ist nach dem Data Privacy
            Framework zwischen der EU und den USA zertifiziert. Was Calendly
            selbst mit den Daten macht, steht in der Datenschutzerklärung des
            Anbieters unter{" "}
            <a
              href="https://calendly.com/de/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              calendly.com/de/privacy
            </a>
            . Wenn du den Kalender nicht laden möchtest, schreib mir einfach
            eine Mail, das führt zum selben Ergebnis.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Kontakt per E Mail</h2>
          <p className="text-muted-foreground">
            Ein Kontaktformular gibt es auf dieser Seite nicht. Wenn du mir
            schreibst, verarbeite ich deine Mailadresse und alles, was du mir
            mitteilst, ausschließlich zur Beantwortung deiner Anfrage.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn es um eine
            mögliche Zusammenarbeit geht, sonst Art. 6 Abs. 1 lit. f DSGVO, mein
            berechtigtes Interesse an der Bearbeitung. Ich lösche deine Anfrage,
            sobald sie erledigt ist und keine gesetzlichen Aufbewahrungsfristen
            entgegenstehen. Mein Postfach liegt bei der Google Ireland Limited,
            Gordon House, Barrow Street, Dublin 4, Irland. Mails sind auf dem
            Transportweg nicht immer verschlüsselt. Wenn du mir etwas
            Vertrauliches schicken willst, sag vorher Bescheid und wir finden
            einen anderen Weg.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Cookies und Analyse</h2>
          <p className="text-muted-foreground">
            Diese Website setzt keine eigenen Cookies. Sie legt auch sonst
            nichts in deinem Browser ab, weder im lokalen Speicher noch im
            Sitzungsspeicher. Es läuft keine Reichweitenmessung, kein Analytics,
            kein Werbepixel und kein Dienst, der dein Verhalten über mehrere
            Seiten hinweg verfolgt. Cookies entstehen ausschließlich dann, wenn
            du den Kalender von Calendly selbst lädst, siehe oben.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Schriftarten</h2>
          <p className="text-muted-foreground">
            Die Schriften dieser Seite, Fraunces und Space Grotesk, werden
            zusammen mit der Seite selbst ausgeliefert. Beim Aufruf der Seite
            geht deshalb keine Verbindung zu Google, und es wird keine IP
            Adresse an Google übertragen.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Bilder auf der Seite</h2>
          <p className="text-muted-foreground">
            Alle Bilder, auch die Screenshots aus den Instagram Insights, werden
            zusammen mit der Seite ausgeliefert und kommen von keinem fremden
            Anbieter. Sie zeigen Zahlen aus Konten, die ich
            betreue, und keine Namen, Profilbilder oder sonstige Angaben, mit
            denen sich jemand identifizieren ließe.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Externe Links</h2>
          <p className="text-muted-foreground">
            An einigen Stellen verlinke ich auf mein Instagram Profil, das zur
            Meta Platforms Ireland Limited gehört, und auf Calendly. Erst wenn
            du einen solchen Link anklickst, werden Daten an den jeweiligen
            Anbieter übertragen. Auf dieser Seite sind keine Skripte, keine
            Pixel und keine eingebetteten Inhalte von Meta oder anderen sozialen
            Netzwerken hinterlegt. Für die Inhalte verlinkter Seiten sind allein
            deren Betreiber verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Verschlüsselung</h2>
          <p className="text-muted-foreground">
            Die Seite wird ausschließlich über eine verschlüsselte Verbindung
            ausgeliefert. Du erkennst das am https in der Adresszeile deines
            Browsers.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Deine Rechte</h2>
          <p className="text-muted-foreground">
            Du hast das Recht auf Auskunft über deine gespeicherten Daten
            (Art. 15 DSGVO), auf Berichtigung (Art. 16), auf Löschung (Art. 17),
            auf Einschränkung der Verarbeitung (Art. 18), auf
            Datenübertragbarkeit (Art. 20) und auf Widerspruch gegen
            Verarbeitungen, die auf einem berechtigten Interesse beruhen
            (Art. 21). Eine erteilte Einwilligung kannst du jederzeit mit
            Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3). Für alles davon
            reicht eine formlose Mail an {site.email}.
          </p>
          <p className="mt-3 text-muted-foreground">
            Außerdem kannst du dich bei einer Datenschutzaufsichtsbehörde
            beschweren (Art. 77 DSGVO). Für mich zuständig ist die
            Landesbeauftragte für Datenschutz und Informationsfreiheit
            Nordrhein-Westfalen, Kavalleriestraße 2 bis 4, 40213 Düsseldorf.
          </p>
        </section>

        {/*
          Art. 21 Abs. 4 DSGVO verlangt, dass auf das Widerspruchsrecht
          getrennt von allem anderen und deutlich sichtbar hingewiesen wird.
          Deshalb steht es hier nochmal in einem eigenen Kasten und nicht nur
          in der Aufzählung darüber.
        */}
        <section className="rounded-xl border border-border bg-secondary p-5">
          <h2 className="mb-2 font-semibold">Widerspruchsrecht</h2>
          <p className="text-muted-foreground">
            Du kannst der Verarbeitung deiner Daten jederzeit widersprechen,
            soweit sie auf einem berechtigten Interesse beruht, also auf Art. 6
            Abs. 1 lit. f DSGVO. Das betrifft auf dieser Seite die technischen
            Serverdaten beim Aufruf und die Bearbeitung einer Mail, die nicht zu
            einer Zusammenarbeit gehört. Ein Grund aus deiner besonderen
            Situation reicht. Widersprichst du, verarbeite ich diese Daten nicht
            weiter, es sei denn, ich kann zwingende schutzwürdige Gründe
            nachweisen, die deine Interessen überwiegen. Eine formlose Mail an{" "}
            {site.email} genügt.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">
            Keine automatisierte Entscheidungsfindung
          </h2>
          <p className="text-muted-foreground">
            Es findet keine automatisierte Entscheidungsfindung und kein
            Profiling im Sinne des Art. 22 DSGVO statt. Über eine
            Zusammenarbeit entscheide ich selbst, im Gespräch mit dir, und nicht
            auf Grundlage einer automatischen Auswertung.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Musst du Daten angeben?</h2>
          <p className="text-muted-foreground">
            Nein. Du bist weder gesetzlich noch vertraglich verpflichtet, mir
            Daten zu geben. Die Seite kannst du vollständig lesen, ohne
            irgendetwas anzugeben. Willst du ein Erstgespräch, brauche ich einen
            Weg, dich zu erreichen. Gibst du den nicht an, kommt schlicht kein
            Gespräch zustande, weitere Nachteile hast du nicht.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Änderungen</h2>
          <p className="text-muted-foreground">
            Wenn sich die Seite ändert, ändert sich dieser Text mit. Es gilt
            immer die Fassung, die hier steht.
          </p>
        </section>
      </div>
    </div>
  );
}
