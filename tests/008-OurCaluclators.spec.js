import {test, expect} from "@playwright/test";
import { executionAsyncId } from "async_hooks";
import exp from "constants";

test("verify Our calculators page and it's functionality.", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
    //await expect(page.locator("ul>li")).toContainText(['Jumbo Mortgages', 'Buying A Home', 'Mortgage Refinance', 'Investment Properties']);
    //await expect(page.locator("ul>li")).toContainText(['Our Calculators', 'Amortization', 'Mortgage', 'Loan Comparison', 'Refinance']);
    await page.locator("//span[normalize-space()='Our Calculators']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/`);
    await expect(page.locator("(//h1[normalize-space()='Mortgage Calculators'])[1]")).toHaveText("Mortgage Calculators");
    //verify the available hyper links in the Mortagage Calculators (Our Calculators) page.
    await expect(page.locator("(//span[normalize-space()='different mortgage payment scenarios'])[1]")).toBeVisible();
    await page.locator("(//span[normalize-space()='different mortgage payment scenarios'])[1]").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-solutions/`);
    await expect(page.locator("(//h1[normalize-space()='Our Mortgage Solutions'])[1]")).toHaveText("Our Mortgage Solutions");
    await expect(page.locator("(//h3[normalize-space()='Purchase'])[1]")).toHaveText("Purchase");
    await expect(page.locator("(//a[@title='Purchase'])[1]")).toHaveText("Learn More");
    await expect(page.locator("(//h3[normalize-space()='Refinance'])[1]")).toHaveText("Refinance");
    await expect(page.locator("(//a[@title='Refinance'])[1]")).toHaveText("Learn More");
    await expect(page.locator("(//h3[normalize-space()='Jumbo Mortgages'])[1]")).toHaveText("Jumbo Mortgages");
    await expect(page.locator("(//a[@title='Jumbo Mortgages'])[1]")).toHaveText("Learn More");
    await expect(page.locator("(//h3[normalize-space()='FHA Financing'])[1]")).toHaveText("FHA Financing");
    await expect(page.locator("(//a[@title='FHA Financing'])[1]")).toHaveText("Learn More");
    await expect(page.locator("(//h3[normalize-space()='Investment Properties'])[1]")).toHaveText("Investment Properties");
    await expect(page.locator("(//a[@title='Investment Properties'])[1]")).toHaveText("Learn More");
    await page.goBack();
    await page.waitForTimeout(2000);
    
    //verify the amortization calculator visibility and functionality
    await expect(page.locator("//h3[normalize-space()='Amortization Calculator']")).toBeVisible();
    await expect(page.locator("(//a[@href='/mortgage-calculators/amortization-calculator/'])[1]")).toHaveText("Use Calculator");
    await page.locator("//a[@href='/mortgage-calculators/amortization-calculator/']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/amortization-calculator/`);
    await expect(page.locator("(//h1[normalize-space()='Amortization Calculator'])[1]")).toHaveText("Amortization Calculator");
    await expect(page.locator("(//b[normalize-space()='How Our Amortization Calculator Helps You:'])[1]")).toHaveText("How Our Amortization Calculator Helps You:");
    await expect(page.locator("(//b[normalize-space()='Need Expert Mortgage Advice?'])[1]")).toHaveText("Need Expert Mortgage Advice?");
    //verify the available hyper links in the Amortization Calculator page.
    await expect(page.locator("(//b[normalize-space()='mortgage experts'])[1]")).toHaveText("mortgage experts");
    await page.locator("(//b[normalize-space()='mortgage experts'])[1]").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/get-started/`);
    await page.goBack();
    await page.waitForTimeout(2000);
    await page.goBack();
    
    //verify the Interest-Only Calculator visibility and functionality
    await expect(page.locator("//h3[normalize-space()='Interest-Only Calculator']")).toBeVisible();
    await expect(page.locator("(//a[@href='/mortgage-calculators/interest-only-calculator/'])[1]")).toHaveText("Use Calculator");
    await page.locator("(//a[@href='/mortgage-calculators/interest-only-calculator/'])[1]").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/interest-only-calculator/`);
    await expect(page.locator("(//h1[normalize-space()='Interest-Only Calculator'])[1]")).toHaveText("Interest-Only Calculator");
    await expect(page.locator("(//b[normalize-space()='What Is an Interest-Only Mortgage?'])[1]")).toHaveText("What Is an Interest-Only Mortgage?");
    await expect(page.locator("(//b[normalize-space()='Why Choose an Interest-Only Mortgage?'])[1]")).toHaveText("Why Choose an Interest-Only Mortgage?");
    await expect(page.locator("(//b[normalize-space()='How Our Interest-Only Mortgage Calculator Works'])[1]")).toHaveText("How Our Interest-Only Mortgage Calculator Works");
    await expect(page.locator("(//b[normalize-space()='Interest-Only Rates and Adjustments'])[1]")).toHaveText("Interest-Only Rates and Adjustments");
    await expect(page.locator("(//b[normalize-space()='Benefits and Risks of an Interest-Only Mortgage'])[1]")).toHaveText("Benefits and Risks of an Interest-Only Mortgage");
    await expect(page.locator("(//b[normalize-space()='Why Use Our Interest-Only Mortgage Calculator?'])[1]")).toHaveText("Why Use Our Interest-Only Mortgage Calculator?");
    await expect(page.locator("(//b[normalize-space()='FAQs About Interest-Only Mortgages'])[1]")).toHaveText("FAQs About Interest-Only Mortgages");
    await expect(page.locator("(//b[normalize-space()='Contact Us for Expert Assistance'])[1]")).toHaveText("Contact Us for Expert Assistance");
    await page.goBack();
    await page.waitForTimeout(2000);

    //verify the Loan Comparison Calculator visibility and functionality
    await expect(page.locator("//h3[normalize-space()='Loan Comparison Calculator']")).toBeVisible();
    await expect(page.locator("(//a[@href='/mortgage-calculators/loan-comparison-calculator/'])[1]")).toHaveText("Use Calculator");
    await page.locator("//a[@href='/mortgage-calculators/loan-comparison-calculator/']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/loan-comparison-calculator/`);
    await page.waitForTimeout(2000);
    await expect(page.locator("(//h1[normalize-space()='Loan Comparison Calculator'])[1]")).toHaveText("Loan Comparison Calculator");
    await expect(page.locator("(//b[normalize-space()='How to Use Our Loan Comparison Calculator'])[1]")).toHaveText("How to Use Our Loan Comparison Calculator");
    await expect(page.locator("(//b[normalize-space()='Understanding Each Input'])[1]")).toHaveText("Understanding Each Input");
    await expect(page.locator("(//b[normalize-space()='Example Calculation: Comparing Two Loans'])[1]")).toHaveText("Example Calculation: Comparing Two Loans");
    await expect(page.locator("(//b[normalize-space()='Key Results Explained'])[1]")).toHaveText("Key Results Explained");
    await expect(page.locator("(//b[normalize-space()='Practical Scenarios Where the Calculator Helps'])[1]")).toHaveText("Practical Scenarios Where the Calculator Helps");
    await expect(page.locator("(//b[normalize-space()='Why These Factors Matter'])[1]")).toHaveText("Why These Factors Matter");
    await expect(page.locator("(//b[normalize-space()='How Loan Term Impacts Payment'])[1]")).toHaveText("How Loan Term Impacts Payment");
    await expect(page.locator("(//b[normalize-space()='The Role of Interest Rate in Monthly Payments'])[1]")).toHaveText("The Role of Interest Rate in Monthly Payments");
    await expect(page.locator("(//b[normalize-space()='Loan Structure: Fixed vs. Adjustable'])[1]")).toHaveText("Loan Structure: Fixed vs. Adjustable");
    await expect(page.locator("(//b[normalize-space()='Tips for Choosing the Right Loan Option'])[1]")).toHaveText("Tips for Choosing the Right Loan Option");
    await expect(page.locator("(//b[normalize-space()='Why Carlyle Financial?'])[1]")).toHaveText("Why Carlyle Financial?");
    await expect(page.locator("(//b[normalize-space()='Ready to Get Started? Contact Us Today!'])[1]")).toHaveText("Ready to Get Started? Contact Us Today!");
    await expect(page.locator("(//b[normalize-space()='Frequently Asked Questions (FAQs)'])[1]")).toHaveText("Frequently Asked Questions (FAQs)");
    await expect(page.locator("(//b[normalize-space()='Next Steps'])[1]")).toHaveText("Next Steps");
    //verify the available hyper links in the Loan Comparison page.
    await expect(page.locator("(//span[normalize-space()='connect with our experienced advisors'])[1]")).toHaveText("connect with our experienced advisors");
    await page.locator("(//span[normalize-space()='connect with our experienced advisors'])[1]").click();
    await page.waitForTimeout(2000);
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/contact-us/`);
    await expect(page.locator("(//h1[normalize-space()='Contact Us'])[1]")).toHaveText("Contact Us");
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(2000);
    await page.goBack();

    //verify the Mortgage Calculator visibility and functionality
    await expect(page.locator("//h3[normalize-space()='Mortgage Calculator']")).toBeVisible();
    await expect(page.locator("(//a[@href='/mortgage-calculators/mortgage-calculator/'])[1]")).toHaveText("Use Calculator");
    await page.locator("//a[@href='/mortgage-calculators/mortgage-calculator/']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/mortgage-calculator/`);
    await expect(page.locator("(//h1[normalize-space()='Mortgage Calculator'])[1]")).toHaveText("Mortgage Calculator");
    await expect(page.locator("(//b[normalize-space()='How to Use Our Mortgage Calculator'])[1]")).toHaveText("How to Use Our Mortgage Calculator");
    await expect(page.locator("(//b[normalize-space()='Understanding Each Input'])[1]")).toHaveText("Understanding Each Input");
    await expect(page.locator("(//b[contains(text(),'Example Calculation: What to Expect in Your Monthl')])[1]")).toHaveText("Example Calculation: What to Expect in Your Monthly Payment");
    await expect(page.locator("(//b[normalize-space()='Why These Factors Matter'])[1]")).toHaveText("Why These Factors Matter");
    await expect(page.locator("(//b[normalize-space()='How Loan Term Impacts Payment'])[1]")).toHaveText("How Loan Term Impacts Payment");
    await expect(page.locator("(//b[normalize-space()='The Role of Interest Rate in Monthly Payments'])[1]")).toHaveText("The Role of Interest Rate in Monthly Payments");
    await expect(page.locator("(//b[contains(text(),'Property Taxes and Insurance: Protecting Your Inve')])[1]")).toHaveText("Property Taxes and Insurance: Protecting Your Investment");
    await expect(page.locator("(//b[normalize-space()='Key Tips to Lower Monthly Payments'])[1]")).toHaveText("Key Tips to Lower Monthly Payments");
    await expect(page.locator("(//b[normalize-space()='Ready to Calculate? Try Our Tool Now!'])[1]")).toHaveText("Ready to Calculate? Try Our Tool Now!");
    await expect(page.locator("(//b[normalize-space()='Frequently Asked Questions (FAQs)'])[1]")).toHaveText("Frequently Asked Questions (FAQs)");
    await expect(page.locator("(//b[normalize-space()='Next Steps'])[1]")).toHaveText("Next Steps");
    await page.goBack();
    await page.waitForTimeout(2000);

    //verify the Refinance Calculator visibility and functionality
    await expect(page.locator("//h3[normalize-space()='Refinance Calculator']")).toBeVisible();
    await expect(page.locator("(//a[@href='/mortgage-calculators/refinance-calculator/'])[1]")).toHaveText("Use Calculator");
    await page.locator("//a[@href='/mortgage-calculators/refinance-calculator/']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/refinance-calculator/`);
    await expect(page.locator("(//h1[normalize-space()='Refinance Calculator'])[1]")).toHaveText("Refinance Calculator");
    //verify the available hyper links in the Refinance Calculator page.
    await expect(page.locator("(//span[normalize-space()='Refinancing your mortgage'])[1]")).toHaveText("Refinancing your mortgage");
    await page.locator("(//span[normalize-space()='Refinancing your mortgage'])[1]").click();
    await expect(page.locator("(//h1[normalize-space()='Mortgage Refinance'])[1]")).toHaveText("Mortgage Refinance");
    await page.goBack();
    await page.waitForTimeout(2000);
    await expect(page.locator("(//b[normalize-space()='How to Use the Refinance Calculator'])[1]")).toHaveText("How to Use the Refinance Calculator");
    await expect(page.locator("(//b[normalize-space()='Current Loan Information'])[1]")).toHaveText("Current Loan Information");
    await expect(page.locator("(//b[normalize-space()='Refinanced Loan Information'])[1]")).toHaveText("Refinanced Loan Information");
    await expect(page.locator("(//b[normalize-space()='Refinancing Costs'])[1]")).toHaveText("Refinancing Costs");
    await expect(page.locator("(//b[normalize-space()='Why Consider Refinancing?'])[1]")).toHaveText("Why Consider Refinancing?");
    await expect(page.locator("(//b[normalize-space()='Understanding the Results: What to Look For'])[1]")).toHaveText("Understanding the Results: What to Look For");
    await expect(page.locator("(//b[normalize-space()='Example Scenarios to Guide Your Decision'])[1]")).toHaveText("Example Scenarios to Guide Your Decision");
    await expect(page.locator("(//b[normalize-space()='Common Questions About Mortgage Refinancing'])[1]")).toHaveText("Common Questions About Mortgage Refinancing");
    await expect(page.locator("(//b[normalize-space()='Next Steps: Get Personalized Guidance'])[1]")).toHaveText("Next Steps: Get Personalized Guidance");
    //verify the available hyper links in the Refinance Calculator page.
    await expect(page.locator("(//span[contains(text(),'analyze different scenarios based on your financia')])[1]")).toHaveText("analyze different scenarios based on your financial goals, provide information about rates, and help you choose the best loan option")
    await page.locator("(//span[contains(text(),'analyze different scenarios based on your financia')])[1]").click();
    await page.waitForTimeout(2000);
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/contact-us/`);
    await expect(page.locator("(//h1[normalize-space()='Contact Us'])[1]")).toHaveText("Contact Us");
    await page.goBack();
});