// Phase-4-QA: Full-Page-Screenshots aller Seiten bei 375 px und 1440 px.
import { chromium } from "playwright";

const BASE = "http://localhost:3111";
const OUT = process.env.SHOT_DIR ?? "screenshots";
const pages = [
  ["home", "/"],
  ["macarons", "/macarons"],
  ["toertchen", "/toertchen-und-kuchen"],
  ["hochzeitstorten", "/hochzeitstorten"],
  ["geburtstagstorten", "/geburtstagstorten"],
  ["catering", "/catering"],
  ["halal-bio-vegan", "/halal-bio-vegan"],
  ["ueber-uns", "/ueber-uns"],
  ["faq", "/faq"],
  ["blog", "/blog"],
  ["blogpost", "/blog/hochzeitstorte-stuttgart-bestellen"],
  ["kontakt", "/kontakt"],
  ["impressum", "/impressum"],
  ["404", "/gibt-es-nicht"],
];

const browser = await chromium.launch();
for (const [width, label] of [[375, "mobil"], [1440, "desktop"]]) {
  const context = await browser.newContext({
    viewport: { width, height: width === 375 ? 720 : 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  for (const [name, path] of pages) {
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    await page.waitForTimeout(1400); // Hero-Choreografie ausklingen lassen
    // Durchscrollen, damit alle whileInView-Reveals ausgelöst sind
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = "auto";
      const step = window.innerHeight * 0.6;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 250));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${OUT}/${name}-${label}.png`, fullPage: true });
    console.log(`OK ${name}-${label}`);
  }
  await context.close();
}
await browser.close();
