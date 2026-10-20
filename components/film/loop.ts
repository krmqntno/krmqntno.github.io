/**
 * Ein gemeinsamer Takt fuer alle Filmeffekte. Jeder Effekt meldet sich hier
 * an und bekommt pro Bild einmal Scrollposition und Fenstergroesse. So gibt
 * es genau einen requestAnimationFrame, egal wie viele Karten sich heben.
 */
export type Frame = { y: number; vw: number; vh: number };
type Fn = (f: Frame) => void;

const subs = new Set<Fn>();
let raf = 0;

function run() {
  raf = 0;
  const f = { y: window.scrollY, vw: window.innerWidth, vh: window.innerHeight };
  subs.forEach((fn) => fn(f));
}

function request() {
  if (!raf) raf = requestAnimationFrame(run);
}

export function subscribe(fn: Fn) {
  if (subs.size === 0) {
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
  }
  subs.add(fn);
  request();
  return () => {
    subs.delete(fn);
    if (subs.size === 0) {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

export const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Gesetzt von scripts/capture-sheet.mjs, damit das Standbild flach ist. */
export const captureMode = () =>
  document.documentElement.hasAttribute("data-capture");

export const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Weicher Uebergang von 0 bei a nach 1 bei b. */
export function smooth(a: number, b: number, x: number) {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}

export function smoother(t: number) {
  t = clamp(t);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

export function easeInOutQuad(t: number) {
  t = clamp(t);
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
