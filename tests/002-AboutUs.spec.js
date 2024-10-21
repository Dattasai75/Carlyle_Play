import {test, expect} from "@playwright/test";

test("verify the available buttons and functionality of About-Us page", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    //verify the functionality of about us button
    await page.locator("(//a[text()='About Us'])[1]").click();
    await page.waitForTimeout(2000);
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/about-us/`);
    //verify the available text or detains in the about us page
    await expect(page.locator("(//h4[normalize-space()='Each Client is Unique to Us'])[1]")).toHaveText("Each Client is Unique to Us");
    await expect(page.locator("(//h4[normalize-space()='Our Relationships Benefit Clients'])[1]")).toHaveText("Our Relationships Benefit Clients");
    await expect(page.locator("(//h4[normalize-space()='Our Clients are our Neighbors'])[1]")).toHaveText("Our Clients are our Neighbors");
    await expect(page.locator("(//h3[normalize-space()='What Our Clients Have to Say'])[1]")).toBeVisible();
    await page.evaluate(() => {
        window.scrollBy(0, 12000);
      })  
    //Verify the team members details 
    await expect(page.locator("(//h3[normalize-space()='Meet The Team'])[1]")).toHaveText("Meet The Team");
    await expect(page.locator("//p[contains(text(),'Our team at Carlyle Financial is experienced, hard')]")).toHaveText("Our team at Carlyle Financial is experienced, hardworking, and dedicated to helping you meet all you");
    //verify the visibility of ? Help button.
    await expect(page.locator("//button[@data-testid='launcher']")).toBeVisible();
    //verify that president details are visible or not
    await expect(page.locator("(//h3[normalize-space()='Robert Cohan'])[1]")).toHaveText("Robert Cohan");
    await expect(page.locator("(//p[normalize-space()='President'])[1]")).toHaveText("President");
    await expect(page.locator("(//span[normalize-space()='NMLS: 335848'])[1]")).toHaveText("NMLS: 335848");
    await expect(page.locator("(//span[normalize-space()='DRE: 01862401'])[1]")).toHaveText("DRE: 01862401");
    await expect(page.locator("(//i[@class='fa fa-phone'])[1]")).toBeVisible();
    await expect(page.locator("(//a[@href='#cf-modal--all'])[1]")).toBeVisible();
    
    //verify that Senior Vice President details are visible or not
    await expect(page.locator("(//h3[normalize-space()='Sereyna Avila'])[1]")).toHaveText("Sereyna Avila");
    await expect(page.locator("(//p[normalize-space()='Senior Vice President'])[1]")).toHaveText("Senior Vice President");
    await expect(page.locator("(//span[normalize-space()='NMLS: 1593591'])[1]")).toHaveText("NMLS: 1593591");
    await expect(page.locator("(//span[normalize-space()='DRE: 02026693'])[1]")).toHaveText("DRE: 02026693");

    //verify that Vice President of Mortgage Lending details are visible or not
    await expect(page.locator("//h3[normalize-space()='Jesse Collins']")).toHaveText('Jesse Collins');
    await expect(page.locator("(//p[normalize-space()='Vice President of Mortgage Lending'])[1]")).toHaveText("Vice President of Mortgage Lending");
    await expect(page.locator("(//span[normalize-space()='NMLS: 398992'])[1]")).toHaveText("NMLS: 398992");
    await expect(page.locator("//span[normalize-space()='DRE: 01903754']")).toHaveText("DRE: 01903754");

    //verify that Mortgage Loan Officer details are visible or not
    await expect(page.locator("(//h3[normalize-space()='Devin Donaldson'])[1]")).toHaveText("Devin Donaldson");
    await expect(page.locator("(//p[normalize-space()='Mortgage Loan Officer'])[1]")).toHaveText("Mortgage Loan Officer");
    await expect(page.locator("//span[normalize-space()='NMLS: 1385506']")).toHaveText("NMLS: 1385506");
    await expect(page.locator("//span[normalize-space()='DRE: 02052872']")).toHaveText("DRE: 02052872");

    //verify that Mortgage Broker/Banker  details are visible or not
    await expect(page.locator("//h3[normalize-space()='Caryn Schultz']")).toHaveText("Caryn Schultz");
    await expect(page.locator("(//p[normalize-space()='Mortgage Broker / Banker'])[1]")).toHaveText("Mortgage Broker / Banker");
    await expect(page.locator("//span[normalize-space()='NMLS: 271319']")).toHaveText("NMLS: 271319");
    await expect(page.locator("//span[normalize-space()='DRE: 01491016']")).toHaveText("DRE: 01491016");
  
    //verify that Office Administrator details are visible or not
    await expect(page.locator("//h3[normalize-space()='Dorothy Mabasa']")).toHaveText("Dorothy Mabasa");
    await expect(page.locator("//p[normalize-space()='Office Administrator']")).toHaveText("Office Administrator");
   
    //Check we're hiring section is visible in the about us page
    await expect(page.locator("(//a[@class='panel-inner'])[1]")).toBeVisible();
    await expect(page.locator("(//span[@class='sub-title'])[1]")).toHaveText("We’re Hiring");
    await expect(page.locator("(//h6[normalize-space()='Join The Team'])[1]")).toHaveText("Join The Team");
    await expect(page.locator("(//span[normalize-space()='Learn More'])[1]")).toHaveText("Learn More");
    //Upon clicking it should navigate to the careers page
    await page.locator("(//span[normalize-space()='Learn More'])[1]").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/careers/`);
    await expect(page.locator("//h1[@class='entry-title']")).toHaveText("Careers");
    await page.goBack();

    //Check Media section is visible in the about us page
    await expect(page.locator("(//div[@class='panel-inner'])[1]")).toBeVisible();
    await expect(page.locator("(//p[normalize-space()='Media'])[1]")).toHaveText("Media");
    await expect(page.locator("(//h4[normalize-space()='In the News'])[1]")).toHaveText("In the News");
    await expect(page.locator("(//p[contains(text(),'Recent interviews with the Wall Street Journal, Bu')])[1]")).toHaveText("Recent interviews with the Wall Street Journal, Business Insider and more.");
    await expect(page.locator("(//a[@href='${process.env.BASE_URL_1}/press/'][normalize-space()='Read more'])[1]")).toHaveText("Read more");
    //Upon clicking it should navigate to the press page
    await page.locator(`(//a[@href="${process.env.BASE_URL_1}/press/""][normalize-space()='Read more'])[1]`).click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/press/`);
    await expect(page.locator("//h1[@class='entry-title']")).toHaveText("In The Press");
    await page.goBack(); 

    //Check Community section is visible in the about us page
    ///await expect(page.locator("  ")).toBeVisible();
    await expect(page.locator("(//p[normalize-space()='Community'])[1]")).toHaveText("Community");
    await expect(page.locator("(//h4[normalize-space()='In the News'])[1]")).toHaveText("In the News");
    await expect(page.locator("(//p[contains(text(),'Recent interviews with the Wall Street Journal, Bu')])[1]")).toHaveText("Recent interviews with the Wall Street Journal, Business Insider and more.");
    await expect(page.locator(`(//a[@href='${process.env.BASE_URL_1}/press/'][normalize-space()='Read more'])[1]`)).toHaveText("Read more");
    //Upon clicking it should navigate to the press page
    await page.locator(`(//a[@href='${process.env.BASE_URL_1}/press/'][normalize-space()='Read more'])[1]`).click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/press/`);
    await expect(page.locator("//h1[@class='entry-title']")).toHaveText("In The Press");
    await page.goBack(); 
    //await expect(page.locator("")).toHaveText();
    //await expect(page.locator("")).toHaveText();
    //await expect(page.locator("")).toHaveText();
    //await expect(page.locator("")).toHaveText();
    //await expect(page.locator("")).toHaveText();
  // Unable to Automate the contact form page, because it has CAPTCHA.

    // await page.locator("(//a[@href='#cf-modal--all'])[1]").click();
    // await page.waitForTimeout(2000);
    // await page.keyboard.press("Enter");
    // await expect(page.locator("(//h4[normalize-space()='Contact'])[1]")).toHaveText("Contact");
    // //verify the available fields in the contact form
    // await expect(page.locator("ul>li")).toContainText(['First Name', 'Last Name', 'Email Address', 'Message', 'CAPTCHA']);
    // await page.waitForTimeout(2000);
    //await expect(page.locator("//label[@class='rc-anchor-center-item rc-anchor-checkbox-label']")).toBeVisible();
    //await page.locator("(//input[@class='large LoNotSensitive'])[1]").fill('Ramesh');
    //await page.locator("(//input[@class='large LoNotSensitive'])[2]").fill('Cohan');
    //await page.locator("(//input[@class='medium LoNotSensitive'])[1]").fill('abc@gmail.com');
    //await page.locator("(//textarea[@class='textarea medium'])[1]").fill("Today is the day, please don't skip this 1-minute read. We're sorry to interrupt, but it's Friday, 13 September, and our fundraiser doesn't last long. We request you to reflect on the number of times you visited Wikipedia in the past year and if you're able to donate ₹ 25 to the Wikimedia Foundation. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours.");
    //await page.locator("//div[@class='recaptcha-checkbox-border']").
    //await page.locator("(//input[@id='gform_submit_button_19'])[1]").click();
    //await page.waitForTimeout(2000);
    //await expect(page.url()).toBe("${process.env.BASE_URL_1}/thank-you-for-contacting-carlyle-financial/#gf_15");
    //await expect(page.locator("//h1[normalize-space()='Thank You']")).toHaveText('Thank You');
    //await expect(page.locator("//a[normalize-space()='Homepage']")).toHaveText('Homepage');
    //await expect(page.locator("//a[normalize-space()='View our Blog']")).toHaveText('View our Blog');
    //filling the contact details
    // await page.locator("")
    //await page.goBack();
});