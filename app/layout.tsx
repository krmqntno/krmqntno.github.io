import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";

/**
 * Schriftpaar fuer den Hero: Fraunces auf voller Weichheit als bauchiger
 * Retro-Serif, dazu Space Grotesk als nuechternes Gegenstueck.
 */
const display = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-display",
  display: "swap",
});

const sub = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sub",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role} für ${site.audience}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  // Ohne diese Zeile setzt Next gar kein Canonical. Sobald die eigene Domain
  // steht, ist die Seite sonst zweimal erreichbar, hier und bei vercel.app,
  // und Google muss raten, welche gilt.
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${sub.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
