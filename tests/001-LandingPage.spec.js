import {test, expect} from "@playwright/test";

test("Landing page", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    
    //verify the visibility of the logo
    await expect(page.locator("//a[@aria-label='Carlyle Financial Home']")).toBeVisible();
    //Verify that the all menu bar options are clearly visible.
    await expect(page.locator("ul>li")).toContainText(['About Us', 'Services', 'Branch Locations', 'In The Press', 'Blog']);

    //verify that the options under services menu 
    await expect(page.locator("ul>li")).toContainText(['Buying A Home', 'Mortgage Refinance', 'Jumbo Mortgages', 'Investment Properties']);

    //verify the get your quote button is visible to the user
    await expect(page.locator("(//a[text()='Get Your Quote'])[1]")).toHaveText("Get Your Quote");
    await expect(page.locator("//strong[text()='Call us:']")).toHaveText("Call us:");
    //await expect(page.locator("//strong[text()='Open today:']")).toHaveText("Open today:");
    await expect(page.locator("(//h2[contains(text(),'Let’s Customize Your Next Home Loan.')])[1]")).toBeVisible();
    await expect(page.locator("(//a[@class='button secondary'][normalize-space()='Get Your Quote'])[1]")).toHaveText("Get Your Quote");
    await expect(page.locator("//h2[normalize-space()='Your Personal Mortgage Lender.']")).toHaveText("Your Personal Mortgage Lender.");
    await expect(page.locator("(//a[@class='button secondary'][normalize-space()='About Carlyle Financial'])[1]")).toHaveText("About Carlyle Financial");
    await expect(page.locator("(//h3[normalize-space()='From The Carlyle Financial Blog'])[1]")).toHaveText("From The Carlyle Financial Blog");
    await expect(page.locator("(//a[normalize-space()='View All'])[1]")).toHaveText("View All");
    await expect(page.locator("(//button[normalize-space()='Next'])[1]")).toBeVisible();
    await expect(page.locator("(//button[normalize-space()='Previous'])[1]")).toBeVisible();
    
    //verify the footer section button
    await expect(page.locator("(//i[@class='fab fa-facebook-f'])[1]")).toBeVisible();
    await expect(page.locator("(//i[@class='fab fa-instagram'])[1]")).toBeVisible();
    await expect(page.locator("(//i[@class='fab fa-linkedin-in'])[1]")).toBeVisible();
    await expect(page.locator("(//a[@aria-label='YouTube'])[1]")).toBeVisible();
    await expect(page.locator("(//i[@class='fab fa-twitter'])[1]")).toBeVisible();
    await expect(page.locator("//a[text()='Privacy Policy']")).toHaveText("Privacy Policy");
    await expect(page.locator("//a[text()='Terms of Use']")).toHaveText("Terms of Use");
    await expect(page.locator("(//span[@id='accesibility'])[1]")).toHaveText("Click for Accessibility");
    await expect(page.locator("(//div[normalize-space()='Our Services'])[1]")).toHaveText("Our Services");
    await expect(page.locator("(//div[normalize-space()='Resources'])[1]")).toHaveText("Resources");
    await expect(page.locator("(//div[normalize-space()='About Us'])[1]")).toHaveText("About Us");
    await expect(page.locator("(//div[normalize-space()='Branches'])[1]")).toHaveText("Branches");

    //verify the options under the our services section in the footer serction
    await expect(page.locator("ul>li")).toContainText(['Buying A Home', 'Mortgage Refinance', 'Jumbo Mortgages', 'Investment Properties']);
    
    //verify the options under the Resources section in the footer serction
    await expect(page.locator("ul>li")).toContainText(['Blog', 'Mortgage Calculators', 'Rent vs. Buy', 'Our Process']);
    
    //verify the options under the our About Us section in the footer serction
    //Currently we are hiding the Careers page.
    await expect(page.locator("ul>li")).toContainText(['Community Outreach', 'In The News', 'Contact Us']);
    
    //verify the branches in the footer serction
    await expect(page.locator("//span[text()='Beverly Hills']")).toHaveText("Beverly Hills");
    await expect(page.locator("//span[text()='San Francisco']")).toHaveText("San Francisco");
    await expect(page.locator("(//address[@class='widget-content--address'])[2]")).toBeVisible();
    await expect(page.locator("(//a[@href='tel:+14158134001'])[2]")).toBeVisible();

    //check

    await expect(page.locator("(//p[normalize-space()='© 2024 Carlyle Financial'])[1]")).toBeVisible();
    
    
    
    
    // // Refinanceverify the functionality of Investment Properties button
    // await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
    // await page.locator("(//a[normalize-space()='Investment Properties'])[1]").click();
    // await expect(page.locator("(//h3[normalize-space()='Experience the Service You Deserve'])[1]")).toHaveText("Experience the Service You Deserve");
    // await expect(page.locator("(//h2[normalize-space()='Loan Details'])[1]")).toHaveText("Loan Details");
    // //Filling the I want to 
    // await page.locator("//div[@id='input_11_3_chosen']").click();
    // await page.locator("(//li[normalize-space()='to buy a home'])[1]").click();
    // await expect(page.locator("(//label[normalize-space()='Property Type'])[1]")).toHaveText("Property Type");
    // await page.locator("//div[@id='input_11_52_chosen']").click();
    // await page.locator("(//li[normalize-space()='Single Family Residence'])[1]").click();
    // await expect(page.locator("(//label[normalize-space()='Occupancy'])[1]")).toHaveText("Occupancy");
    // await page.locator("//div[@id='input_11_51_chosen']").click();
    // await page.locator("(//li[normalize-space()='Primary Property'])[1]").click();
    // await expect(page.locator("(//label[normalize-space()='Credit Score'])[1]")).toHaveText("Credit Score");
    // await page.locator("//div[@id='input_11_53_chosen']").click();
    // await page.locator("(//li[normalize-space()='780+ FICO'])[1]").click();
    // await expect(page.locator("(//label[normalize-space()='Where are you in the process?'])[1]")).toHaveText("Where are you in the process?");
    // await page.locator("//div[@id='input_11_13_chosen']").click();
    // // Refinanceverify the functionality of Our Calculators button
    // await page.locator("//li[@class='active-result'][@data-option-array-index='1']").click();
    // // Clicking on the serviices then click on the our  calculators
    // await page.locator("(//span[normalize-space()='Our Calculators'])[1]").click();
    // // Refinanceverify the functionality of Amortization button
    // await page.locator("(//a[normalize-space()='Amortization'])[1]").click();
    
    
});