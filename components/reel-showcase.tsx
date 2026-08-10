"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { reels } from "@/content/reels";

export function ReelShowcase() {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStart = useRef<number | null>(null);

  const reel = reels[index];
  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + reels.length) % reels.length);
  }, []);

  // Beim Wechsel neu starten, sonst läuft der alte Clip im Hintergrund weiter.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = 0;
    if (playing) el.play().catch(() => {});
  }, [index, playing]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const stats = [
    { label: "Aufrufe", value: reel.views },
    { label: "Likes", value: reel.likes },
    { label: "Kommentare", value: reel.comments },
  ].filter((s) => s.value);

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
      {/* Reel */}
      <div
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStart.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
          touchStart.current = null;
        }}
        className="relative mx-auto w-full max-w-[340px] lg:mx-0"
      >
        <div
          className={cn(
            "relative flex items-center overflow-hidden rounded-3xl border border-border bg-secondary shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]",
            // Querformat bekommt denselben Rahmen, damit die Spalte nicht springt.
            reel.aspect === "16:9" && "aspect-[9/16]"
          )}
        >
          <video
            key={reel.slug}
            ref={videoRef}
            src={`/work/${reel.slug}.mp4`}
            poster={`/work/${reel.slug}.jpg`}
            muted={muted}
            loop
            playsInline
            preload="none"
            aria-label={
              reel.client
                ? `${reel.title}, ${reel.format} für ${reel.client}`
                : `${reel.title}, ${reel.format}`
            }
            className={cn(
              "w-full",
              reel.aspect === "16:9"
                ? "aspect-video object-contain"
                : "aspect-[9/16] object-cover"
            )}
            onClick={() => {
              const el = videoRef.current;
              if (!el) return;
              if (el.paused) {
                el.play().catch(() => {});
                setPlaying(true);
              } else {
                el.pause();
                setPlaying(false);
              }
            }}
          />

          {!playing ? (
            <button
              type="button"
              aria-label="Abspielen"
              onClick={() => {
                videoRef.current?.play().catch(() => {});
                setPlaying(true);
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-transform hover:scale-105">
                <Play size={20} fill="currentColor" />
              </span>
            </button>
          ) : (
            <button
              type="button"
              aria-label={muted ? "Ton an" : "Ton aus"}
              onClick={() => setMuted((m) => !m)}
              className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm"
            >
              {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>
          )}
        </div>

        {/* Steuerung */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Vorheriges Reel"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Nächstes Reel"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary"
            >
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            {reels.map((r, i) => (
              <button
                key={r.slug}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Reel ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-primary" : "w-1.5 bg-border"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Zahlen und Einordnung */}
      <div className="lg:pt-4">
        <p className="text-sm text-muted-foreground">
          {index + 1} von {reels.length}
        </p>

        <h3 className="display mt-3 text-2xl sm:text-3xl lg:text-4xl">
          {reel.title}
        </h3>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[15px]">
          {reel.client ? (
            <span className="font-medium">{reel.client}</span>
          ) : null}
          {reel.handle ? (
            <a
              href={`https://instagram.com/${reel.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @{reel.handle}
            </a>
          ) : null}
          <span className="rounded-full bg-secondary px-3 py-1 text-[13px] text-muted-foreground">
            {reel.format}
          </span>
        </div>

        {stats.length > 0 ? (
          <dl className="mt-9 flex flex-wrap gap-x-12 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="display text-3xl sm:text-4xl">{s.value}</dt>
                <dd className="mt-1.5 text-sm text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-9 max-w-lg border-t border-border pt-6">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-primary">
            Warum es funktioniert
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            {reel.why}
          </p>
        </div>
      </div>
    </div>
  );
}
