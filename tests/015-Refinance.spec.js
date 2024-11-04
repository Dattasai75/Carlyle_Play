import {test, expect} from "@playwright/test";
import { executionAsyncId } from "async_hooks";
import exp from "constants";

test.only("verify Amortization Caluclator", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
    //await expect(page.locator("ul>li")).toContainText(['Jumbo Mortgages', 'Buying A Home', 'Mortgage Refinance', 'Investment Properties']);
    //await expect(page.locator("ul>li")).toContainText(['Our Calculators', 'Amortization', 'Mortgage', 'Loan Comparison', 'Refinance']);
    await page.locator("(//span[contains(text(),'Refinance')])[1]").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/refinance-calculator/`);
    await expect(page.locator("//h1[normalize-space()='Refinance Calculator']")).toBeVisible();
    await page.locator("//span[normalize-space()='Refinancing your mortgage']").click();
    await page.goBack();
    await expect(page.locator("//b[normalize-space()='How to Use the Refinance Calculator']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Current Loan Information']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Refinanced Loan Information']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Refinancing Costs']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Why Consider Refinancing?']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Understanding the Results: What to Look For']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Example Scenarios to Guide Your Decision']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Common Questions About Mortgage Refinancing']")).toBeVisible();
    //await expect(page.locator(""))







})