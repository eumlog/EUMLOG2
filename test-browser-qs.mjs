import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  await page.goto('http://localhost:3000/?/wooban/status', { waitUntil: 'networkidle0' });
  const html = await page.content();
  console.log("Current URL:", page.url());
  console.log("HTML length:", html.length);
  console.log("Contains 참가자 현황:", html.includes("참가자 현황"));
  await browser.close();
})();
