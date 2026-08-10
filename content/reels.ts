/**
 * Die Arbeitsproben in der Arbeiten-Sektion.
 *
 * Bewusst nach Formaten sortiert, nicht nach Kunden. Wer hier durchwischt,
 * soll sehen, dass die Bandbreite stimmt.
 *
 * Kerim sichtet gerade Clip für Clip und liefert nach. Neue Videos kommen
 * nach public/work/<slug>.mp4 plus <slug>.jpg als Standbild.
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
    slug: "mert-foodguide",
    client: "Mert Güler",
    handle: "_mertgueler",
    title: "Die krassesten Foodspots in Düsseldorf",
    format: "Foodguide",
    aspect: "9:16",
    views: null,
    likes: null,
    comments: null,
    why: "Weit weg von Finanzen und trotzdem dasselbe Handwerk. Ein Ort, ein Versprechen, ein Bild, das hungrig macht, bevor das erste Wort fällt.",
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
];
