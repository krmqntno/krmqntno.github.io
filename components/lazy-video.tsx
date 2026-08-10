"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

/**
 * Spielt erst, wenn der Clip wirklich im Viewport ist. Ohne das lädt die
 * Arbeiten-Sektion auf dem Handy mehrere Megabyte, bevor jemand hinscrollt.
 */
export function LazyVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-border bg-secondary">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        className="aspect-[9/16] w-full object-cover"
      />
      {!active ? (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm">
            <Play size={18} fill="currentColor" />
          </span>
        </span>
      ) : null}
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}
