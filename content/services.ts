export type Service = {
  title: string;
  body: string;
  icon: "video" | "pen" | "zap" | "chart";
};

export const services: Service[] = [
  {
    title: "Video",
    icon: "video",
    body: "Reels, Sprechvideos, Podcast Clips, Tier Lists. Schnitt, Untertitel und Grafiken kommen von mir.",
  },
  {
    title: "Text",
    icon: "pen",
    body: "Hooks, Skripte, Karussells und Captions. Recherchiert und in deiner Sprache geschrieben, nicht in meiner.",
  },
  {
    title: "Anfragen",
    icon: "zap",
    body: "Manychat Funnel, Kommentare und DMs. Aus Reichweite wird ein Termin in deinem Kalender.",
  },
  {
    title: "Zahlen",
    icon: "chart",
    body: "Monatliches Reporting und ein Blick auf deine Konkurrenz. Was nicht läuft, fliegt raus.",
  },
];
