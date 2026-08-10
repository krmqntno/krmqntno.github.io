export type Step = {
  step: string;
  title: string;
  body: string;
};

export const process: Step[] = [
  {
    step: "01",
    title: "Erstgespräch",
    body: "30 Minuten. Ich schaue mir dein Profil vorher an und sage dir ehrlich, ob ich der Richtige für dich bin.",
  },
  {
    step: "02",
    title: "Onboarding",
    body: "Nische, Zielgruppe, Tonalität, No Gos. Daraus entsteht dein Contentplan für den ersten Monat.",
  },
  {
    step: "03",
    title: "Produktion",
    body: "Du drehst nach meinem Skript, bei Bedarf drehe ich vor Ort. Ich schneide, texte, plane ein und veröffentliche.",
  },
  {
    step: "04",
    title: "Auswerten",
    body: "Jeden Monat Reporting. Was funktioniert, kommt öfter. Was nicht funktioniert, fliegt raus.",
  },
];
