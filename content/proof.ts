/**
 * Zahlen aus den Instagram Insights der betreuten Kanaele, Stand August 2026.
 * Screenshots liegen in `public/proof/`, Kundennamen bleiben bewusst draussen
 * bis die Freigaben da sind.
 *
 * `views`, `follower` und `reached` sind exakt aus dem jeweiligen Screenshot
 * uebernommen, `seconds` ist die durchschnittliche Wiedergabedauer.
 *
 * Reihenfolge: nach Aufrufen absteigend, das beste Reel zuerst.
 *
 * Zwei Generationen von Screenshots: reel-1 bis reel-5 stammen aus der
 * aelteren Insights-Ansicht (1206 x 535, Kachel „Betrachter"), reel-6 bis
 * reel-11 aus der neuen (736 x 327, Kachel „Erreichte Konten"). Beide sind auf
 * dasselbe Seitenverhaeltnis geschnitten, damit die Folien gleich hoch sind.
 * `reached` gibt es deshalb nur bei den neuen.
 */
export type ProofReel = {
  views: number;
  follower: number;
  seconds: number;
  /** Eindeutige Konten, nur in der neuen Insights-Ansicht ausgewiesen. */
  reached?: number;
  /** Bild in public/proof, Originalgroesse fuer die Lupe. */
  image: string;
  width: number;
  height: number;
};

const OLD = { width: 1206, height: 535 };
const NEW = { width: 736, height: 327 };

export const proofReels: ProofReel[] = [
  {
    views: 1680082,
    follower: 1952,
    seconds: 11,
    image: "/proof/reel-1.webp",
    ...OLD,
  },
  {
    views: 1652161,
    follower: 1582,
    seconds: 5,
    reached: 796532,
    image: "/proof/reel-6.webp",
    ...NEW,
  },
  {
    views: 1069594,
    follower: 1304,
    seconds: 6,
    reached: 411575,
    image: "/proof/reel-7.webp",
    ...NEW,
  },
  {
    views: 970856,
    follower: 2705,
    seconds: 6,
    reached: 577383,
    image: "/proof/reel-8.webp",
    ...NEW,
  },
  {
    views: 770443,
    follower: 756,
    seconds: 6,
    reached: 384857,
    image: "/proof/reel-9.webp",
    ...NEW,
  },
  {
    views: 677128,
    follower: 421,
    seconds: 11,
    image: "/proof/reel-2.webp",
    ...OLD,
  },
  {
    views: 605795,
    follower: 359,
    seconds: 9,
    image: "/proof/reel-4.webp",
    ...OLD,
  },
  {
    views: 486573,
    follower: 1179,
    seconds: 6,
    reached: 309072,
    image: "/proof/reel-10.webp",
    ...NEW,
  },
  {
    views: 449049,
    follower: 934,
    seconds: 10,
    reached: 318418,
    image: "/proof/reel-11.webp",
    ...NEW,
  },
  {
    views: 305870,
    follower: 774,
    seconds: 29,
    image: "/proof/reel-5.webp",
    ...OLD,
  },
  {
    views: 244247,
    follower: 358,
    seconds: 26,
    image: "/proof/reel-3.webp",
    ...OLD,
  },
];
