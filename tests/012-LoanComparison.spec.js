// import {test, expect} from "@playwright/test";
// import { executionAsyncId } from "async_hooks";
// import exp from "constants";

// test.only("verify Loan Comparison Caluclator module", async({page})=>{
//     await page.goto(process.env.BASE_URL_1);
//     await page.waitForTimeout(5000);
//     await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
//     //await expect(page.locator("ul>li")).toContainText(['Jumbo Mortgages', 'Buying A Home', 'Mortgage Refinance', 'Investment Properties']);
//     //await expect(page.locator("ul>li")).toContainText(['Our Calculators', 'Amortization', 'Mortgage', 'Loan Comparison', 'Refinance']);
//     await page.locator("(//span[contains(text(),'Loan Comparison')])[1]").click();
//     await expect(page.locator("//h1[normalize-space()='Loan Comparison Calculator']")).toBeVisible();
//     await expect(page.locator("//a[normalize-space()='Contact us']")).toBeVisible();
//     //await expect(page.locator("//h4[normalize-space()='Loan 1']")).toBeVisible();
//     await expect(page.locator("//label[text()='Interest Rate']")).toBeVisible();
//     await expect(page.locator("//label[text()='Term']")).toBeVisible();
//     await page.locator("//input[@id='loans_0_principal']").fill('10000000900');
//     await page.locator("//input[@id='loans_0_interest_rate']").fill('5');
//     await page.locator("//input[@id='loans_0_term']").fill('10');
//     await expect(page.locator("//h1[normalize-space()='Loan 2']")).toBeVisible();
//    // await expect(page.locator("//label[text()='Loan Amount']")).toBeVisible();
//     //await expect(page.locator("//label[text()='Loan Amount']")).toBeVisible();
//     //await expect(page.locator("//label[text()='Loan Amount']")).toBeVisible();
//     //await expect(page.locator("//label[text()='Loan Amount']")).toBeVisible();


//     await page.locator("//input[@id='loans_1_principal']").fill('40000000900');
//     await page.locator("//input[@id='loans_1_interest_rate']").fill('8');
//     await page.locator("//input[@id='loans_1_term]").fill('11');
//     await page.locator("//input[@id='purchase_price']").fill('10000000900');
//     await page.locator("//input[@id='purchase_price']").fill('10000000900');
    









// })