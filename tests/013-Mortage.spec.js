import {test, expect} from "@playwright/test";
import { executionAsyncId } from "async_hooks";
import exp from "constants";

test("verify Amortization Caluclator", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
    //await expect(page.locator("ul>li")).toContainText(['Jumbo Mortgages', 'Buying A Home', 'Mortgage Refinance', 'Investment Properties']);
    //await expect(page.locator("ul>li")).toContainText(['Our Calculators', 'Amortization', 'Mortgage', 'Loan Comparison', 'Refinance']);
    await page.locator("(//span[contains(text(),'Mortgage')])[1]").click();
    await expect(page.locator("//h1[normalize-space()='Mortgage Calculator']")).toBeVisible();
    await expect(page.locator("//label[text()='Purchase Price']")).toBeVisible();
    await expect(page.locator("//label[text()='Down Payment']")).toBeVisible();
    await expect(page.locator("//label[text()='Term']")).toBeVisible();
    await expect(page.locator("//label[text()='Interest Rate']")).toBeVisible();
    await expect(page.locator("//label[text()='Property Tax']")).toBeVisible();
    await expect(page.locator("//label[text()='PMI']")).toBeVisible();
    await expect(page.locator("//label[text()='Property Insurance']")).toBeVisible();
    await expect(page.locator("//label[text()='Start Date']")).toBeVisible();
    await page.locator("//input[@id='purchase_price']").fill('10000000900');
    await page.locator("//input[@id='down_payment']").fill('15432778');
    await page.locator("//input[@id='term']").fill('16');
    await page.locator("//input[@id='interest_rate']").fill('10');
    await page.locator("//input[@id='yearly_tax_payment']").fill('10000000900');
    await page.locator("//input[@id='pmi']").fill('0.09');
    await page.locator("//input[@id='yearly_insurance_payment']").fill('10000000900');
    await page.locator("//input[@id='start_date']").fill('01/11/2024');
    await page.locator("//input[@id='calculate-button']").click();
    await expect(page.locator("//h2[normalize-space()='Amortization Schedule']")).toBeVisible();













})