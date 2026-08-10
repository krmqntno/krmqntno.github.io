import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[15px] font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {site.role} für {site.niche}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <InstagramIcon size={16} />@{site.instagram}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={16} />
              {site.email}
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <Link
              href="/impressum"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Datenschutz
            </Link>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
