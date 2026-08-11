export type Service = {
  title: string;
  body: string;
  icon: "video" | "pen" | "zap" | "chart";
  /** Kurzer Text auf der Verbindung zur naechsten Station. */
  handoff?: string;
};

/**
 * Reihenfolge ist bewusst der Ablauf, nicht ein Leistungskatalog:
 * Text wird Video, Video bringt Anfragen, Anfragen ergeben Zahlen,
 * Zahlen bestimmen den naechsten Text.
 */
export const services: Service[] = [
  {
    title: "Text",
    icon: "pen",
    body: "Hooks, Skripte, Karussells und Captions. Recherchiert und in deiner Sprache geschrieben, nicht in meiner.",
    handoff: "wird zu",
  },
  {
    title: "Video",
    icon: "video",
    body: "Reels, Sprechvideos, Podcast Clips, Tier Lists. Schnitt, Untertitel und Grafiken kommen von mir.",
    handoff: "bringt",
  },
  {
    title: "Anfragen",
    icon: "zap",
    body: "Manychat Funnel, Kommentare und DMs. Aus Reichweite wird ein Termin in deinem Kalender.",
    handoff: "ergeben",
  },
  {
    title: "Zahlen",
    icon: "chart",
    body: "Monatliches Reporting und ein Blick auf deine Konkurrenz. Was nicht läuft, fliegt raus.",
  },
];
