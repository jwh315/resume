const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:8080/out/resume-new.html', {waitUntil: 'networkidle'});
  await page.pdf({path: 'resume.pdf', format: 'A4'});

  await browser.close();
})();