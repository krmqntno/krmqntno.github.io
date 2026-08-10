import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section id="kontakt">
      <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,620px)] lg:gap-16">
        <div className="max-w-md">
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

          <div className="mt-8 flex flex-col gap-3 text-[15px]">
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

        <ContactForm />
      </div>
    </Section>
  );
}
