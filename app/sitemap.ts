import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Die Seite hat genau eine oeffentliche Adresse. Impressum und Datenschutz
 * gehoeren nicht rein, die sollen nicht indexiert werden.
 *
 * `site.url` zeigt auf die github.io Adresse. Sobald die eigene Domain
 * eingetragen ist, zieht die Sitemap automatisch mit.
 *
 * `force-static` ist beim statischen Export Pflicht, sonst weiss Next beim
 * Bauen nicht, dass diese Route eine Datei werden soll.
 */
export const dynamic = "force-static";

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
