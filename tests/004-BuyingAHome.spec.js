import {test,expect} from "@playwright/test";

test("Buying A home", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await expect(page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]")).toBeVisible();
    await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
    await page.locator("//li[@id='menu-item-2558']//a[normalize-space()='Buying A Home']").click();
    await page.waitForTimeout(2000);
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-solutions/purchase/`);
    await expect(page.locator("//h1[normalize-space()='Buying A Home']")).toHaveText("Buying A Home");
    await expect(page.locator("//span[contains(text(),'The purchase of your perfect home—whether a loft i')]")).toHaveText("The purchase of your perfect home—whether a loft in SoMa or a beachside bungalow in Venice—is one of the most important decisions in your life. At Carlyle Financial, we recognize that a home purchase isn’t just a real estate transaction; it’s a journey that represents dreams, aspirations, and the next chapter in your life. That’s why we’re dedicated to providing a personal, supportive approach from the first steps of mortgage pre-approval to the day you receive the keys to your new home.");
    await expect(page.locator("//h3[normalize-space()='Choosing Your First Home.']")).toHaveText("Choosing Your First Home.");
    await expect(page.locator("//h3[normalize-space()='Expanding Your Lifestyle.']")).toHaveText("Expanding Your Lifestyle.");
    await expect(page.locator("//h3[normalize-space()='Adding A Second Home or Vacation Property.']")).toHaveText("Adding A Second Home or Vacation Property.");
    await expect(page.locator("//h3[normalize-space()='Investment Property.']")).toHaveText("Investment Property.");
    await expect(page.locator("//h3[normalize-space()='Living a Golden Retirement.']")).toHaveText("Living a Golden Retirement.");
    await expect(page.locator("(//b[normalize-space()='Check Out Our Online Resources'])[1]")).toHaveText("Check Out Our Online Resources");
    await expect(page.locator("(//h4[normalize-space()='Ready To Start Your Application?'])[1]")).toHaveText("Ready To Start Your Application?");
    await expect(page.locator("(//h4[normalize-space()='Need to Get Pre-Approved?'])[1]")).toHaveText("Need to Get Pre-Approved?");
    await expect(page.locator("(//span[normalize-space()='help you obtain a pre-approval letter'])[1]")).toBeVisible();
    await page.locator("(//span[normalize-space()='help you obtain a pre-approval letter'])[1]").click();
    await page.waitForTimeout(2000);
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/contact-us/`);
    await page.goBack();
    await expect(page.locator("(//h4[normalize-space()='Ready for an Expedited Closing?'])[1]")).toHaveText("Ready for an Expedited Closing?");
});