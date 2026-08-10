/**
 * Öffentliche Kurzfassungen der Kundenarbeit.
 *
 * WICHTIG: Diese Datei ist handkuratiert. Niemals automatisiert aus
 * ~/clients/<slug>/profil.json generieren, dort stehen Rechnungsdaten
 * und Privatadressen drin.
 *
 * Followerzahlen live von den Profilen am 10.08.2026.
 * Wachstumsangaben vergleichen diesen Stand mit deinen Profilnotizen
 * von April 2026.
 *
 * TODO Kerim: Freigabe der Namen und Handles einholen, bevor die Seite live geht.
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
    slug: "mert",
    name: "Mert Güler",
    handle: "_mertgueler",
    niche: "Digital Creator",
    scope: "Reels und Schnitt",
    summary:
      "Der Kanal, an dem ich gelernt habe, was Short Form wirklich trägt. Begleitet bis zur Marke von 50.000 Followern.",
    results: [
      "gemeinsam von klein auf 50.000 Follower gebracht",
      "heute über 63.000 Follower",
    ],
    formats: ["Reels", "Schnitt", "Hooks"],
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
    results: ["82.600 Follower", "über 820 Beiträge im Kanal"],
    formats: ["Tier Lists", "Listenreels", "Schnitt"],
    media: [],
  },
  {
    slug: "robert",
    name: "Robert Schwagerus",
    handle: "robertschwagerus",
    niche: "Finanzmakler, Immobilien, ETFs, Rohstoffe",
    scope: "60 Beiträge im Monat, dazu makerus consulting",
    summary:
      "Direkter, kontroverser Content zu Geldpolitik und Sachwerten. Podcast Aufnahmen werden zu Shorts, dazu Whitepaper Themen als Reels und Karussells. Der Firmenkanal makerus consulting läuft mit.",
    results: [
      "von 1.800 auf 4.500 Follower in vier Monaten",
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
      "von 1.100 auf knapp 2.000 Follower in vier Monaten",
      "438.000 Views mit dem Vergleich gesetzlich gegen privat versichert",
    ],
    formats: ["Sprechvideos", "Vergleichsformate", "Karussells"],
    media: [],
  },
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
    slug: "boehmer",
    name: "Christopher Böhmer",
    handle: "einfachristopher",
    niche: "Immobilien und Finanzen",
    scope: "Reels",
    summary:
      "Tier List Format als wiedererkennbare Serie. Investments, Steuerthemen, Ausreden und Standorte, jedes Mal derselbe Aufbau.",
    results: ["1.945 Follower bei nur 63 Beiträgen", "Serienformat mit festem Wiedererkennungswert"],
    formats: ["Tier Lists", "Sprechvideos"],
    media: [],
  },
];
