import {test, expect} from "@playwright/test";
import { executionAsyncId } from "async_hooks";
import exp from "constants";

test("verify Loan Comparison Caluclator module", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
    await page.locator("(//span[contains(text(),'Loan Comparison')])[1]").click();
    await expect(page.locator("//h1[normalize-space()='Loan Comparison Calculator']")).toBeVisible();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/loan-comparison-calculator/`);
    await expect(page.locator("//h1[normalize-space()='Loan Comparison Calculator']")).toHaveText("Loan Comparison Calculator");
    await expect(page.locator('[id="cf1d4b0d2556"]').contentFrame().getByRole('heading', { name: 'Loan 1' })).toHaveText("Loan 1");
    await expect(page.frameLocator('[id="cf1d4b0d2556"]').locator('#loan-0').getByText('Loan Amount', { exact: true })).toHaveText("Loan Amount");
    await expect(page.frameLocator('[id="cf1d4b0d2556"]').locator('#loan-0').getByText('Interest Rate', { exact: true })).toHaveText("Interest Rate");
    await expect(page.frameLocator('[id="cf1d4b0d2556"]').locator('#loan-0').getByText('Term', { exact: true })).toHaveText("Term");
    await expect(page.frameLocator('[id="cf1d4b0d2556"]').locator('#loan-1').getByText('Loan Amount', { exact: true })).toHaveText("Loan Amount");
    await expect(page.frameLocator('[id="cf1d4b0d2556"]').locator('#loan-1').getByText('Interest Rate', { exact: true })).toHaveText("Interest Rate");
    await expect(page.frameLocator('[id="cf1d4b0d2556"]').locator('#loan-1').getByText('Term', { exact: true })).toHaveText("Term");
    await expect(page.locator('[id="cf1d4b0d2556"]').contentFrame().getByText(' Add Loan', { exact: true })).toHaveText(" Add Loan");
    await expect(page.locator('[id="cf1d4b0d2556"]').contentFrame().getByText('Start Date', { exact: true })).toHaveText("Start Date");
    await expect(page.locator("(//b[normalize-space()='How to Use Our Loan Comparison Calculator'])[1]")).toHaveText("How to Use Our Loan Comparison Calculator");
    await expect(page.locator("(//b[normalize-space()='Understanding Each Input'])[1]")).toHaveText("Understanding Each Input");
    await expect(page.locator("(//b[normalize-space()='Loan Amount ($)'])[1]")).toHaveText('Loan Amount ($)')
    await expect(page.locator("(//b[normalize-space()='Interest Rate (%)'])[1]")).toHaveText('Interest Rate (%)')
    await expect(page.locator("(//b[normalize-space()='Loan Term (Years)'])[1]")).toHaveText('Loan Term (Years)')
    await expect(page.locator("(//b[normalize-space()='Start Date'])[1]")).toHaveText('Start Date');
    await expect(page.locator("(//b[normalize-space()='Example Calculation: Comparing Two Loans'])[1]")).toHaveText("Example Calculation: Comparing Two Loans");
    await expect(page.locator("(//b[normalize-space()='Loan 1'])[1]")).toHaveText("Loan 1");
    await expect(page.locator("(//b[normalize-space()='Loan 2'])[1]")).toHaveText("Loan 2");
    await expect(page.locator("(//b[normalize-space()='Key Results Explained'])[1]")).toHaveText("Key Results Explained");
    await expect(page.locator("ol>li")).toContainText(["Monthly Payment", "Total Interest Paid", "Total Loan Cost"]);
    await expect(page.locator("(//b[normalize-space()='Amortization Schedule'])[1]")).toHaveText("Amortization Schedule");
    await expect(page.locator("(//b[normalize-space()='Practical Scenarios Where the Calculator Helps'])[1]")).toHaveText("Practical Scenarios Where the Calculator Helps");
    await expect(page.locator("ul>li")).toContainText(["Choosing Between Fixed-Rate and Adjustable-Rate Mortgages", "Deciding on Loan Term Length", "Evaluating Refinancing Options"]);
    await expect(page.locator("(//b[normalize-space()='Why These Factors Matter'])[1]")).toHaveText("Why These Factors Matter");
    await expect(page.locator("(//b[normalize-space()='How Loan Term Impacts Payment'])[1]")).toHaveText("How Loan Term Impacts Payment");
    await expect(page.locator("(//b[normalize-space()='The Role of Interest Rate in Monthly Payments'])[1]")).toHaveText("The Role of Interest Rate in Monthly Payments");
    await expect(page.locator("(//b[normalize-space()='Loan Structure: Fixed vs. Adjustable'])[1]")).toHaveText("Loan Structure: Fixed vs. Adjustable");
    await expect(page.locator("(//b[normalize-space()='Tips for Choosing the Right Loan Option'])[1]")).toHaveText("Tips for Choosing the Right Loan Option");
    await expect(page.locator("ol>li")).toContainText(["Consider Your Long-Term Goals", "Evaluate Your Monthly Budget", "Think About Future Financial Changes", "Understand Your Risk Tolerance"]);
    await expect(page.locator("(//b[normalize-space()='Why Carlyle Financial?'])[1]")).toHaveText("Why Carlyle Financial?");
    await expect(page.locator("(//b[normalize-space()='Ready to Get Started? Contact Us Today!'])[1]")).toHaveText("Ready to Get Started? Contact Us Today!");
    await expect(page.locator("(//b[normalize-space()='Frequently Asked Questions (FAQs)'])[1]")).toHaveText("Frequently Asked Questions (FAQs)");
    await expect(page.locator("ol>li")).toContainText(["Why Does My Monthly Payment Include Property Tax and Insurance?", "Can I Eliminate PMI?", "How Does Refinancing Impact My Monthly Payment?"]);
    await expect(page.locator("(//b[normalize-space()='Next Steps'])[1]")).toHaveText("Next Steps");
    await page.locator("(//span[normalize-space()='connect with our experienced advisors'])[1]").click();
    await page.waitForTimeout(5000);
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/contact-us/`);
    await expect(page.locator("//h3[normalize-space()='San Francisco Office']")).toHaveText('San Francisco Office');
    await expect(page.locator("//h3[normalize-space()='Beverly Hills Office']")).toHaveText('Beverly Hills Office');
    await expect(page.locator("(//h2[normalize-space()='Contact Us'])[1]")).toBeVisible();
});