import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section id="kontakt">
      <div className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.12em] text-primary">
            Kontakt
          </p>
          <h2 className="display text-3xl sm:text-4xl">
            Erzähl mir kurz, wo du stehst.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Ich schaue mir dein Profil an und sage dir im Erstgespräch ehrlich,
            ob und wie ich dir helfen kann. Auch wenn die Antwort nein lautet.
          </p>
        </div>

        <CalendlyEmbed />

        {/* Ausweg fuer alle, die lieber erst schreiben. */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 text-[15px]">
          <span className="text-muted-foreground">Lieber erst schreiben?</span>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <InstagramIcon size={17} />@{site.instagram}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail size={17} />
            {site.email}
          </a>
        </div>
      </div>
    </Section>
  );
}
