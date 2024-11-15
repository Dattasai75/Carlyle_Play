import {test, expect} from "@playwright/test";


test("verify Amortization Caluclator", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(2000);
    await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
    await page.locator("(//span[contains(text(),'Amortization')])[1]").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/mortgage-calculators/amortization-calculator/`);
    await expect(page.locator("//h1[normalize-space()='Amortization Calculator']")).toHaveText("Amortization Calculator");
    await expect(page.locator("//b[normalize-space()='How Our Amortization Calculator Helps You:']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Need Expert Mortgage Advice?']")).toBeVisible();
    await page.locator("(//strong[normalize-space()='mortgage experts'])[1]").click();
    await page.waitForTimeout(2000);
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/get-started/`);
    await expect(page.locator("(//h2[normalize-space()='One Size Does Not Fit All.'])[1]")).toHaveText("One Size Does Not Fit All.");
    await page.goBack();
    await page.waitForTimeout(2000);
    await expect(page.locator("(//b[normalize-space()='Need Expert Mortgage Advice?'])[1]")).toHaveText("Need Expert Mortgage Advice?");
    //await expect(page.locator("//li[@id='menu-item-2560']")).toHaveText("Loan Amount");

    await expect(page.locator('[id="\\35 5eff5992555"]').contentFrame().getByText('Loan Amount')).toHaveText("Loan Amount");
    await expect(page.locator('[id="\\35 5eff5992555"]').contentFrame().getByText('Interest Rate')).toHaveText("Interest Rate");
    await expect(page.locator('[id="\\35 5eff5992555"]').contentFrame().getByText('Term')).toHaveText("Term");
    await expect(page.locator('[id="\\35 5eff5992555"]').contentFrame().getByText('Start Date')).toHaveText("Start Date");
    await expect(page.locator('[id="\\35 5eff5992555"]').contentFrame().getByText('Calculate')).toHaveText("Calculate");
    
    // //await page.locator("//input[@id='principal']").fill('1223');
    // await page.locator('//input[@name="principal"]').clear();
    // await page.locator("//input[@name='principal']").fill('2345');
    // await page.locator('[id="\\35 5eff5992555"]').fill('3456');
    // await page.locator('[id="\\35 5eff5992555"]').fill('4567');
    // await page.locator('[id="\\35 5eff5992555"]').fill('5678');
    // await page.locator('[id="\\35 5eff5992555"]').fill('6789');

    //await page.locator('[id="\\35 5eff5992555"]').contentFrame().locator('form div').filter({ hasText: '$' }).nth(1).fill('1234');
    // await page.locator("//input[@id='principal']").fill('10000000900');
    // await page.locator("//input[@id='term']").fill('18');
    // await page.locator("//input[@id='start_date']").fill('01/11/2024');
});