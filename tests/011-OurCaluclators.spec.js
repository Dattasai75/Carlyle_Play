import {test, expect} from "@playwright/test";
import { executionAsyncId } from "async_hooks";
import exp from "constants";

test("verify Blogs page", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await expect(page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]")).click();
    //await expect(page.locator("ul>li")).toContainText(['Jumbo Mortgages', 'Buying A Home', 'Mortgage Refinance', 'Investment Properties']);
    //await expect(page.locator("ul>li")).toContainText(['Our Calculators', 'Amortization', 'Mortgage', 'Loan Comparison', 'Refinance']);
    await page.locator("//span[normalize-space()='Our Calculators']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/`);
    await expect(page.locator("//a[normalize-space()='different types of mortgage loans']")).toBeVisible();
    await page.locator("//a[normalize-space()='different types of mortgage loans']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-solutions/`);
    await page.goBack();
    await expect(page.locator("//a[normalize-space()='Contact us']")).toHaveText('Contact us');
    await expect(page.locator("//h3[normalize-space()='Amortization Calculator']")).toBeVisible();
    await expect(page.locator("//h3[normalize-space()='Interest-Only Calculator']")).toBeVisible();
    await expect(page.locator("//h3[normalize-space()='Loan Comparison Calculator']")).toBeVisible();
    await expect(page.locator("//h3[normalize-space()='Mortgage Calculator']")).toBeVisible();
    await expect(page.locator("//h3[normalize-space()='Refinance Calculator']")).toBeVisible();
    await expect(page.locator("")).toBeVisible();
    await page.locator("//a[@href='/mortgage-calculators/amortization-calculator/']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/amortization-calculator/`);
    await page.goBack();







})