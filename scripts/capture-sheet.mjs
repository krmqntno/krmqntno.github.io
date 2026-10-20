// Standbild der Startseite fuer das Finale (components/film/finale.tsx).
// Nach jeder inhaltlichen Aenderung neu laufen lassen, sonst zeigt der
// Streifen am Ende eine alte Seite:
//   pnpm dev   (in einem zweiten Terminal)
//   node scripts/capture-sheet.mjs [http://localhost:3000]
// Schreibt public/img/seite.webp (ganzes Blatt, 1x), public/img/seite-hero.webp
// (nur Hero, 2x) und content/seite.json mit den Massen.
import { writeFileSync } from "node:fs";
import { launch, sleep } from "./cdp.mjs";

const base = process.argv[2] ?? "http://localhost:3000";
const W = 1440;
const { send, evaluate, close } = await launch({ width: W, height: 900 });

try {
  await send("Emulation.setDeviceMetricsOverride", { width: W, height: 900, deviceScaleFactor: 1, mobile: false });
  await send("Page.enable");
  await send("Page.navigate", { url: `${base}/?capture` });
  await sleep(2500);
  await evaluate("document.fonts.ready.then(() => true)");

  // Einmal ganz nach unten, damit Bilder laden und Zaehler auf dem Endwert stehen.
  await evaluate(`(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
    window.scrollTo(0, 0);
    return true;
  })()`);
  await sleep(2500);

  const m = await evaluate(`(() => {
    const s = document.getElementById('sheet').getBoundingClientRect();
    const h = document.querySelector('#sheet > section').getBoundingClientRect();
    return { x: s.left + scrollX, y: s.top + scrollY, w: s.width, h: s.height, heroH: h.height };
  })()`);
  const shot = async (clip, scale, quality) =>
    Buffer.from(
      (await send("Page.captureScreenshot", {
        format: "webp",
        quality,
        captureBeyondViewport: true,
        clip: { ...clip, scale },
      })).data,
      "base64",
    );

  writeFileSync("public/img/seite.webp", await shot({ x: m.x, y: m.y, width: m.w, height: m.h }, 1, 80));
  writeFileSync("public/img/seite-hero.webp", await shot({ x: m.x, y: m.y, width: m.w, height: m.heroH }, 2, 86));
  const out = { w: Math.round(m.w), h: Math.round(m.h), heroH: Math.round(m.heroH) };
  writeFileSync("content/seite.json", JSON.stringify(out, null, 2) + "\n");
  console.log("Standbild", out);
} finally {
  close();
}
