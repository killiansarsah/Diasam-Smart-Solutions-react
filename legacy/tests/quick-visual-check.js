/**
 * Quick Visual Check Script
 * Run: node tests/quick-visual-check.js
 * 
 * Opens your site in all 3 browsers side-by-side for manual inspection
 */

const { chromium, firefox, webkit } = require('playwright');

const SITE_URL = 'http://localhost:8000';

async function quickVisualCheck() {
  console.log('🚀 Starting cross-browser visual check...\n');
  console.log('Make sure your local server is running: php -S localhost:8000\n');

  const browsers = [
    { name: 'Chrome', engine: chromium },
    { name: 'Firefox', engine: firefox },
    { name: 'Safari (WebKit)', engine: webkit },
  ];

  const openBrowsers = [];

  for (const { name, engine } of browsers) {
    try {
      console.log(`Opening ${name}...`);
      const browser = await engine.launch({ headless: false });
      const context = await browser.newContext({
        viewport: { width: 1280, height: 800 },
      });
      const page = await context.newPage();
      await page.goto(SITE_URL);
      
      openBrowsers.push({ name, browser, page });
      console.log(`✅ ${name} opened successfully`);
    } catch (error) {
      console.error(`❌ Failed to open ${name}:`, error.message);
    }
  }

  console.log('\n📋 All browsers opened. Test these manually:');
  console.log('   1. PagePiling scroll behavior');
  console.log('   2. Video playback in banner');
  console.log('   3. Service modal open/close');
  console.log('   4. Team carousel navigation');
  console.log('   5. Contact form visibility');
  console.log('   6. Mobile responsive (resize window)');
  console.log('\n⏳ Browsers will close in 5 minutes, or press Ctrl+C to exit.\n');

  // Keep browsers open for manual testing
  await new Promise(resolve => setTimeout(resolve, 5 * 60 * 1000));

  // Cleanup
  for (const { browser } of openBrowsers) {
    await browser.close();
  }
}

quickVisualCheck().catch(console.error);
