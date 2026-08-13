import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

/**
 * Ohne diese Datei zeigt Next seine eigene 404 Seite, und die ist englisch.
 */
export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-start px-5 py-24 sm:px-8 sm:py-32">
      <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-primary">
        Fehler 404
      </p>

      <h1 className="display mt-3 text-4xl sm:text-5xl">
        Diese Seite gibt es nicht.
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
        Vielleicht ein alter Link, vielleicht ein Tippfehler. Auf der Startseite
        findest du alles, was es hier gibt.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background transition-all hover:brightness-125 active:scale-[0.98]"
      >
        <ArrowLeft size={18} />
        Zurück zur Startseite
      </Link>
    </div>
  );
}
