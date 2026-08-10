export type Service = {
  title: string;
  body: string;
  icon:
    | "video"
    | "layers"
    | "pen"
    | "message"
    | "zap"
    | "chart";
};

export const services: Service[] = [
  {
    title: "Reels und Short Form",
    icon: "video",
    body: "Sprechvideos, Text auf B Roll, Tier Lists, Podcast Clips. Ich schneide, setze die Untertitel und baue die Grafiken, die den Blick halten.",
  },
  {
    title: "Karussells",
    icon: "layers",
    body: "Ich baue jede Slide einzeln in deinem Branding. Hook, Argument, klarer Abschluss. Kein Textblock, den keiner liest.",
  },
  {
    title: "Hooks und Skripte",
    icon: "pen",
    body: "Ich schreibe dir Skripte, die du nur noch ablesen musst. Recherchiert, auf Zahlen geprüft, in deiner Sprache und nicht in meiner.",
  },
  {
    title: "Captions und Community",
    icon: "message",
    body: "Ich texte die Beschreibungen und beantworte Kommentare und DMs, damit dein Profil nicht wirkt, als wäre niemand zu Hause.",
  },
  {
    title: "DM Automation",
    icon: "zap",
    body: "Ich baue dir den Manychat Funnel. Aus einem Kommentar wird eine Nachricht, aus der Nachricht ein Termin in deinem Kalender.",
  },
  {
    title: "Analyse und Reporting",
    icon: "chart",
    body: "Ich zeige dir jeden Monat schwarz auf weiß, was gelaufen ist, und schaue mir an, was bei deiner Konkurrenz gerade zieht.",
  },
];
