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
 * TODO Kerim: Werte bestätigen oder korrigieren.
 * Die 984k stammen aus deinem Mende Profil (Reel "Mieter-Urteile").
 */
export const stats = [
  { value: "5", label: "Kanäle in Betreuung" },
  { value: "120+", label: "Beiträge pro Monat" },
  { value: "984k", label: "Views bestes Reel" },
  { value: "2024", label: "in der Nische seit" },
] as const;
