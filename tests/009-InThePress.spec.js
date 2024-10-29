import {test, expect} from "@playwright/test";
import exp from "constants";

test("verify In The Press page", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    //await expect(page.url()).toBe("https://www.carlylefinancial.com/");
    await page.locator("//li[@id='menu-item-22507']//a[normalize-space()='In The Press']").click();
    //await expect(page.url()).toBe("https://preprod.carlylefinancial.com/press/");
    await expect(page.locator("//h1[normalize-space()='In The Press']")).toHaveText("In The Press");
    await expect(page.locator("//a[contains(text(),'“What Beyoncé and These Billionaires Have in Commo')]")).toBeVisible();
    await expect(page.locator("//a[contains(text(),'“What is a jumbo mortgage and when do you need one')]")).toHaveText("“What is a jumbo mortgage and when do you need one?”");
    await expect(page.locator("//a[contains(text(),'“Mid-Year Interest-Rate Forecast: Will Rates Go Up')]")).toHaveText("“Mid-Year Interest-Rate Forecast: Will Rates Go Up For Good?”");
    await expect(page.locator("//a[contains(text(),'“California Leads The Way To Recovery”')]")).toBeVisible();
    await expect(page.locator("//a[contains(text(),'“Jumbo Loans Have Never Been Cheaper”')]")).toBeVisible();
    await expect(page.locator("//a[contains(text(),'“Carlyle Financial Establishes New Headquarters in')]")).toBeVisible();
    await expect(page.locator("//a[contains(text(),'“Jumbo MBS Get Mixed Signals”')]")).toBeVisible();
    //await expect(page.locator(""))
    //await expect(page.locator(""))

    //await expect(page.locator(""))

})