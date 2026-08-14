const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const outDir = path.join(__dirname, "..", "reference", "eldor");
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(outDir, "home-hero.png"),
    fullPage: false,
  });
  await page.screenshot({
    path: path.join(outDir, "home-full.png"),
    fullPage: true,
  });

  await page.goto("http://localhost:3000/lab", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(outDir, "lab.png"),
    fullPage: true,
  });

  await page.goto("http://localhost:3000/work/navbatgo", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(outDir, "case-navbatgo.png"),
    fullPage: true,
  });

  console.log("Done", outDir);
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
