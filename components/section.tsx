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
  lead,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.12em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display text-3xl sm:text-4xl">{title}</h2>
      {lead ? (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
