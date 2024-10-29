import {test, expect} from "@playwright/test";
import { executionAsyncId } from "async_hooks";
import exp from "constants";

test.only("verify Amortization Caluclator", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await expect(page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]")).click();
    //await expect(page.locator("ul>li")).toContainText(['Jumbo Mortgages', 'Buying A Home', 'Mortgage Refinance', 'Investment Properties']);
    //await expect(page.locator("ul>li")).toContainText(['Our Calculators', 'Amortization', 'Mortgage', 'Loan Comparison', 'Refinance']);
    await page.locator("(//span[contains(text(),'Amortization')])[1]").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/amortization-calculator/`);
    await expect(page.locator("//b[normalize-space()='How Our Amortization Calculator Helps You:']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Need Expert Mortgage Advice?']")).toBeVisible();
    await page.locator("//span[contains(text(),'provides personalized guidance on your loan option')]").click();
    await page.goBack();
   // await expect(page.locator("//span[contains(text(),'provides personalized guidance on your loan option')]")).toHaveText("Loan Amount");
    //await expect(page.locator("//span[contains(text(),'provides personalized guidance on your loan option')]")).toHaveText("








})