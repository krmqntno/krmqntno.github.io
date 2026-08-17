"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";

/**
 * Ohne diese Datei zeigt Next bei einem Laufzeitfehler seine eigene, englische
 * Fehlerseite mitten in einer deutschen Seite. Der Text hier bleibt bewusst
 * knapp und nennt keinen technischen Grund, der sagt dem Besucher nichts.
 *
 * `reset` baut den fehlgeschlagenen Teil neu auf, ohne die Seite neu zu laden.
 */
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-24 sm:px-8 sm:py-32">
      <h1 className="display text-4xl">Da ist etwas schiefgelaufen.</h1>

      <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
        Der Fehler liegt bei mir, nicht bei dir. Versuch es nochmal, und wenn es
        wieder passiert, schreib mir kurz. Dann weiß ich davon.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={reset}
          className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background transition-all hover:brightness-125 active:scale-[0.98]"
        >
          <RotateCcw size={18} aria-hidden />
          Nochmal versuchen
        </button>
        <Link
          href="/"
          className="inline-flex h-13 items-center justify-center rounded-full border border-border bg-background px-8 text-base font-medium transition-colors hover:bg-secondary"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
