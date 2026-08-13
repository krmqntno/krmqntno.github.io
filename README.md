# kerim-site

Öffentliche Seite von Kerim Quintino, Social Media Manager für Selbständige und Unternehmen. Next.js 16 App Router, React 19, Tailwind 4, TypeScript, pnpm.

## Loslegen

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Vor jedem Commit:

```bash
npx tsc --noEmit
npx eslint app/ components/ content/
pnpm build
```

## Wo was liegt

| Ordner | Inhalt |
| --- | --- |
| `app/` | Seiten, Layout, Metadaten, `robots.ts`, `sitemap.ts` |
| `components/` | Bausteine, `sections/` sind die Blöcke der Startseite |
| `content/` | Alle Texte und Zahlen. Hier wird gepflegt, nicht in den Komponenten |
| `public/proof/` | Screenshots aus den Instagram Insights |

`content/site.ts` ist die eine Stelle für Name, Adresse, Mailadresse, Calendly Link, Domain und die Zahlen im Hero.

## Datenschutz

Die Seite ist absichtlich schlank gebaut:

- **Keine eigenen Cookies, kein localStorage, kein Analytics, kein Pixel.**
- **Schriften liegen lokal.** Fraunces und Space Grotesk kommen über `next/font/google`, das lädt sie beim Bauen herunter und liefert sie vom eigenen Server aus. Keine Verbindung zu Google beim Seitenaufruf.
- **Calendly lädt erst nach einem Klick.** `components/calendly-embed.tsx` rendert vorher nur eine Karte, der iframe hängt gar nicht im Baum. Das ist die Einwilligung nach § 25 Abs. 1 TDDG. Sie wird bewusst nirgends gespeichert, damit die Aussage in der Datenschutzerklärung stimmt.

**Wenn du daran etwas änderst, muss `app/datenschutz/page.tsx` mit.** Analytics oder ein Pixel einzubauen bedeutet ein echtes Consent Banner, die Zwei Klick Lösung reicht dann nicht mehr.

So prüfst du, dass nichts ungefragt lädt: DevTools, Netzwerk, Filter `calendly`, Seite neu laden und bis zur Kontaktsektion scrollen. Es darf kein einziger Request auftauchen, bevor du auf „Kalender laden" klickst.

## Vor dem Livegang

- [ ] Domain kaufen und in `content/site.ts` bei `url` eintragen. Canonical, OG Bild und Sitemap ziehen automatisch mit
- [ ] Vercel Projekt anlegen und deployen
- [ ] Bei Vercel den Auftragsverarbeitungsvertrag akzeptieren (Settings, Legal). Die Datenschutzerklärung behauptet, dass er besteht
- [ ] **Vercel Analytics und Speed Insights ausgeschaltet lassen**
- [ ] Bei Calendly den DPA akzeptieren, den Termin umbenennen und die Oberfläche auf Deutsch stellen
- [ ] Datenschutzerklärung von jemandem mit Rechtskenntnis gegenlesen lassen
