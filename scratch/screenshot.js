const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://red1-for-hek.vercel.app/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
