const { chromium } = require('playwright');
const path = require('path');

async function generatePDF() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage({
    viewport: { width: 612, height: 792 } // Letter size
  });
  
  const htmlPath = path.resolve(__dirname, 'static/ats-resume.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });
  
  await page.pdf({
    path: path.resolve(__dirname, 'static/Lucky_Samuel_Resume.pdf'),
    format: 'Letter',
    margin: { top: '0.5in', bottom: '0.5in', left: '0.5in', right: '0.5in' },
    printBackground: true
  });
  
  await browser.close();
  console.log('PDF generated successfully!');
}

generatePDF().catch(console.error);