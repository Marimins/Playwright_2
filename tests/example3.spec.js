const { test, expect } = require('@playwright/test');


test.describe("Examples", () => {

    test("Testing Selectors", async ({ page }) => {

        await page.goto("https://demoqa.com/text-box");
        await page.locator('#userName').fill("Test Username");
        await page.locator('[placeholder="name@example.com"]').fill("mins@gmail.com");
        await page.locator ('#currentAddress').fill("test");
        await page.locator('#permanentAddress').fill("Test");
        await page.locator('button:has-text("Submit")').click();

        await page.pause();
        const name = page.locator('#name');
        const email = page.locator('#email');
        const currentAddress = page.locator('p#currentAddress');
        const permanentAddress = page.locator('p#permanentAddress');

        await expect(name).toBeVisible();
        await expect(name).toHaveText('Name:Test Username');
        await expect(email).toBeVisible();
        await expect(email).toHaveText('Email:mins@gmail.com');
        await expect(currentAddress).toBeVisible();
        await expect(currentAddress).toHaveText("Current Address :test");
        await expect(permanentAddress).toBeVisible();
        await expect(permanentAddress).toHaveText("Permananet Address :Test");



    })
})