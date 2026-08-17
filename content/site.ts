export const site = {
  name: "Kerim Quintino",
  role: "Social Media Manager",
  audience: "Selbständige und Unternehmen",
  instagram: "kerimquintino",
  instagramUrl: "https://instagram.com/kerimquintino",
  email: "kerim.quintino@gmail.com",
  // Ladungsfaehige Anschrift, Pflicht nach § 5 DDG. Steht im Impressum und
  // als Verantwortlicher in der Datenschutzerklaerung, deshalb nur hier.
  street: "Caldenhofer Weg 66",
  city: "59063 Hamm",
  country: "Deutschland",
  // Direkt der Termintyp, nicht die Uebersicht. Sonst muss der Besucher
  // erst „30 Minute Meeting" anklicken, bevor der Kalender erscheint.
  calendlyUrl: "https://calendly.com/kerim-quintino-bwj8/30min",
  // TODO Kerim: sobald die eigene Domain steht, hier eintragen. Wird für Metadata,
  // Canonical, OG und Sitemap genutzt.
  url: "https://kerim-quintino.vercel.app",
  description:
    "Ich mache Instagram für Selbständige und Unternehmen. Reels, Karussells, Skripte, Community und der Funnel dahinter.",
} as const;

/**
 * Die Branchen, in denen Kerim bisher gearbeitet hat.
 * TODO Kerim: ergänzen oder streichen, wenn etwas fehlt oder zu dünn ist.
 */
export const industries = [
  "Immobilienmakler",
  "Finanzberatung",
  "Content Creator",
  "Bildung und KI",
] as const;

export const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Fragen", href: "#fragen" },
] as const;

/**
 * Nur Werte, die belegbar sind. Stand 10.08.2026, live von den Profilen.
 *
 * 159.000 = Summe der Follower auf allen sieben Kanälen:
 * learn.finance_ 82.600 + _mertgueler 63.300 + robertschwagerus 4.515 +
 * makerus_consulting 3.380 + derfinanzkobold 1.991 + einfachristopher 1.945 +
 * menderesmazrekaj 1.265 = 158.996.
 *
 * 8,9 Mio = Summe der elf Reels, die im Slider unter #ergebnisse mit
 * Screenshot belegt sind: 8.911.798 Aufrufe. Die Zahl wird in
 * `components/proof-wall.tsx` aus `content/proof.ts` neu gerechnet, hier steht
 * sie nur als Text. Wenn du Folien ergänzt oder streichst, beide Stellen
 * angleichen, sonst widerspricht der Hero dem Slider.
 *
 * Ausschließlich Spitzenposts, die echte Gesamtreichweite liegt darüber.
 */
/**
 * `to` und `decimals` steuern den Zähler im Hero, `suffix` haengt hinten dran
 * und zaehlt nicht mit. `value` bleibt als Fallback ohne JavaScript.
 */
export const stats = [
  { value: "159.000", to: 159000, label: "Follower auf den Kanälen dahinter" },
  {
    value: "8,9 Mio",
    to: 8.9,
    decimals: 1,
    suffix: " Mio",
    label: "Aufrufe, jedes Reel mit Screenshot belegt",
  },
  { value: "120+", to: 120, suffix: "+", label: "Beiträge im Monat" },
  { value: "7", to: 7, label: "Kanäle betreut" },
] as const;
