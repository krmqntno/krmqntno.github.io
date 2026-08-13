import type { NextConfig } from "next";

/**
 * Bewusst kein Content Security Policy. Die Seite laedt nach dem Klick ein
 * iframe von calendly.com, eine CSP muesste das durchlassen und braechte dann
 * kaum noch Schutz. Fuer eine Visitenkartenseite waere der Aufwand groesser
 * als der Gewinn.
 */
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Beim Wechsel auf eine fremde Seite geht nur die Domain mit, nicht
          // die genaue Adresse.
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Browser sollen den Dateityp nicht raten.
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Die Seite braucht weder Kamera noch Mikrofon noch Standort.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Niemand soll diese Seite in seinen eigenen Rahmen stecken.
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
