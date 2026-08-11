import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

/**
 * Calendly steckt direkt als iframe in der Seite, damit der Termin hier
 * gebucht wird und niemand weggeschickt wird. Das laedt beim Seitenaufruf
 * Daten von calendly.com, deshalb gehoert ein Absatz dazu in die
 * Datenschutzerklaerung.
 */
export function CalendlyEmbed() {
  const embedUrl = `${site.calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=0`;

  return (
    <div>
      <iframe
        src={embedUrl}
        title="Terminkalender von Kerim Quintino"
        loading="lazy"
        className="h-[1150px] w-full rounded-2xl border border-border bg-card sm:h-[820px] lg:h-[760px]"
      />

      <p className="mt-4 text-sm text-muted-foreground">
        Der Kalender kommt von Calendly, dabei werden Daten dorthin übertragen.{" "}
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
