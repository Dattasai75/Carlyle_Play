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
    await expect(page.locator("(//h1[normalize-space()='Mortgage Calculators'])[1]")).toHaveText("Mortgage Calculators");
    
    //verify the available hyper links in the Mortagage Refinance page.
    await expect(page.locator("//a[normalize-space()='different types of mortgage loans']")).toBeVisible();
    await page.locator("//a[normalize-space()='different types of mortgage loans']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-solutions/`);
    await page.goBack();
    //await expect(page.locator("//a[normalize-space()='Contact us']")).toHaveText('Contact us');
    
    //verify the amortization calculator visibility and functionality
    await expect(page.locator("//h3[normalize-space()='Amortization Calculator']")).toBeVisible();
    await expect(page.locator("(//a[@href='/mortgage-calculators/amortization-calculator/'])[1]")).toHaveText("Use Calculator");
    await page.locator("//a[@href='/mortgage-calculators/amortization-calculator/']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/amortization-calculator/`);
    await expect(page.locator("(//h1[normalize-space()='Amortization Calculator'])[1]")).toHaveText("Amortization Calculator");
    await expect(page.locator("(//b[normalize-space()='How Our Amortization Calculator Helps You:'])[1]")).toHaveText("How Our Amortization Calculator Helps You:");
    await expect(page.locator("(//b[normalize-space()='Need Expert Mortgage Advice?'])[1]")).toHaveText("Need Expert Mortgage Advice?");
    
    await page.goBack();

    //verify the Interest-Only Calculator visibility and functionality
    await expect(page.locator("//h3[normalize-space()='Interest-Only Calculator']")).toBeVisible();
    await expect(page.locator("(//a[@href='/mortgage-calculators/interest-only-calculator/'])[1]")).toHaveText("Use Calculator");
    await page.locator("//a[@href='/mortgage-calculators/amortization-calculator/']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/amortization-calculator/`);
    await page.goBack();

    //verify the Loan Comparison Calculator visibility and functionality
    await expect(page.locator("//h3[normalize-space()='Loan Comparison Calculator']")).toBeVisible();
    await expect(page.locator("(//a[@href='/mortgage-calculators/loan-comparison-calculator/'])[1]")).toHaveText("Use Calculator");
    await page.locator("//a[@href='/mortgage-calculators/amortization-calculator/']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/amortization-calculator/`);
    await page.goBack();

    //verify the Mortgage Calculator visibility and functionality
    await expect(page.locator("//h3[normalize-space()='Mortgage Calculator']")).toBeVisible();
    await expect(page.locator("(//a[@href='/mortgage-calculators/mortgage-calculator/'])[1]")).toHaveText("Use Calculator");
    await page.locator("//a[@href='/mortgage-calculators/amortization-calculator/']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/amortization-calculator/`);
    await page.goBack();

    //verify the Refinance Calculator visibility and functionality
    await expect(page.locator("//h3[normalize-space()='Refinance Calculator']")).toBeVisible();
    await expect(page.locator("(//a[@href='/mortgage-calculators/refinance-calculator/'])[1]")).toHaveText("Use Calculator");
    await page.locator("//a[@href='/mortgage-calculators/amortization-calculator/']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/amortization-calculator/`);
    await page.goBack();


});