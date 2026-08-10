/**
 * Die stärksten veröffentlichten Reels.
 *
 * Alle Zahlen am 10.08.2026 direkt von den Profilen abgelesen.
 * Kein geschätzter Wert, kein gerundeter Wert.
 *
 * TODO Kerim: Permalinks nachtragen, ich habe nur den von Mende.
 * Öffne das Reel, kopiere die URL aus der Adresszeile, hier eintragen.
 * Ohne url verlinkt die Karte auf das Profil.
 */

export type TopReel = {
  client: string;
  handle: string;
  topic: string;
  views: string;
  likes: string;
  comments: string;
  date: string;
  url?: string;
};

export const topReels: TopReel[] = [
  {
    client: "Menderes Mazrekaj",
    handle: "menderesmazrekaj",
    topic: "Mietklauseln, die vor Gericht nicht halten",
    views: "985.203",
    likes: "2.715",
    comments: "148",
    date: "Dezember 2025",
    url: "https://www.instagram.com/reel/DSX-eDCjigW/",
  },
  {
    client: "Robert Schwagerus",
    handle: "robertschwagerus",
    topic: "Immobilien für die Mittelschicht",
    views: "356.719",
    likes: "351",
    comments: "69",
    date: "August 2026",
  },
  {
    client: "Robert Schwagerus",
    handle: "robertschwagerus",
    topic: "Eine Immobilie, die du niemals abbezahlen solltest",
    views: "350.049",
    likes: "552",
    comments: "78",
    date: "November 2025",
  },
  {
    client: "Marcel Dittel",
    handle: "derfinanzkobold",
    topic: "Warum nicht jeder mit 2.800 Euro netto kauft",
    views: "142.301",
    likes: "65",
    comments: "101",
    date: "Juni 2026",
  },
  {
    client: "Christopher Osei",
    handle: "learn.finance_",
    topic: "Was dir kein Makler sagt",
    views: "104.443",
    likes: "208",
    comments: "19",
    date: "Juli 2026",
  },
];
