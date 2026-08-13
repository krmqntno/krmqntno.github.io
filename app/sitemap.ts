import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Die Seite hat genau eine oeffentliche Adresse. Impressum und Datenschutz
 * gehoeren nicht rein, die sollen nicht indexiert werden.
 *
 * `site.url` ist noch der Platzhalter bei vercel.app. Sobald die echte Domain
 * eingetragen ist, zieht die Sitemap automatisch mit.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
