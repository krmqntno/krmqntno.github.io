export const site = {
  name: "Kerim Quintino",
  role: "Social Media Manager",
  niche: "Finanzen, Immobilien und Vermögensaufbau",
  instagram: "kerimquintino",
  instagramUrl: "https://instagram.com/kerimquintino",
  email: "kerim.quintino@gmail.com",
  // TODO Kerim: sobald Domain steht, hier eintragen. Wird für Metadata und OG genutzt.
  url: "https://kerimquintino.vercel.app",
  description:
    "Ich baue Instagram Kanäle für Berater und Makler in Finanzen und Immobilien. Reels, Karussells, Skripte, Community.",
} as const;

export const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Arbeiten", href: "#arbeiten" },
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
 * 4,4 Mio = Summe der viralen Reels aus den Kundenprofilen:
 * 984k + 865k + 727k + 674k + 564k + 438k + 112k = 4.364.000.
 * Ausschließlich Spitzenposts, die echte Gesamtreichweite liegt darüber.
 *
 * TODO Kerim: sobald du Gesamtviews aus den Insights aller Kunden hast,
 * ersetzen wir die 4,4 Mio durch die echte Zahl.
 */
export const stats = [
  { value: "159.000", label: "Follower auf den Kanälen dahinter" },
  { value: "4,4 Mio", label: "Views allein mit den Top Reels" },
  { value: "120+", label: "Beiträge im Monat" },
  { value: "7", label: "Kanäle betreut" },
] as const;
