// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    baseURL: 'http://localhost:8000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    // === DESKTOP BROWSERS ===
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    
    // === SAFARI ON MAC DEVICES ===
    {
      name: 'MacBook Air 13',
      use: { 
        browserName: 'webkit',
        viewport: { width: 1280, height: 800 },
        deviceScaleFactor: 2,
      },
    },
    {
      name: 'MacBook Pro 14',
      use: { 
        browserName: 'webkit',
        viewport: { width: 1512, height: 982 },
        deviceScaleFactor: 2,
      },
    },
    {
      name: 'MacBook Pro 16',
      use: { 
        browserName: 'webkit',
        viewport: { width: 1728, height: 1117 },
        deviceScaleFactor: 2,
      },
    },
    {
      name: 'iMac 24',
      use: { 
        browserName: 'webkit',
        viewport: { width: 2240, height: 1260 },
        deviceScaleFactor: 2,
      },
    },
    {
      name: 'Mac Studio Display',
      use: { 
        browserName: 'webkit',
        viewport: { width: 2560, height: 1440 },
        deviceScaleFactor: 2,
      },
    },
    
    // === iPHONE DEVICES (Safari Mobile) ===
    {
      name: 'iPhone SE',
      use: { ...devices['iPhone SE'] },
    },
    {
      name: 'iPhone 12 Mini',
      use: { ...devices['iPhone 12 Mini'] },
    },
    {
      name: 'iPhone 12',
      use: { ...devices['iPhone 12'] },
    },
    {
      name: 'iPhone 12 Pro Max',
      use: { ...devices['iPhone 12 Pro Max'] },
    },
    {
      name: 'iPhone 13',
      use: { ...devices['iPhone 13'] },
    },
    {
      name: 'iPhone 13 Pro Max',
      use: { ...devices['iPhone 13 Pro Max'] },
    },
    {
      name: 'iPhone 14',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'iPhone 14 Pro Max',
      use: { ...devices['iPhone 14 Pro Max'] },
    },
    {
      name: 'iPhone 15',
      use: { ...devices['iPhone 15'] },
    },
    {
      name: 'iPhone 15 Pro Max',
      use: { ...devices['iPhone 15 Pro Max'] },
    },
    
    // === iPAD DEVICES (Safari Tablet) ===
    {
      name: 'iPad Mini',
      use: { ...devices['iPad Mini'] },
    },
    {
      name: 'iPad',
      use: { ...devices['iPad (gen 7)'] },
    },
    {
      name: 'iPad Air',
      use: { ...devices['iPad (gen 7) landscape'] },
    },
    {
      name: 'iPad Pro 11',
      use: { ...devices['iPad Pro 11'] },
    },
    {
      name: 'iPad Pro 11 Landscape',
      use: { ...devices['iPad Pro 11 landscape'] },
    },
    {
      name: 'iPad Pro 12.9',
      use: { 
        browserName: 'webkit',
        viewport: { width: 1024, height: 1366 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
      },
    },
    
    // === ANDROID (for comparison) ===
    {
      name: 'Pixel 5',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Galaxy S21',
      use: { ...devices['Galaxy S III'] },
    },
  ],

  // Start local server before running tests
  webServer: {
    command: 'php -S localhost:8000',
    url: 'http://localhost:8000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
