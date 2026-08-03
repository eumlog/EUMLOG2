import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/wooban/admin', { waitUntil: 'networkidle0' });
  const html = await page.content();
  console.log("HTML:", html.substring(0, 1000));
  console.log("Contains 관리자 인증:", html.includes("관리자 인증"));
  await browser.close();
})();
