import {test, expect} from "@playwright/test";
import { mortgage_Refinance } from "../utils/common";


test("verify Amortization Caluclator", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
    await page.locator("(//span[contains(text(),'Refinance')])[1]").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/refinance-calculator/`);
    await expect(page.locator("//h1[normalize-space()='Refinance Calculator']")).toHaveText("Refinance Calculator");

    //verify the available hyper links in the Refinance Calculator page.
    await expect(page.locator("(//span[normalize-space()='Refinancing your mortgage'])[1]")).toHaveText("Refinancing your mortgage");
    await page.locator("(//span[normalize-space()='Refinancing your mortgage'])[1]").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-solutions/refinance/`);
    await expect(page.locator("//h1[normalize-space()='Mortgage Refinance']")).toHaveText("Mortgage Refinance");
    await mortgage_Refinance(page);

    await expect(page.locator('[id="e467cac52557"]').contentFrame().getByText('Current Loan')).toHaveText("Current Loan");
    await expect(page.locator('[id="e467cac52557"]').contentFrame().getByText('Loan Balance')).toHaveText("Loan Balance");
    await expect(page.locator('[id="e467cac52557"]').contentFrame().getByText('Payment')).toHaveText("Payment");
    await expect(page.frameLocator('[id="e467cac52557"]').locator('#Current-Loan').getByText('Interest Rate', { exact: true })).toHaveText("Interest Rate");
    await expect(page.locator('[id="e467cac52557"]').contentFrame().getByText('Refinanced Loan')).toHaveText("Refinanced Loan");
    await expect(page.locator('[id="e467cac52557"]').contentFrame().getByText('Term')).toHaveText("Term");
    await expect(page.frameLocator('[id="e467cac52557"]').locator('#Refinanced-Loan').getByText('Interest Rate', { exact: true })).toHaveText("Interest Rate");
    await expect(page.locator('[id="e467cac52557"]').contentFrame().getByText('Fees')).toHaveText("Fees");

    await expect(page.locator("//b[normalize-space()='How to Use the Refinance Calculator']")).toHaveText("How to Use the Refinance Calculator");
    await expect(page.locator("(//b[normalize-space()='Current Loan Information'])[1]")).toHaveText("Current Loan Information");
    await expect(page.locator("ol>li")).toContainText(["Loan Balance", "Monthly Payment", "Current Interest Rate"]);
    await expect(page.locator("(//b[normalize-space()='Refinanced Loan Information'])[1]")).toHaveText("Refinanced Loan Information");
    await expect(page.locator("ol>li")).toContainText(["Loan Term", "New Interest Rate"]);
    await expect(page.locator("//b[normalize-space()='Why These Factors Matter']")).toHaveText("Why These Factors Matter");
    await expect(page.locator("(//b[normalize-space()='How Loan Term Impacts Payment'])[1]")).toHaveText("How Loan Term Impacts Payment");
    await expect(page.locator("(//b[normalize-space()='The Role of Interest Rate in Monthly Payments'])[1]")).toHaveText("The Role of Interest Rate in Monthly Payments");
    await expect(page.locator("(//b[contains(text(),'Property Taxes and Insurance: Protecting Your Inve')])[1]")).toHaveText("Property Taxes and Insurance: Protecting Your Investment");
    await expect(page.locator("(//b[normalize-space()='Key Tips to Lower Monthly Payments'])[1]")).toHaveText("Key Tips to Lower Monthly Payments");
    await expect(page.locator("ol>li")).toContainText(['Increase Your Down Payment', 'Shop for Competitive Interest Rates', 'Consider a Shorter Loan Term', 'Research Property Tax Rates']);
    await expect(page.locator("(//b[normalize-space()='Ready to Calculate? Try Our Tool Now!'])[1]")).toHaveText("Ready to Calculate? Try Our Tool Now!");
    await expect(page.locator("(//b[normalize-space()='Frequently Asked Questions (FAQs)'])[1]")).toHaveText("Frequently Asked Questions (FAQs)");
    await expect(page.locator("ol>li")).toContainText(["Why Does My Monthly Payment Include Property Tax and Insurance?", "Can I Eliminate PMI?", "How Does Refinancing Impact My Monthly Payment?"]);
    await expect(page.locator("(//b[normalize-space()='Next Steps'])[1]")).toHaveText("Next Steps");
    await page.locator("//a[text()='connect with our experienced advisors']").click();
    await page.waitForTimeout(5000);
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/contact-us/`);
    await expect(page.locator("//h3[normalize-space()='San Francisco Office']")).toHaveText('San Francisco Office');
    await expect(page.locator("//h3[normalize-space()='Beverly Hills Office']")).toHaveText('Beverly Hills Office');
    await expect(page.locator("//h1[@id='contact-us']")).toBeVisible();
    
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