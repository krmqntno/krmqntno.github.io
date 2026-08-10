/**
 * Die Arbeitsproben in der Arbeiten-Sektion.
 *
 * TODO Kerim: views, likes und comments aus den Insights eintragen.
 * Solange ein Wert null ist, zeigt die Seite an dieser Stelle nichts an.
 * Trag nur Zahlen ein, die zu genau diesem Clip gehören. Wenn ein Reel
 * hier nicht das ist, was du zeigen willst, sag mir welche Datei stattdessen.
 */

export type Reel = {
  slug: string;
  client: string;
  handle: string;
  title: string;
  format: string;
  /** Aufrufe. null bedeutet: wird nicht angezeigt. */
  views: string | null;
  likes: string | null;
  comments: string | null;
  /** Der Satz, der zeigt, dass hinter dem Clip eine Entscheidung steckt. */
  why: string;
};

export const reels: Reel[] = [
  {
    slug: "mende-mieter",
    client: "Menderes Mazrekaj",
    handle: "menderesmazrekaj",
    title: "Mieterurteile, die kaum jemand kennt",
    format: "Tier List",
    views: null,
    likes: null,
    comments: null,
    why: "Gerichtsurteile sind fremde Autorität, das nimmt dem Kanal die Beweislast ab. Der Zuschauer will wissen, ob sein eigener Mietvertrag betroffen ist, und bleibt bis zum letzten Urteil.",
  },
  {
    slug: "mende-investments",
    client: "Menderes Mazrekaj",
    handle: "menderesmazrekaj",
    title: "Investments von S bis D sortiert",
    format: "Tier List",
    views: null,
    likes: null,
    comments: null,
    why: "Ein Ranking zwingt zum Widerspruch. Wer sein eigenes Investment auf D sieht, schreibt einen Kommentar. Kommentare sind das Signal, das am schwersten wiegt.",
  },
  {
    slug: "robert-zweimillionen",
    client: "Robert Schwagerus",
    handle: "robertschwagerus",
    title: "Zwei Millionen",
    format: "Podcast Short",
    views: null,
    likes: null,
    comments: null,
    why: "Eine Zahl im Hook, die zu groß klingt, um wahr zu sein. Die Auflösung kommt erst nach zwanzig Sekunden, deshalb wird nicht weggewischt.",
  },
  {
    slug: "robert-ausgerastet",
    client: "Robert Schwagerus",
    handle: "robertschwagerus",
    title: "Warum er ausgerastet ist",
    format: "Podcast Short",
    views: null,
    likes: null,
    comments: null,
    why: "Emotion im Hook schlägt Information. Das Argument kommt danach, in der anderen Reihenfolge hört niemand zu.",
  },
  {
    slug: "osei-zahlen",
    client: "Christopher Osei",
    handle: "learn.finance_",
    title: "Vier Zahlen, die über deine Immobilie entscheiden",
    format: "Listenreel",
    views: null,
    likes: null,
    comments: null,
    why: "Die Liste füllt sich Punkt für Punkt und ist erst am Ende vollständig. Solange etwas fehlt, wird nicht weitergewischt.",
  },
  {
    slug: "osei-standorte",
    client: "Christopher Osei",
    handle: "learn.finance_",
    title: "Standorte im Ranking",
    format: "Tier List",
    views: null,
    likes: null,
    comments: null,
    why: "Standorte sind konkret. Wer seine eigene Stadt hört, hört bis zum Ende zu und schickt den Clip weiter.",
  },
  {
    slug: "boehmer-geldanlagen",
    client: "Christopher Böhmer",
    handle: "einfachristopher",
    title: "Geldanlagen im Ranking",
    format: "Tier List",
    views: null,
    likes: null,
    comments: null,
    why: "Gleiches Format, gleicher Aufbau, andere Person. Serien machen einen Kanal wiedererkennbar, lange bevor die Followerzahl es tut.",
  },
  {
    slug: "makerus-top10",
    client: "makerus consulting",
    handle: "makerus_consulting",
    title: "Top 10 Standorte",
    format: "Werbevideo",
    views: null,
    likes: null,
    comments: null,
    why: "Werbung, die nicht wie Werbung anfängt. Der Nutzen steht vorn, das Angebot kommt erst, wenn jemand noch da ist.",
  },
];
