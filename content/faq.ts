export type Faq = {
  q: string;
  a: string;
};

/**
 * Bewusst nur fuenf Fragen: die, die vor einer Anfrage wirklich im Weg stehen.
 * Raus sind „Gehen meine Videos viral", „Schreibst du die Skripte" und
 * „Wie lange dauert es". Letzteres steckt jetzt in der Antwort zur Laufzeit.
 */
export const faq: Faq[] = [
  {
    q: "Wie viel muss ich selbst machen?",
    a: "Mehr, als dir andere versprechen. Ein bis zwei Drehtermine im Monat, deine Storys, ab und zu ein paar Sekunden Material aus deinem Alltag und zehn Minuten, in denen du mir erzählst, was in deiner Branche gerade passiert. Alles andere übernehme ich. Wer gar nichts tun will, wird auch mit dem besten Schnitt nicht sichtbar.",
  },
  {
    q: "Wer dreht die Videos?",
    a: "Am Anfang komme ich dazu und drehe mit dir. Dabei zeigst du mir nicht nur dein Thema, ich zeige dir auch worauf es ankommt: Bildausschnitt, Licht, Ton und wie oft du ruhig neu ansetzen darfst. Danach schaffst du es allein mit dem Handy in zwanzig Minuten. Wenn ein Termin oder ein Objekt es hergibt, drehe ich weiter selbst. Nur deine Storys machst du immer allein, sonst lernt dich niemand als Person kennen.",
  },
  {
    q: "Musst du meine Branche kennen?",
    a: "Nein. Ich habe mit Immobilienmaklern, Finanzberatern, Content Creatoren und einem Anbieter für KI Schulungen gearbeitet. Das Fachwissen kommt immer vom Kunden, das Format kommt von mir. Im Onboarding hole ich mir alles, was ich dafür brauche.",
  },
  {
    q: "Was kostet die Zusammenarbeit?",
    a: "Das hängt vom Umfang ab. Zwischen 15 und 60 Beiträgen im Monat liegen Welten, dazu kommt, ob ich nur schneide oder den ganzen Kanal führe. Die Zahl nenne ich dir im Erstgespräch, sobald ich weiß, was du wirklich brauchst.",
  },
  {
    q: "Bin ich an eine Laufzeit gebunden?",
    a: "Vertraglich nicht. Rechnen solltest du trotzdem mit mindestens sechs Monaten. Wann die ersten Anfragen kommen, kann dir niemand seriös versprechen, das hängt an deiner Nische, deinem Preis und daran, wie sichtbar du vorher warst. Die ersten Monate gehen dafür drauf, deine Zielgruppe zu verstehen, Formate zu testen und herauszufinden, welche Themen bei genau deinen Leuten ziehen. Wer nach acht Wochen aussteigt, hat den Teil bezahlt, in dem gelernt wird, und den Teil verpasst, in dem es sich auszahlt.",
  },
];
