/**
 * Zahlen aus den Instagram Insights der betreuten Kanaele, Stand August 2026.
 * Screenshots liegen in `public/proof/`, Kundennamen bleiben bewusst draussen
 * bis die Freigaben da sind.
 *
 * `views` und `follower` sind exakt aus dem jeweiligen Screenshot uebernommen,
 * `seconds` ist die durchschnittliche Wiedergabedauer.
 */
export type ProofReel = {
  views: number;
  follower: number;
  seconds: number;
  /** Bild in public/proof, Originalgroesse fuer die Lupe. */
  image: string;
  width: number;
  height: number;
};

export const proofReels: ProofReel[] = [
  {
    views: 1680082,
    follower: 1952,
    seconds: 11,
    image: "/proof/reel-1.webp",
    width: 1206,
    height: 535,
  },
  {
    views: 677128,
    follower: 421,
    seconds: 11,
    image: "/proof/reel-2.webp",
    width: 1206,
    height: 535,
  },
  {
    views: 605795,
    follower: 359,
    seconds: 9,
    image: "/proof/reel-4.webp",
    width: 1206,
    height: 535,
  },
  {
    views: 305870,
    follower: 774,
    seconds: 29,
    image: "/proof/reel-5.webp",
    width: 1206,
    height: 535,
  },
  {
    views: 244247,
    follower: 358,
    seconds: 26,
    image: "/proof/reel-3.webp",
    width: 1206,
    height: 535,
  },
];
