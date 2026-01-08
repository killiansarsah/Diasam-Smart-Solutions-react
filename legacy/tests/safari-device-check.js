/**
 * Safari Device Visual Check
 * Opens your site in WebKit at various Apple device screen sizes
 * 
 * Run: npm run test:safari:visual
 */

const { webkit } = require('playwright');

const SITE_URL = 'http://localhost:8000';

// Apple device specifications
const APPLE_DEVICES = {
  // Mac Devices
  mac: [
    { name: 'MacBook Air 13"', width: 1280, height: 800, scale: 2 },
    { name: 'MacBook Air 15"', width: 1440, height: 900, scale: 2 },
    { name: 'MacBook Pro 14"', width: 1512, height: 982, scale: 2 },
    { name: 'MacBook Pro 16"', width: 1728, height: 1117, scale: 2 },
    { name: 'iMac 24"', width: 2240, height: 1260, scale: 2 },
    { name: 'Studio Display 27"', width: 2560, height: 1440, scale: 2 },
    { name: 'Pro Display XDR 32"', width: 3008, height: 1692, scale: 2 },
  ],
  
  // iPhone Devices  
  iphone: [
    { name: 'iPhone SE (3rd gen)', width: 375, height: 667, scale: 2 },
    { name: 'iPhone 12 mini', width: 375, height: 812, scale: 3 },
    { name: 'iPhone 12/13/14', width: 390, height: 844, scale: 3 },
    { name: 'iPhone 12/13/14 Pro', width: 393, height: 852, scale: 3 },
    { name: 'iPhone 14/15 Pro Max', width: 430, height: 932, scale: 3 },
    { name: 'iPhone 15 Pro', width: 393, height: 852, scale: 3 },
  ],
  
  // iPad Devices
  ipad: [
    { name: 'iPad mini (6th gen)', width: 744, height: 1133, scale: 2 },
    { name: 'iPad (10th gen)', width: 820, height: 1180, scale: 2 },
    { name: 'iPad Air (5th gen)', width: 820, height: 1180, scale: 2 },
    { name: 'iPad Pro 11"', width: 834, height: 1194, scale: 2 },
    { name: 'iPad Pro 12.9"', width: 1024, height: 1366, scale: 2 },
    { name: 'iPad Pro 11" Landscape', width: 1194, height: 834, scale: 2 },
    { name: 'iPad Pro 12.9" Landscape', width: 1366, height: 1024, scale: 2 },
  ],
};

async function testDevice(browser, device, category) {
  const context = await browser.newContext({
    viewport: { width: device.width, height: device.height },
    deviceScaleFactor: device.scale,
    isMobile: category !== 'mac',
    hasTouch: category !== 'mac',
  });
  
  const page = await context.newPage();
  await page.goto(SITE_URL);
  await page.waitForTimeout(2000);
  
  // Take screenshots of each section
  const sections = ['home-banner', 'about', 'team', 'portfolio', 'contact'];
  const safeName = device.name.replace(/[^a-z0-9]/gi, '-').toLowerCase();
  
  for (const section of sections) {
    await page.goto(`${SITE_URL}/#${section}`);
    await page.waitForTimeout(1500);
    
    await page.screenshot({
      path: `test-results/safari-devices/${category}/${safeName}-${section}.png`,
    });
  }
  
  await context.close();
  return true;
}

async function runSafariDeviceTests() {
  console.log('🍎 Safari Device Testing Suite\n');
  console.log('Testing on WebKit (Safari engine) with Apple device viewports\n');
  console.log('Make sure your server is running: npm run serve\n');
  
  // Create output directories
  const fs = require('fs');
  const dirs = [
    'test-results/safari-devices/mac',
    'test-results/safari-devices/iphone', 
    'test-results/safari-devices/ipad'
  ];
  for (const dir of dirs) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const browser = await webkit.launch({ headless: true });
  
  console.log('📱 Testing iPhone devices...');
  for (const device of APPLE_DEVICES.iphone) {
    try {
      await testDevice(browser, device, 'iphone');
      console.log(`   ✅ ${device.name}`);
    } catch (e) {
      console.log(`   ❌ ${device.name}: ${e.message}`);
    }
  }
  
  console.log('\n📱 Testing iPad devices...');
  for (const device of APPLE_DEVICES.ipad) {
    try {
      await testDevice(browser, device, 'ipad');
      console.log(`   ✅ ${device.name}`);
    } catch (e) {
      console.log(`   ❌ ${device.name}: ${e.message}`);
    }
  }
  
  console.log('\n💻 Testing Mac devices...');
  for (const device of APPLE_DEVICES.mac) {
    try {
      await testDevice(browser, device, 'mac');
      console.log(`   ✅ ${device.name}`);
    } catch (e) {
      console.log(`   ❌ ${device.name}: ${e.message}`);
    }
  }
  
  await browser.close();
  
  console.log('\n✨ Done! Screenshots saved to: test-results/safari-devices/');
  console.log('\nDirectory structure:');
  console.log('   📁 safari-devices/');
  console.log('      📁 mac/      - MacBook, iMac, Studio Display');
  console.log('      📁 iphone/   - iPhone SE through iPhone 15 Pro Max');
  console.log('      📁 ipad/     - iPad Mini through iPad Pro 12.9"');
}

// Interactive mode - open browsers for manual testing
async function interactiveMode(category = 'all') {
  console.log(`\n🔍 Interactive Mode: Opening ${category} devices...\n`);
  
  const browser = await webkit.launch({ headless: false });
  const pages = [];
  
  let devices = [];
  if (category === 'all' || category === 'iphone') {
    devices = devices.concat(APPLE_DEVICES.iphone.slice(0, 3)); // First 3 iPhones
  }
  if (category === 'all' || category === 'ipad') {
    devices = devices.concat(APPLE_DEVICES.ipad.slice(0, 2)); // First 2 iPads
  }
  if (category === 'all' || category === 'mac') {
    devices = devices.concat(APPLE_DEVICES.mac.slice(0, 2)); // First 2 Macs
  }
  
  for (const device of devices) {
    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height },
      deviceScaleFactor: Math.min(device.scale, 2), // Cap at 2 for display
      isMobile: device.width < 1024,
      hasTouch: device.width < 1024,
    });
    const page = await context.newPage();
    await page.goto(SITE_URL);
    pages.push({ page, device: device.name });
    console.log(`   ✅ Opened: ${device.name} (${device.width}x${device.height})`);
  }
  
  console.log('\n📋 Browsers open for manual testing.');
  console.log('   Press Ctrl+C to close all browsers.\n');
  
  // Keep open for 10 minutes
  await new Promise(resolve => setTimeout(resolve, 10 * 60 * 1000));
  await browser.close();
}

// Parse command line args
const args = process.argv.slice(2);
if (args.includes('--interactive') || args.includes('-i')) {
  const category = args[1] || 'all';
  interactiveMode(category).catch(console.error);
} else {
  runSafariDeviceTests().catch(console.error);
}
