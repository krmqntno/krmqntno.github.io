/**
 * Öffentliche Kurzfassungen der Kundenarbeit.
 *
 * WICHTIG: Diese Datei ist handkuratiert. Niemals automatisiert aus
 * ~/clients/<slug>/profil.json generieren, dort stehen Rechnungsdaten
 * und Privatadressen drin.
 *
 * TODO Kerim: Freigabe der Namen und Handles einholen, bevor die Seite live geht.
 * TODO Kerim: Zahlen unter "results" prüfen. Alles hier stammt aus deinen
 * eigenen Profilnotizen, Stand Mitte 2026.
 */

export type Media =
  | { type: "video"; src: string; poster: string; label: string }
  | { type: "image"; src: string; label: string };

export type Case = {
  slug: string;
  name: string;
  handle: string;
  niche: string;
  scope: string;
  summary: string;
  results: string[];
  formats: string[];
  media: Media[];
};

export const cases: Case[] = [
  {
    slug: "mende",
    name: "Menderes Mazrekaj",
    handle: "menderesmazrekaj",
    niche: "Immobilien und Vermögensaufbau",
    scope: "30 Beiträge im Monat",
    summary:
      "Ruhiger, strategischer Auftritt statt Luxusgeprotze. Sprechvideos mit konkreten Zahlen im Hook, dazu Karussells zu Steuern und Mietrecht.",
    results: [
      "984.000 Views mit einem Reel zu Mieterurteilen",
      "564.000 Views mit einem Reel zum Thema Steuern",
    ],
    formats: ["Sprechvideos", "Tier Lists", "Karussells", "Manychat Funnel"],
    media: [],
  },
  {
    slug: "robert",
    name: "Robert Schwagerus",
    handle: "robertschwagerus",
    niche: "Finanzmakler, Immobilien, ETFs, Rohstoffe",
    scope: "60 Beiträge im Monat",
    summary:
      "Direkter, kontroverser Content zu Geldpolitik und Sachwerten. Podcast Aufnahmen werden zu Shorts, dazu Whitepaper Themen als Reels und Karussells.",
    results: [
      "865.000 Views mit dem Reel zum Fass ohne Boden",
      "727.000 und 674.000 Views mit zwei weiteren Politikthemen",
    ],
    formats: ["Podcast Shorts", "Whitepaper Reels", "Karussells", "Story Funnel"],
    media: [],
  },
  {
    slug: "marcel",
    name: "Marcel Dittel",
    handle: "derfinanzkobold",
    niche: "Immobilien, Investments, Steuern, ETFs",
    scope: "30 Beiträge im Monat",
    summary:
      "Vergleichsformate, die eine Rechnung aufmachen und sie zu Ende führen. Netto gegen Netto, gesetzlich gegen privat, mieten gegen kaufen.",
    results: [
      "438.000 Views mit dem Vergleich gesetzlich gegen privat versichert",
      "112.000 Views mit einem Nettovergleich",
    ],
    formats: ["Sprechvideos", "Vergleichsformate", "Karussells"],
    media: [],
  },
  {
    slug: "osei",
    name: "Christopher Osei",
    handle: "learn.finance_",
    niche: "Immobilien und Finanzen",
    scope: "Schnitt und Organisation",
    summary:
      "Größter Kanal im Portfolio. Schwerpunkt auf Videoschnitt und Ablauf, dazu Tier Lists und Zahlenformate im Kanalstil.",
    results: ["83.800 Follower", "über 780 Beiträge im Kanal"],
    formats: ["Tier Lists", "Listenreels", "Schnitt"],
    media: [],
  },
  {
    slug: "boehmer",
    name: "Christopher Böhmer",
    handle: "einfachchristopher",
    niche: "Immobilien und Finanzen",
    scope: "Reels",
    summary:
      "Tier List Format als wiedererkennbare Serie. Investments, Steuerthemen, Ausreden und Standorte, jedes Mal derselbe Aufbau.",
    results: ["Serienformat mit festem Wiedererkennungswert"],
    formats: ["Tier Lists", "Sprechvideos"],
    media: [],
  },
];
