"use client";

import { useState } from "react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

/**
 * Calendly laedt erst nach einem ausdruecklichen Klick. Vorher steht hier nur
 * eine Karte, es geht kein einziger Request an calendly.com raus. Das ist die
 * Einwilligung nach § 25 Abs. 1 TDDG, deshalb darf der iframe davor nicht im
 * Baum haengen, auch nicht versteckt.
 *
 * Die Zustimmung wird bewusst nirgends gespeichert, weder Cookie noch
 * localStorage. Damit bleibt die Aussage in der Datenschutzerklaerung wahr,
 * dass diese Seite nichts auf dem Geraet ablegt. Preis: nach einem Reload
 * muss man erneut klicken.
 *
 * Die Hoehen der Karte und des iframes sind absichtlich identisch, sonst
 * springt die Seite beim Laden.
 */

const FRAME_HEIGHT = "h-[1150px] sm:h-[820px] lg:h-[760px]";

export function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false);

  const embedUrl = `${site.calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=0`;

  return (
    <div>
      {loaded ? (
        <iframe
          src={embedUrl}
          title="Terminkalender von Kerim Quintino"
          className={`w-full rounded-2xl border border-border bg-card ${FRAME_HEIGHT}`}
        />
      ) : (
        <div
          className="flex w-full flex-col items-center justify-center gap-5 rounded-2xl border border-border bg-card px-6 py-16 text-center sm:py-20"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-foreground">
            <CalendarDays size={22} />
          </span>

          <h3 className="display text-2xl sm:text-3xl">Termin buchen</h3>

          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Der Kalender kommt von Calendly. Wenn du ihn lädst, gehen deine IP
            Adresse und Browserdaten an Calendly in die USA und Calendly setzt
            Cookies. Vorher passiert nichts. Mehr dazu in der{" "}
            <Link
              href="/datenschutz"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>

          <Button size="lg" onClick={() => setLoaded(true)}>
            Kalender laden
          </Button>
        </div>
      )}

      <p className="mt-4 text-sm text-muted-foreground">
        Lieber nicht hier buchen?{" "}
        <a
          href={site.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-foreground underline underline-offset-4 transition-colors hover:text-primary"
        >
          Direkt bei Calendly öffnen
          <ArrowUpRight size={14} />
        </a>
      </p>
    </div>
  );
}
