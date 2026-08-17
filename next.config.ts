import type { NextConfig } from "next";

/**
 * Die Seite laeuft als rein statischer Export auf GitHub Pages. Alle Routen
 * sind prerendert, es gibt keinen Server, der zur Laufzeit etwas entscheidet.
 *
 * Damit faellt der frueher hier gesetzte Header-Block weg. GitHub Pages laesst
 * keine eigenen Response-Header zu, und `headers()` wird bei `output: "export"`
 * ohnehin nicht angewendet. Verloren gehen dadurch Referrer-Policy,
 * X-Content-Type-Options, Permissions-Policy und X-Frame-Options.
 *
 * Teilweiser Ersatz steht in app/layout.tsx: die Referrer-Policy laesst sich
 * als Meta-Tag setzen, den Rest kann eine Seite ueber sich selbst nicht
 * bestimmen. HTTPS und HSTS erzwingt GitHub Pages von sich aus.
 *
 * Sobald die Seite auf einem Hoster liegt, der eigene Header erlaubt, gehoert
 * der Block zurueck. Er steht in der Git-Historie vor diesem Commit.
 */
const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages liefert keine Bildoptimierung aus. Die Bilder der Seite sind
  // klein und liegen bereits als webp beziehungsweise zugeschnittenes jpg vor.
  images: { unoptimized: true },
  // Erzeugt out/impressum/index.html statt out/impressum.html. Damit trifft
  // jeder Aufruf auf eine echte Datei, unabhaengig davon wie Pages
  // Endungen aufloest.
  trailingSlash: true,
};

export default nextConfig;
