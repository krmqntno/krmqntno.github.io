/**
 * Der Vergleich zwischen Agentur, günstigem Cutter oder Selbermachen
 * und der Zusammenarbeit mit Kerim.
 *
 * Bewusst ohne Namen. Es geht um die Arbeitsweise, nicht darum,
 * jemanden schlechtzumachen.
 */

export const comparison = {
  others: {
    label: "Woanders",
    points: [
      "Wechselnde Ansprechpartner, jedes Mal von vorn erklären",
      "Das Skript kommt von dir, geschnitten wird nur",
      "Abstimmungsrunden, Freigabeschleifen, Rückfragen",
      "Niemand schaut sich an, was der Kanal letzten Monat gemacht hat",
      "Bezahlt wird pro Video, nicht für das Ergebnis",
    ],
  },
  mine: {
    label: "Bei mir",
    points: [
      "Immer ich, vom Skript bis zum Upload",
      "Skript, Hook und Aufbau kommen von mir, du liest ab",
      "Du lernst nebenbei, warum welcher Hook zieht",
      "Jeden Monat Reporting, was nicht funktioniert fliegt raus",
      "Ein Preis für den ganzen Kanal, kein Posten pro Clip",
    ],
  },
} as const;
