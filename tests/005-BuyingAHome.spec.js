import {test,expect} from "@playwright/test";

test("Buying A home", async({page})=>{
    await page.goto("https://www.carlylefinancial.com/");
    await expect(page.locator("//li[@id='menu-item-21044']//a[contains(text(),'Services')]")).hover();

    await page.locator("//li[@id='menu-item-2558']//a[normalize-space()='Buying A Home']").click();
    await expect(page.url()).toBe("https://www.carlylefinancial.com/our-services/purchase/");
    await expect(page.locator("//h1[normalize-space()='Buying A Home']")).toHaveText("Buying A Home"  );
    await expect(page.locator("//strong[contains(text(),'The purchase of your perfect home – whether a loft')]")).toHaveText("The purchase of your perfect home – whether a loft in SoMa or a beachside bungalow in Venice – is an important decision in your life.");
    await expect(page.locator("//strong[normalize-space()='We never lose sight of that.']")).toHaveText("We never lose sight of that.");
    await expect(page.locator("//h3[normalize-space()='Choosing Your First Home.']").toHaveText("Choosing Your First Home."));
    await expect(page.locator("//h3[normalize-space()='Expanding Your Lifestyle.']")).toHaveText("Expanding Your Lifestyle.");
    await expect(page.locator("//h3[normalize-space()='Adding A Second Home or Vacation Property.']")).toHaveText("Adding A Second Home or Vacation Property.");
    await expect(page.locator("//h3[normalize-space()='Investment Property.']")).toHaveText("Investment Property.");
    await expect(page.locator("//h3[normalize-space()='Living a Golden Retirement.']")).toHaveText("Living a Golden Retirement.");
    await page.locator("//a[normalize-space()='your residential or commercial investment.']").click();
    await expect(page.url()).toBe("//a[normalize-space()='your residential or commercial investment.']");
    await page.goBack();

})