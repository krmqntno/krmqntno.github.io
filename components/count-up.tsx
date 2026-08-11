"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

type CountUpProps = {
  /** Zielwert, auf den hochgezaehlt wird. */
  to: number;
  /** Nachkommastellen, Standard 0. */
  decimals?: number;
  /** Text hinter der Zahl, zaehlt nicht mit. */
  suffix?: string;
  /** Dauer in Millisekunden. */
  duration?: number;
  /** Verzoegerung, damit die Zahlen versetzt starten. */
  delay?: number;
  className?: string;
};

function format(value: number, decimals: number) {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/** Startet schnell und laeuft weich aus. */
function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * Serverseitig steht direkt der Endwert im HTML, damit ohne JavaScript nichts
 * fehlt. Die Animation schreibt danach direkt in den DOM Knoten, deshalb kein
 * State und kein Rendern pro Frame.
 */
export function CountUp({
  to,
  decimals = 0,
  suffix = "",
  duration = 1600,
  delay = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useRef(false);

  // Vor dem ersten Paint auf null zuruecksetzen, sonst blitzt der Endwert auf.
  useLayoutEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced.current) return;
    if (ref.current) ref.current.textContent = format(0, decimals);
  }, [decimals]);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced.current) return;

    let frame = 0;
    let timer = 0;
    let start = 0;

    const step = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = format(to * easeOutExpo(progress), decimals);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(() => {
          frame = requestAnimationFrame(step);
        }, delay);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [to, decimals, duration, delay]);

  return (
    <span className={className}>
      <span ref={ref}>{format(to, decimals)}</span>
      {suffix}
    </span>
  );
}
