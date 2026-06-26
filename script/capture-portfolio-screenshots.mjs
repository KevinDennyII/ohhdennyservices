import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../attached_assets/portfolio");

const sites = [
  { slug: "operationsolace", url: "https://operationsolace.org" },
  { slug: "aeternaexecutive", url: "https://aeternaexecutive.com" },
  { slug: "wegottheleads", url: "https://www.wegottheleads.com" },
  { slug: "fireplacerecordsdc", url: "https://fireplacerecordsdc.com" },
  { slug: "rayvilleenterprises", url: "https://www.rayvilleenterprises.com/" },
  {
    slug: "rayvillepropertymanagement",
    url: "https://www.rayvillepropertymanagement.com/",
  },
  { slug: "realhomeandlead", url: "https://realhomeandlead.com/" },
  {
    slug: "abundance-blueprint",
    url: "https://abundance-blueprint-book.replit.app/",
  },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1,
});

for (const site of sites) {
  const page = await context.newPage();
  try {
    console.log(`Capturing ${site.url}...`);
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(1500);

    const filePath = path.join(outDir, `${site.slug}.png`);
    await page.screenshot({
      path: filePath,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 480 },
    });
    console.log(`  Saved ${filePath}`);
  } catch (err) {
    console.error(`  Failed ${site.url}:`, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Done.");
