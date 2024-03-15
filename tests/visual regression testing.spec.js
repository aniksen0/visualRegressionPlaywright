// @ts-check
const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');

test.describe('Visual Regression Test On Demo Orange HRM', () => {
  let login_username = '//input[@name="username"]'
  let login_pass = '//input[@name="password"]'
  let login_submit = "button[type='submit']"
  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
  
  test('check login page', async ({ page }) => {
    // create a new todo locator  
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot();
  });
  test('check dashboard page', async ({ page }) => {
    // create a new todo locator
    await page.waitForTimeout(2000);
    await page.locator(login_username).fill("Admin")
    await page.locator(login_pass).fill("admin123")
    await page.waitForTimeout(2000);
    await page.locator(login_submit).click()
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot();
  });
  test('check my info page', async ({ page }) => {
    // create a new todo locator
    await page.locator(login_username).fill("Admin")
    await page.locator(login_pass).fill("admin123")
    await page.locator(login_submit).click()
    await page.waitForTimeout(2000);
    await page.locator("//li[6]").click()
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot();
  });
  test('check salary page', async ({ page }) => {
    // create a new todo locator
    await page.locator(login_username).fill("Admin")
    await page.locator(login_pass).fill("admin123")
    await page.locator(login_submit).click()
    await page.waitForTimeout(2000);
    await page.locator("//li[6]").click()
    await page.locator("//a[normalize-space()='Salary']").click()
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot();
  });
  test('check directory page', async ({ page }) => {
    // create a new todo locator
    await page.locator(login_username).fill("Admin")
    await page.locator(login_pass).fill("admin123")
    await page.locator(login_submit).click()
    await page.waitForTimeout(2000);
    await page.locator("//li[9]").click()
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot();
  });
  test('check admin page', async ({ page }) => {
    // create a new todo locator
    await page.locator(login_username).fill("Admin")
    await page.locator(login_pass).fill("admin123")
    await page.locator(login_submit).click()
    await page.waitForTimeout(2000);
    await page.locator("(//li)[1]").click()
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot();
  });
  test('check admin page record deletion confirmation modal', async ({ page }) => {
    // create a new todo locator
    await page.locator(login_username).fill("Admin")
    await page.locator(login_pass).fill("admin123")
    await page.locator(login_submit).click()
    await page.waitForTimeout(2000);
    await page.locator("(//li)[1]").click()
    await page.locator("((//div)[99]//button)[1]").click()
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot();
  });
});