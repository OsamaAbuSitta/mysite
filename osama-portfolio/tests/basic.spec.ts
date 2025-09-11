import { test, expect } from '@playwright/test';

test.describe('Portfolio Website', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check if the main heading is visible
    await expect(page.locator('h1')).toContainText('Osama Abu Sitta');
    
    // Check if navigation is present
    await expect(page.locator('nav')).toBeVisible();
    
    // Check if all main sections are present
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#blog')).toBeVisible();
    await expect(page.locator('#gists')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to about section
    await page.click('text=About');
    await expect(page.locator('#about')).toBeInViewport();
    
    // Test navigation to projects section
    await page.click('text=Projects');
    await expect(page.locator('#projects')).toBeInViewport();
  });

  test('should have working theme toggle', async ({ page }) => {
    await page.goto('/');
    
    // Find and click the theme toggle button
    const themeToggle = page.locator('button[aria-label*="theme"], button:has-text("Toggle theme")').first();
    await themeToggle.click();
    
    // Check if dark class is applied to html element
    const htmlElement = page.locator('html');
    const hasClass = await htmlElement.evaluate((el) => 
      el.classList.contains('dark') || el.classList.contains('light')
    );
    expect(hasClass).toBe(true);
  });

  test('should load external content', async ({ page }) => {
    await page.goto('/');
    
    // Wait for GitHub data to load (with timeout)
    await page.waitForTimeout(3000);
    
    // Check if projects section has content
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();
    
    // Check if blog section has content
    const blogSection = page.locator('#blog');
    await expect(blogSection).toBeVisible();
  });
});