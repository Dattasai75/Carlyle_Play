 const {test,expect}=require('@playwright/test');
const { loadEnvFile } = require('process');

 test('get your quote',async ({page})=>{
      await page.goto(process.env.BASE_URL_1);
      await page.waitForTimeout(5000);
      await expect(page).toHaveURL(process.env.BASE_URL_1);
      await page.click("//a[normalize-space()='Get your quote']");
      await page.waitForTimeout(5000);
      await expect(page.url()).toBe(`${process.env.BASE_URL_1}/get-started/`);
      await expect(page.locator("//h2[normalize-space()='My Loan Details']")).toHaveText('My Loan Details');
      await expect(page.locator("ul>li")).toContainText(['Loan Purpose','Occupancy','Credit Score','Property Type','Desired Loan Amount ($)']);
      await page.locator("//div[@id='input_15_2_chosen']").click();
      await expect(page.locator("ul>li")).toContainText(['- Select One -','Purchase','Pre-Approval','Refinance','Refinance (Cash-Out)']);
      await page.locator("(//li[normalize-space()='Pre-Approval'])[1]").click();
      await page.locator("//div[@id='input_15_70_chosen']").click();
      await expect(page.locator("Ul>li")).toContainText(['Primary Property','Second Home','Investment Property']);
      await page.locator("//li[normalize-space()='Second Home']").click();
      await page.locator("//div[@id='input_15_69_chosen']").click();
      await expect(page.locator("ul>li")).toContainText(['- Select One -','780+ FICO','760-779','740-759','720-739','700-719','680-699','660-679',"Not Sure/Don't Know"]);
      await page.locator("//li[normalize-space()='760-779']").click();
      await page.locator("//div[@id='input_15_71_chosen']").click();
      await expect(page.locator("ul>li")).toContainText(['- Select One -','Single Family Residence','Condo','PUD','Duplex','4-plex']);
      await page.locator("//li[normalize-space()='Duplex']").click();
      await page.locator("//input[@id='input_15_48']").fill('530');
      await page.locator("//input[@id='input_15_51']").fill('531');
      await expect(page.locator("//h2[normalize-space()='Contact Information']")).toHaveText('Contact Information');
      await expect(page.locator("ul>li")).toContainText(['First Name','Last Name','Phone Number','Email Address','Additional Information']);
      await page.locator("//input[@id='input_15_7']").fill('matt');
      await page.locator("//input[@id='input_15_8']").fill('pine');
      await page.locator("//input[@id='input_15_43']").fill('9876543210');
      await page.locator("//input[@id='input_15_30']").fill('pine@gmail.com');
      await page.locator("//textarea[@id='input_15_10']").fill('Best time to call');
      await expect(page.locator("(//span[contains(text(),'No Obligation')])[1]")).toHaveText('No Obligation');
      await expect(page.locator("(//span[contains(text(),'Secure')])[1]")).toHaveText('Secure');
      await expect(page.locator("(//span[contains(text(),'Expert Advice')])[1]")).toHaveText('Expert Advice');
      await page.locator("//input[@id='gform_submit_button_15']").click();
      await page.waitForTimeout(5000);
      await expect(page.url()).toBe(`${process.env.BASE_URL_1}/thank-you-for-contacting-carlyle-financial/#gf_15`);
      await expect(page.locator("//h1[normalize-space()='Thank You']")).toHaveText('Thank You');
      await expect(page.locator("//a[normalize-space()='Homepage']")).toHaveText('Homepage');
      await expect(page.locator("//a[normalize-space()='View our Blog']")).toHaveText('View our Blog');
});


      

       
 