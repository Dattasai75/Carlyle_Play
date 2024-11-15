import {test,expect} from "@playwright/test";
import { mortgage_Refinance } from "../utils/common";


test.only("Verify the functionality of Motagage Refinance ", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await expect(page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]")).toBeVisible();
    await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").hover();
    await page.locator("(//a[normalize-space()='Mortgage Refinance'])[1]").click();
    await mortgage_Refinance(page);
    // await page.goto(process.env.BASE_URL_1);
    // await page.waitForTimeout(5000);
    // //await page.pause();
    // await expect(page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]")).toBeVisible();
    // await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").hover();
    // await page.locator("(//a[normalize-space()='Mortgage Refinance'])[1]").click();
    // await page.waitForTimeout(3000);
    // await expect(page.locator("//div[@class='label-outer']")).toHaveText("Mortgage Refinance");
    // await expect(page.locator("(//b[normalize-space()='The Benefits of Refinancing'])[1]")).toHaveText("The Benefits of Refinancing");
    // await expect(page.locator("(//h3[normalize-space()='Lower Monthly Payments.'])[1]")).toHaveText("Lower Monthly Payments.");
    // await expect(page.locator("(//h3[normalize-space()='Take Advantage Of Home Equity.'])[1]")).toHaveText("Take Advantage Of Home Equity.");
    // await expect(page.locator("(//h3[normalize-space()='Manage A Resetting ARM Loan.'])[1]")).toHaveText("Manage A Resetting ARM Loan.");
    // await expect(page.locator("(//h3[normalize-space()='Prosperity.'])[1]")).toHaveText("Prosperity.");
    // await expect(page.locator("(//b[contains(text(),'Carlyle Financial’s Resources for Refinancing')])[1]")).toHaveText("Carlyle Financial’s Resources for Refinancing");
    // await expect(page.locator("(//strong[normalize-space()='Refinance Document Checklist'])[1]")).toHaveText("Refinance Document Checklist");
    // //verify the available hyper links in the Mortagage Refinance page.
    // await expect(page.locator("(//a[normalize-space()='refinance document checklist'])[1]")).toHaveText("refinance document checklist");
    // await page.locator("(//a[normalize-space()='refinance document checklist'])[1]").click();
    // await page.waitForTimeout(2000);
    // await expect(page.url()).toBe(`${process.env.BASE_URL_1}/wp-content/uploads/2018/03/2018-Refinance-Document-Checklist-Carlyle-Financial.pdf`);
    // await page.goBack();
    // await expect(page.locator("(//strong[normalize-space()='Annual Loan Review'])[1]")).toHaveText("Annual Loan Review");
    // await expect(page.locator("(//strong[normalize-space()='Appraising Property Value'])[1]")).toHaveText("Appraising Property Value");
    // await expect(page.locator("(//b[normalize-space()='Understanding the Mortgage Refinance Process'])[1]")).toHaveText("Understanding the Mortgage Refinance Process");
    // await expect(page.locator("(//b[normalize-space()='Steps to Begin Your Refinance'])[1]")).toHaveText("Steps to Begin Your Refinance");
    // await expect(page.locator("(//b[normalize-space()='Why Choose Carlyle Financial?'])[1]")).toHaveText("Why Choose Carlyle Financial?");

    // //verify the available hyper links in the Mortagage Refinance page.
    // await expect(page.locator("(//span[normalize-space()='learn more about how a mortgage refinance'])[1]")).toHaveText("learn more about how a mortgage refinance");
    // await page.locator("(//span[normalize-space()='learn more about how a mortgage refinance'])[1]").click();
    // await expect(page.url()).toBe(`${process.env.BASE_URL_1}/get-started/`);
    // await page.goBack();  
    

});