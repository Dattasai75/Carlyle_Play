import {test, expect} from "@playwright/test";

test("Landing page", async({page})=>{
    await page.goto("https://www.carlylefinancial.com/");
    await page.waitForTimeout(5000);
    //verify the visibility of the logo
    await expect(page.locator("//a[@aria-label='Carlyle Financial Home']")).toBeVisible();
    //Verify that the all menu bar options are clearly visible.
    await expect(page.locator("ul>li")).toContainText(['About Us', 'Services', 'Branch Locations', 'In The Press', 'Blog']);
    //verify the get your quote button is visible to the user
    await expect(page.locator("//a[text()='Get your quote']")).toHaveText("Get your quote");
    await expect(page.locator("//strong[text()='Call us:']")).toHaveText("Call us:");
    //await expect(page.locator("//strong[text()='Open today:']")).toHaveText("Open today:");
    await expect(page.locator("(//h2[contains(text(),'Let’s Customize Your Next Home Loan.')])[1]")).toBeVisible();
    await expect(page.locator("(//a[@class='button secondary'][normalize-space()='Get Your Quote'])[1]")).toHaveText("Get Your Quote");
    await page.evaluate(() => {
        window.scrollBy(0, 5000);
      }) 
    await expect(page.locator("//h2[normalize-space()='Your Personal Mortgage Lender.']")).toHaveText("Your Personal Mortgage Lender.");
    await expect(page.locator("(//a[@class='button secondary'][normalize-space()='About Carlyle Financial'])[1]")).toHaveText("About Carlyle Financial");
    await page.evaluate(() => {
        window.scrollBy(0, 5000);
      })
    await expect(page.locator("(//h3[normalize-space()='From The Carlyle Financial Blog'])[1]")).toHaveText("From The Carlyle Financial Blog");
    await expect(page.locator("(//a[normalize-space()='View All'])[1]")).toHaveText("View All");
    await expect(page.locator("(//button[normalize-space()='Next'])[1]")).toHaveText("Next");
    await expect(page.locator("(//button[normalize-space()='Previous'])[1]")).toHaveText("Previous");
    //verify the footer section button
    await page.evaluate(() => {
        window.scrollBy(0, 10000);
      }) 
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
    //verify the options under the our services section
    await expect(page.locator("ul>li")).toContainText(['Buying A Home', 'Mortgage Refinance', 'Jumbo Mortgages', 'Investment Properties']);
    //verify the options under the Resources section
    await expect(page.locator("ul>li")).toContainText(['Blog', 'Mortgage Calculators', 'Rent vs. Buy', 'Our Process']);
    //verify the options under the our About Us section
    await expect(page.locator("ul>li")).toContainText(['Careers', 'Community Outreach', 'In The News', 'Contact Us']);
    await expect(page.locator("(//span[@class='trigger'])[1]")).toHaveText("Beverly Hills");
    await expect(page.locator("(//span[@class='trigger active'])[1]")).toHaveText("San Francisco");
    await expect(page.locator("(//p[normalize-space()='© 2024 Carlyle Financial'])[1]")).toBeVisible();

    // //verify the functionality of about us button
    // await page.locator("(//a[text()='About Us'])[1]").click();
    // await page.waitForTimeout(2000);
    // await expect(page.url()).toBe('https://www.carlylefinancial.com/about-us/');
    // await expect(page.locator("(//h3[normalize-space()='What Our Clients Have to Say'])[1]")).toBeVisible();

    // //verify the functionality of Services section
    // await page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]").click();
    // await expect(page.locator("ul>li")).toContainText(['Jumbo Mortgages', 'Buying A Home', 'Mortgage Refinance', 'Investment Properties']);
    // await expect(page.locator("ul>li")).toContainText(['Our Calculators', 'Amortization', 'Mortgage', 'Loan Comparison', 'Refinance']);
    // //branch location functionality
    // await page.locator("//a[normalize-space()='Branch Locations']").hover();
    // await expect(page.locator("//li[@id='menu-item-21047']//div[@class='cf-mega--menu']//div[1]//a[1]")).toBeVisible();
    // //await expect(page.locator("//li[@id='menu-item-21047']//div[2]//a[1]")),toBe();
    // await expect(page.locator("//li[@id='menu-item-21047']//div[contains(text(),'Los Angeles')]")).toBeVisible();
    // await page.locator("//a[normalize-space()='In The Press']").click();
    // await page.waitForTimeout(5000);
    // await expect(page.url()).toBe("https://www.carlylefinancial.com/press/");
    // await expect(page.locator("//h1[normalize-space()='In The Press']")).toBeVisible();
    // await expect(page.locator("(//h1[normalize-space()='In The Press'])[1]")).toHaveText("In The Press");
    // //await page.locator("//a[@href='https://www.carlylefinancial.com/blog/']").click();
    // await page.locator("(//a[text()='Blog'])[1]").click();
    // await page.waitForTimeout(5000);
    // await expect(page.url()).toBe("https://www.carlylefinancial.com/blog/");
    // await expect(page.locator("(//h1[normalize-space()='Mortgage Advice & Market Updates'])[1]")).toHaveText("Mortgage Advice & Market Updates");
});