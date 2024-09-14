import {test, expect} from "@playwright/test";

test("verify the available buttons and functionality of About-Us page", async({page})=>{
    await page.goto("https://www.carlylefinancial.com/");
    await page.waitForTimeout(5000);
    //verify the functionality of about us button
    await page.locator("//a[text()='About Us']").click();
    await page.waitForTimeout(2000);
    await expect(page.url()).toBe('https://www.carlylefinancial.com/about-us/');
    //verify the available text or detains in the about us page
    await expect(page.locator("(//h4[normalize-space()='Each Client is Unique to Us'])[1]")).toHaveText("Each Client is Unique to Us");
    await expect(page.locator("(//h4[normalize-space()='Our Relationships Benefit Clients'])[1]")).toHaveText("Our Relationships Benefit Clients");
    await expect(page.locator("(//h4[normalize-space()='Our Clients are our Neighbors'])[1]")).toHaveText("Our Clients are our Neighbors");
    await expect(page.locator("(//h3[normalize-space()='What Our Clients Have to Say'])[1]")).toBeVisible();
   
    //Verify the team members details 
    await expect(page.locator("(//h3[normalize-space()='Meet The Team'])[1]")).toHaveText("Meet The Team");
   
    //verify that president details are visible or not
    await expect(page.locator("(//h3[normalize-space()='Robert Cohan'])[1]")).toHaveText("Robert Cohan");
    await expect(page.locator("(//p[normalize-space()='President'])[1]")).toHaveText("President");
    await expect(page.locator("(//span[normalize-space()='NMLS: 335848'])[1]")).toHaveText("NMLS: 335848");
    await expect(page.locator("(//span[normalize-space()='DRE: 01862401'])[1]")).toHaveText("DRE: 01862401");
    await expect(page.locator("(//i[@class='fa fa-phone'])[1]")).toBeVisible();
    await expect(page.locator("(//i[@class='fa fa-paper-plane'])[1]")).toBeVisible();
    await page.locator("(//i[@class='fa fa-paper-plane'])[1]").click();
    await expect(page.locator("(//h4[normalize-space()='Contact'])[1]")).toHaveText("Contact");

    //verify the available fields in the contact form
    await expect(page.locator("ul>li")).toContainText(['First Name', 'Last Name', 'Email Address', 'Message']);
    await page.locator("(//input[@class='large LoNotSensitive'])[1]").fill('Ramesh');
    await page.locator("(//input[@class='large LoNotSensitive'])[2]").fill('Cohan');
    await page.locator("(//input[@class='medium LoNotSensitive'])[1]").fill('abc@gmail.com');
    await page.locator("(//textarea[@class='textarea medium'])[1]").fill("Today is the day, please don't skip this 1-minute read. We're sorry to interrupt, but it's Friday, 13 September, and our fundraiser doesn't last long. We request you to reflect on the number of times you visited Wikipedia in the past year and if you're able to donate ₹ 25 to the Wikimedia Foundation. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours.");
    
    //filling the contact details
    // await page.locator("")


    //verify that Senior Vice President is visible or not
    await expect(page.locator("(//h3[normalize-space()='Sereyna Avila'])[1]")).toHaveText("Sereyna Avila");
    await expect(page.locator("(//p[normalize-space()='Senior Vice President'])[1]")).toHaveText("Senior Vice President");
    await expect(page.locator("(//span[normalize-space()='NMLS: 1593591'])[1]")).toHaveText("NMLS: 1593591");
    await expect(page.locator("(//span[normalize-space()='DRE: 02026693'])[1]")).toHaveText("DRE: 02026693")
    // await expect(page.locator(""))
    // await expect(page.locator(""))


    //verify that Vice President of Mortgage Lending is visible or not
    await expect(page.locator("")).toHaveText();
    await expect(page.locator("(//p[normalize-space()='Vice President of Mortgage Lending'])[1]")).toHaveText("Vice President of Mortgage Lending");
    // await expect(page.locator(""))
    // await expect(page.locator(""))
    // await expect(page.locator(""))
    // await expect(page.locator(""))

    //verify that Mortgage Loan Officer is visible or not
    await expect(page.locator("(//h3[normalize-space()='Devin Donaldson'])[1]")).toHaveText("Devin Donaldson");
    await expect(page.locator("(//p[normalize-space()='Mortgage Loan Officer'])[1]")).toHaveText("Mortgage Loan Officer");
    // await expect(page.locator(""))
    // await expect(page.locator(""))
    // await expect(page.locator(""))
    // await expect(page.locator(""))

    //verify that  is Mortgage Broker/Banker visible or not
    await expect(page.locator("")).toHaveText();
    await expect(page.locator("(//p[normalize-space()='Mortgage Broker / Banker'])[1]")).toHaveText("Mortgage Broker / Banker");
    // await expect(page.locator(""))
    // await expect(page.locator(""))
    // await expect(page.locator(""))
    // await expect(page.locator(""))
    //verify that office administrator is visible or not
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
    // await expect(page.locator("")).toHaveText();
});