import {test, expect} from "@playwright/test";

<<<<<<< HEAD
test("verify the available buttons and functionality of Services page", async({page})=>{
=======
test("verify the available buttons and functionality of Investment Properties page", async({page})=>{
>>>>>>> fc103d5b06938de3711ab1ff5267afbf0a78fa24
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
    await expect(page.locator("ul>li")).toContainText(['Jumbo Mortgages', 'Buying A Home', 'Mortgage Refinance', 'Investment Properties']);
    await expect(page.locator("ul>li")).toContainText(['Our Calculators', 'Amortization', 'Mortgage', 'Loan Comparison', 'Refinance']);
    //await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").hover();
    await page.locator("(//a[normalize-space()='Investment Properties'])[1]").click();
   // await expect(page.url()).toBe(`${process.env.BASE_URL_1}/investment-properties/`);
    await page.waitForTimeout(2000);
    await expect(page.locator("//h1[normalize-space()='Investment Properties']")).toHaveText("Investment Properties");
    await expect(page.locator("//h3[normalize-space()='Experience the Service You Deserve']")).toHaveText("Experience the Service You Deserve");
    //await expect(page.locator("//h2[normalize-space()='Loan Details']").toHaveText("Loan Details"));
    //await expect(page.locator("//li[@id='field_11_3']")).toBeVisible();
    //await page.locator("//span[normalize-space()='Select']").click();
    //await expect(page.locator("ul>li")).toContainText(['Select','to buy a home','to refinance my current loan balance','to refinance and take cash out','to get a second opinion(I have a loan elsewhere)','to discuss something non-mortgage related']);
    //await page.locator("//li[normalize-space()='to buy a home']").click();
    //await page.locator("//div[@id='input_11_52_chosen']//span[contains(text(),'Select')]").click();
    //await expect(page.locator("ul>li")).toContainText(['Select','Single Family Residence','Condo','PUD','Duplex','4-plex']);
   // await page.locator("//li[normalize-space()='Condo']").click();
    //await page.locator("//div[@id='input_11_51_chosen']//span[contains(text(),'Select')]").click();
    //await expect(page.locator("ul>li")).toContainText(['Select','Primary Property','Second Home','Investment Property']);
    //await page.locator("//li[normalize-space()='Second Home']").click();
    //await page.locator("//div[@id='input_11_53_chosen']//span[contains(text(),'Select')]").click();
    //await expect(page.locator("ul>li")).toContainText(['Select','780+ FICO','760-779','740-759','720-739','700-719','680-699','660-679',"Not Sure/Don't Know"]);
    //await page.locator("//li[normalize-space()='760-779']").click();
    //await page.locator("//input[@id='input_11_25']").fill('7098');
    //await page.locator("//input[@id='input_11_22']").fill('8907');
    //await expect(page.locator("//h2[normalize-space()='Personal Information']")).toBeVisible();
    //await page.locator("//input[@id='input_11_29']").fill('Ben');
    //await(page.locator("//input[@id='input_11_5']")).fill('max');
    //await page.locator("//input[@id='input_11_30']").fill('2345678900');
    //await page.locator("//input[@id='input_11_34']").fill('we@gmail.com');
    //await page.locator("//select[@id='input_11_41']").click();
    //await page.locator("//option[@value='Alpine County']").click();
<<<<<<< HEAD
=======
    ///await expect(page.locator("//b[contains(text(),'Super Jumbo Home Loans – An Overview')]")).toBeVisible();
    //await expect(page.locator("//b[normalize-space()='Interest Only Jumbo Home Loans']")).toBeVisible();
    //await expect(page.locator("//b[normalize-space()='What is a Jumbo Loan?']")).toBeVisible();
    //await expect(page.locator("h2[id='do-you-need-a-jumbo-mortgage'] strong")).toBeVisible();
   // await expect(page.locator("h2[id='what-do-you-do-next'] strong")).toBeVisible();
   // await page.locator("//a[contains(text(),'get in touch with one of our mortgage experts toda')]").click();
    //await expect(page.Url("https://preprod.carlylefinancial.com/get-started/")).toBe();
   // await page.goBack();
    //await expect(page.locator("")).toBeVisible();
    //await expect(page.locator("")).toBeVisible();
    //await expect(page.locator("")).toBeVisible();
>>>>>>> fc103d5b06938de3711ab1ff5267afbf0a78fa24

});