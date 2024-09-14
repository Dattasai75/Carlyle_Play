 const {test,expect}=require('@playwright/test');

 test.only('get your quote',async ({page})=>{
      await page.goto('https://www.carlylefinancial.com/');
      await expect(page).toHaveURL('https://www.carlylefinancial.com/');
      await page.click("//a[normalize-space()='Get your quote']");
      await expect(page.url()).toBe('https://www.carlylefinancial.com/get-started/');
      await expect(page.locator("//h2[normalize-space()='My Loan Details']")).toHaveText('My Loan Details');
      await expect(page.locator("ul>li")).toContainText(['Loan Purpose','Occupancy','Credit Score','Property Type','Desired Loan Amount ($)']);
      await page.locator("//div[@id='input_15_2_chosen']").click();
      await expect(page.locator("ul>li")).toContainText(['- Select One -','Purchase','Pre-Approval','Refinance','Refinance (Cash-Out)'])
      await page.click("//div[@id='input_15_2_chosen']//a[@class='chosen-single']//div");
});


      

       
 