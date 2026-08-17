import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Impressum und Datenschutz sollen nicht in den Suchergebnissen auftauchen,
 * beide Seiten tragen dafuer schon `robots: { index: false }` in ihren
 * Metadaten. Hier steht dasselbe nochmal fuer Crawler, die den Seiteninhalt
 * gar nicht erst laden.
 *
 * `force-static` ist beim statischen Export Pflicht, sonst weiss Next beim
 * Bauen nicht, dass diese Route eine Datei werden soll.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/impressum", "/datenschutz"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
