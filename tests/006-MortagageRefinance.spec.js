import {test,expect} from "@playwright/test";

test("Verify the functionality of Motagage Refinance ", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await expect(page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]")).hover();
    await page.locator("(//a[normalize-space()='Mortgage Refinance'])[1]").click();
    await page.waitForTimeout(2000);
    await expect(page.locator("//div[@class='label-outer']")).toHaveText("Mortgage Refinance");
    await expect(page.locator("(//h3[normalize-space()='Lower Monthly Payments.'])[1]")).toHaveText("Lower Monthly Payments.");
    await expect(page.locator("(//h3[normalize-space()='Take Advantage Of Home Equity.'])[1]")).toHaveText("Take Advantage Of Home Equity.");
    await expect(page.locator("(//h3[normalize-space()='Manage A Resetting ARM Loan.'])[1]")).toHaveText("Manage A Resetting ARM Loan.");
    await expect(page.locator("(//h3[normalize-space()='Prosperity.'])[1]")).toHaveText("Prosperity.");
    await expect(page.locator("(//strong[normalize-space()='Refinance Document Checklist'])[1]")).toHaveText("Refinance Document Checklist");
    await expect(page.locator("(//strong[normalize-space()='Annual Loan Review'])[1]")).toHaveText("Annual Loan Review");
    await expect(page.locator("(//strong[normalize-space()='Appraising Property Value'])[1]")).toHaveText("Appraising Property Value");
    await expect(page.locator("(//h2[contains(text(),'What do you need to know about a mortgage refinanc')])[1]")).toHaveText("What do you need to know about a mortgage refinance?");

    //verify the available hyper links in the Mortagage Refinance page.
    await expect(page.locator("(//a[normalize-space()='mortgage refinance'])[1]")).toHaveText("mortgage refinance");
    await page.locator("(//a[normalize-space()='mortgage refinance'])[1]").click();
    await expect(page.locator("(//h3[normalize-space()='Lower Your Payments'])[1]")).toHaveText("Lower Your Payments");
    await expect(page.locator("(//a[normalize-space()='monthly home loan payment'])[1]")).toHaveText("monthly home loan payment");
    await page.locator("(//a[normalize-space()='monthly home loan payment'])[1]").click();
    await expect(page.locator("//div[@class='label-outer']")).toHaveText("Refinance Calculator");
    await page.goBack();
    await expect(page.locator("(//h3[normalize-space()='Manage Resetting ARM Loans'])[1]")).toHaveText("Manage Resetting ARM Loans");
    await expect(page.locator("(//h3[normalize-space()='Free Your Finances'])[1]")).toHaveText("Free Your Finances");
    await expect(page.locator("(//h2[normalize-space()='How do you refinance your mortgage?'])[1]")).toHaveText("How do you refinance your mortgage?");
    await expect(page.locator("(//a[contains(text(),'get in touch with one of our mortgage experts toda')])[1]")).toHaveText("get in touch with one of our mortgage experts today");
    await page.locator("(//a[contains(text(),'get in touch with one of our mortgage experts toda')])[1]").click();
    await expect(page.locator("(//h2[normalize-space()='One Size Does Not Fit All.'])[1]")).toHaveText("One Size Does Not Fit All.");
    await page.goBack();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
});