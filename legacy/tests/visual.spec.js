// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Diasam Website - Cross Browser Tests', () => {
  
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/Diasam/);
    
    // Check banner is visible
    await expect(page.locator('#home-banner')).toBeVisible();
    
    // Check video is present
    await expect(page.locator('#home-banner video')).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Check all nav links exist
    const navLinks = ['home-banner', 'about', 'team', 'portfolio', 'contact'];
    for (const anchor of navLinks) {
      await expect(page.locator(`a[href="#${anchor}"]`).first()).toBeVisible();
    }
  });

  test('services section displays', async ({ page }) => {
    await page.goto('/#about');
    await page.waitForTimeout(1000); // Wait for PagePiling animation
    
    // Check feature boxes
    const features = page.locator('.feature-item[data-service]');
    await expect(features).toHaveCount(4);
  });

  test('service modal opens', async ({ page }) => {
    await page.goto('/#about');
    await page.waitForTimeout(1000);
    
    // Click first service
    await page.locator('.feature-item[data-service="smart-home"]').click();
    
    // Modal should appear
    await expect(page.locator('#serviceModal.active')).toBeVisible();
    
    // Close modal
    await page.locator('.service-modal-close').click();
    await page.waitForTimeout(500);
  });

  test('team carousel displays', async ({ page }) => {
    await page.goto('/#team');
    await page.waitForTimeout(1000);
    
    // Check team cards exist
    await expect(page.locator('.team-card-professional').first()).toBeVisible();
  });

  test('contact form is accessible', async ({ page }) => {
    await page.goto('/#contact');
    await page.waitForTimeout(1000);
    
    // Check form fields exist
    await expect(page.locator('input[name="userName"], input[name="firstName"]').first()).toBeVisible();
    await expect(page.locator('input[name="userEmail"]')).toBeVisible();
  });

  test('responsive - mobile viewport', async ({ page, browserName }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Mobile nav should be visible
    await expect(page.locator('.mobile-nav')).toBeVisible();
    
    // Side nav should be hidden on mobile
    await expect(page.locator('.side_nav')).not.toBeVisible();
  });

  test('take full page screenshots', async ({ page }, testInfo) => {
    await page.goto('/');
    await page.waitForTimeout(2000); // Let animations complete
    
    // Screenshot each section
    const sections = ['home-banner', 'about', 'team', 'portfolio', 'contact'];
    
    for (const section of sections) {
      await page.goto(`/#${section}`);
      await page.waitForTimeout(1500);
      
      await page.screenshot({
        path: `test-results/screenshots/${testInfo.project.name}-${section}.png`,
        fullPage: false,
      });
    }
  });

});

test.describe('Safari-Specific Tests', () => {
  test.skip(({ browserName }) => browserName !== 'webkit', 'WebKit only');

  test('video autoplay works with muted attribute', async ({ page }) => {
    await page.goto('/');
    
    const video = page.locator('#home-banner video');
    await expect(video).toHaveAttribute('muted', '');
    await expect(video).toHaveAttribute('playsinline', '');
  });

  test('backdrop-filter renders', async ({ page }) => {
    await page.goto('/');
    // Visual check - backdrop-filter support
    await expect(page.locator('.bg-overlay').first()).toBeVisible();
  });
});
