"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { captureMode, reducedMotion, smooth, subscribe } from "./loop";

/**
 * Ein Stueck Seite, das sich beim Vorbeiscrollen abhebt. Kommt es unten ins
 * Bild, steht es mit der Oberkante zur Linse und schwebt hoch, in der Mitte
 * liegt es fast flach und knapp ueber dem Blatt, damit es lesbar ist.
 *
 * Gemessen wird der aeussere Rahmen, bewegt wird nur der innere. Sonst
 * veraendert die eigene Bewegung die Messung und die Karte zittert.
 *
 * Der Schatten bleibt auf dem Blatt liegen und wandert mit der Hoehe z nach
 * (0.10 z, 4 + 0.36 z), wie im Film.
 */
export function Lift({
  children,
  className,
  z = 30,
  tilt = 14,
  rest = 0.2,
  radius = 16,
}: {
  children: React.ReactNode;
  className?: string;
  /** Hoechste Hoehe in px, Standard 30. Die meisten Stuecke bleiben bei 20 bis 40. */
  z?: number;
  /** Aufrichtwinkel in Grad, wenn das Stueck unten ins Bild kommt. */
  tilt?: number;
  /** Anteil der Hoehe, der in der Bildmitte bleibt. */
  rest?: number;
  radius?: number;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const shadow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    const s = shadow.current;
    if (!o || !i || !s || reducedMotion() || captureMode()) return;

    return subscribe(({ vw, vh }) => {
      const r = o.getBoundingClientRect();
      if (r.bottom < -300 || r.top > vh + 300) return;
      // Auf dem Handy halb so stark, sonst ragen Karten ueber den Rand.
      const k = vw < 1024 ? 0.5 : 1;
      const p = (r.top + r.height / 2 - vh * 0.5) / (vh * 0.5);
      const e = smooth(0, 1.1, p);
      const max = z * k;
      const lift = max * (rest + (1 - rest) * e);
      const ang = tilt * k * e;
      i.style.transform = `perspective(1400px) translateZ(${lift.toFixed(1)}px) rotateX(${(-ang).toFixed(2)}deg)`;
      s.style.transform = `translate(${(0.1 * lift).toFixed(1)}px, ${(4 + 0.36 * lift).toFixed(1)}px)`;
      s.style.opacity = (0.3 + (0.7 * lift) / (max || 1)).toFixed(3);
    });
  }, [z, tilt, rest]);

  return (
    <div ref={outer} className={cn("relative", className)}>
      <div ref={shadow} aria-hidden className="lift-shadow" style={{ borderRadius: radius }} />
      <div ref={inner} className="relative will-change-transform">
        {children}
      </div>
    </div>
  );
}
