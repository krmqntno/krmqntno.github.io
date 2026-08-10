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
    body: "Ich frage dich nach Nische, Zielgruppe, Tonalität und No Gos. Daraus baue ich deinen Contentplan für den ersten Monat.",
  },
  {
    step: "03",
    title: "Produktion",
    body: "Du drehst nach meinem Skript, bei größeren Terminen komme ich mit der Kamera. Ich schneide, texte und plane ein.",
  },
  {
    step: "04",
    title: "Auswerten",
    body: "Jeden Monat setze ich mich mit deinen Zahlen hin. Was funktioniert, kommt öfter. Was nicht funktioniert, fliegt raus.",
  },
];
