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
    body: "Sprechvideos, Text auf B Roll, Tier Lists, Podcast Clips. Schnitt, Untertitel und Motion Graphics kommen von mir.",
  },
  {
    title: "Karussells",
    icon: "layers",
    body: "Slide für Slide in deinem Branding gebaut. Hook, Argument, klarer Abschluss. Kein Textblock, den keiner liest.",
  },
  {
    title: "Hooks und Skripte",
    icon: "pen",
    body: "Skripte, die du nur noch ablesen musst. Recherchiert, auf Zahlen geprüft, auf deine Zielgruppe geschrieben.",
  },
  {
    title: "Captions und Community",
    icon: "message",
    body: "Beschreibungstexte im richtigen Ton, Antworten in Kommentaren und DMs. Dein Profil bleibt lebendig.",
  },
  {
    title: "DM Automation",
    icon: "zap",
    body: "Manychat Funnel. Aus einem Kommentar wird eine Nachricht, aus der Nachricht ein Termin in deinem Kalender.",
  },
  {
    title: "Analyse und Reporting",
    icon: "chart",
    body: "Monatlich schwarz auf weiß, was gelaufen ist. Dazu ein Blick auf deine Konkurrenz und was dort gerade zieht.",
  },
];
