import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";

/**
 * Schriftpaar wie im Film: Geist fuer alles, Instrument Serif kursiv fuer
 * den grauen Nachsatz. next/font legt beide beim Bauen lokal ab, im Browser
 * gibt es keine Anfrage an Google.
 */
const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
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
  // steht, ist die Seite sonst zweimal erreichbar, hier und bei github.io,
  // und Google muss raten, welche gilt.
  alternates: { canonical: "/" },
  // Ersatz fuer den Referrer-Policy-Header, den GitHub Pages nicht setzen kann.
  // Siehe die Erklaerung in next.config.ts.
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.role}`,
    description: site.description,
    // Bewusst eine echte Datei statt der Route app/opengraph-image.tsx.
    // GitHub Pages liefert Dateien ohne Endung als application/octet-stream
    // aus, und WhatsApp, Instagram und LinkedIn zeigen dann keine Vorschau.
    // Die Vorlage, aus der das Bild entstanden ist, liegt in
    // scripts/opengraph-image.tsx.vorlage. Zum Neubauen dort zurueck nach
    // app/ schieben, einmal bauen, out/opengraph-image als public/og.png
    // speichern und die Datei wieder wegschieben.
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.role} für ${site.audience}`,
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Flache Fassung fuer das Standbild im Finale, siehe scripts/capture-sheet.mjs */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(/[?&]capture/.test(location.search))document.documentElement.setAttribute('data-capture','')",
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
