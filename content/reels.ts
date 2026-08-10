/**
 * Die Arbeitsproben in der Arbeiten-Sektion.
 *
 * Bewusst nach Formaten sortiert, nicht nach Kunden. Wer hier durchwischt,
 * soll sehen, dass die Bandbreite stimmt: Podcast, Tier List, Listenreel,
 * Objektvideo, Kinetic Typography, Werbespot, Vlog.
 *
 * TODO Kerim: bei drei Clips weiß ich nicht sicher, für wen sie waren.
 * Trag bei client und handle ein, was stimmt, oder lass beides weg,
 * dann zeigt die Karte nur das Format.
 *
 * TODO Kerim: views, likes und comments aus den Insights nachtragen.
 * Solange ein Wert null ist, zeigt die Seite an dieser Stelle nichts.
 */

export type Reel = {
  slug: string;
  /** Ohne client wird nur das Format gezeigt. */
  client?: string;
  handle?: string;
  title: string;
  format: string;
  aspect: "9:16" | "16:9";
  views: string | null;
  likes: string | null;
  comments: string | null;
  /** Der Satz, der zeigt, dass hinter dem Clip eine Entscheidung steckt. */
  why: string;
};

export const reels: Reel[] = [
  {
    slug: "robert-zweimillionen",
    client: "Robert Schwagerus",
    handle: "robertschwagerus",
    title: "Zwei Millionen",
    format: "Podcast Short",
    aspect: "9:16",
    views: null,
    likes: null,
    comments: null,
    why: "Aus einer Stunde Podcast wird ein Clip, der allein steht. Der Hook ist eine Zahl, die zu groß klingt, um wahr zu sein, die Auflösung kommt erst nach zwanzig Sekunden.",
  },
  {
    slug: "mende-mieter",
    client: "Menderes Mazrekaj",
    handle: "menderesmazrekaj",
    title: "Mieterurteile im Ranking",
    format: "Tier List",
    aspect: "9:16",
    views: null,
    likes: null,
    comments: null,
    why: "Ein Ranking zwingt zum Widerspruch. Wer eine Klausel auf D sieht, obwohl sie in seinem Vertrag steht, schreibt einen Kommentar. Kommentare wiegen am schwersten.",
  },
  {
    slug: "osei-zahlen",
    client: "Christopher Osei",
    handle: "learn.finance_",
    title: "Vier Zahlen, die über deine Immobilie entscheiden",
    format: "Listenreel",
    aspect: "9:16",
    views: null,
    likes: null,
    comments: null,
    why: "Die Liste füllt sich Punkt für Punkt und ist erst am Ende vollständig. Solange etwas fehlt, wird nicht weitergewischt.",
  },
  {
    slug: "immobilie-flensburg",
    title: "Eigenkapital, denken viele",
    format: "Objektvideo",
    aspect: "9:16",
    views: null,
    likes: null,
    comments: null,
    why: "Vor Ort gedreht, direkt am Objekt. Die Einblendungen liegen bewusst neben dem Gesicht, nie darauf, damit Mimik und Aussage sich nicht gegenseitig kaputt machen.",
  },
  {
    slug: "msci-narrativ",
    title: "Edelmetalle, Immobilien, aktive Anlagen",
    format: "Kinetic Typography",
    aspect: "9:16",
    views: null,
    likes: null,
    comments: null,
    why: "Kein Gesicht, nur Text im Takt der Stimme. Funktioniert dann, wenn der Kunde keine Zeit für einen Dreh hat, das Thema aber raus muss.",
  },
  {
    slug: "makerus-top10",
    client: "makerus consulting",
    handle: "makerus_consulting",
    title: "Top 10 Standorte",
    format: "Werbevideo",
    aspect: "9:16",
    views: null,
    likes: null,
    comments: null,
    why: "Werbung, die nicht wie Werbung anfängt. Der Nutzen steht vorn, das Angebot kommt erst, wenn jemand noch da ist.",
  },
  {
    slug: "boehmer-geldanlagen",
    client: "Christopher Böhmer",
    handle: "einfachristopher",
    title: "Geldanlagen im Ranking",
    format: "Serienformat",
    aspect: "9:16",
    views: null,
    likes: null,
    comments: null,
    why: "Gleicher Aufbau, andere Person, anderes Thema. Serien machen einen Kanal wiedererkennbar, lange bevor die Followerzahl es tut.",
  },
  {
    slug: "dayinlife",
    title: "Day in the Life",
    format: "Vlog im Querformat",
    aspect: "16:9",
    views: null,
    likes: null,
    comments: null,
    why: "Anderes Seitenverhältnis, andere Aufgabe. Eingeblendete Uhrzeiten und Statuskarten geben dem Tag eine Struktur, sonst ist es nur Material.",
  },
];
