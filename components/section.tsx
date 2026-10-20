import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-14 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  tail,
  lead,
  className,
}: {
  eyebrow?: string;
  title: string;
  /** Zweiter Teil der Ueberschrift, kursiv und grau in Instrument Serif. */
  tail?: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <Eyebrow>{eyebrow}</Eyebrow>
      ) : null}
      <h2 className="display text-3xl sm:text-[40px]">
        {title}
        {tail ? <span className="tail block">{tail}</span> : null}
      </h2>
      {lead ? (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** Kleine Plakette ueber einer Sektion, wie das Abzeichen im Film. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex rounded-full border border-border bg-[#f6f7f9] px-3 py-1 text-[13px] font-medium text-muted-foreground">
      {children}
    </p>
  );
}
