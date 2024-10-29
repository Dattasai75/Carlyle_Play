import {test, expect} from "@playwright/test";
import exp from "constants";

test.only("verify Blogs page", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    await page.locator("//li[@id='menu-item-22498']//a[normalize-space()='Blog']").click();
    //await expect(page.url("")).toBe();
    await expect(page.locator("//h1[normalize-space()='Mortgage Advice & Market Updates']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='California Home Buying: When is the Right Time?']")).toBeVisible();
    await page.locator("//a[normalize-space()='California Home Buying: When is the Right Time?']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/blog/california-home-buying-right-time/`);
    await page.goBack();
    await page.locator("//a[normalize-space()='California Jumbo Loans: What You Need to Know!']").click();
    await expect(page.url()).toBe(`${process.env.BASE_URL_1}/blog/understanding-jumbo-loans-california/`);
    await page.goBack();
    //await expect(page.locator(""));
    await page.locator("//a[normalize-space()='7 Popular Mortgages to Explore When Buying a Home']").click();
    await page.goBack();
    await page.locator("//a[contains(text(),'Navigating Mortgage Rates: The Role of Property Ty')]").click();
    await page.goBack();
    await page.locator("//a[contains(text(),'Jumbo vs Conventional Loans: Which Is Right for Yo')]").click();
    await page.goBack();
    await page.locator("//a[normalize-space()='Jumbo Loan Hotspots in the Golden State']").click();
    await page.goBack();
    await expect(page.locator("//h3[normalize-space()='Top Posts']")).toBeVisible();
    await expect(page.locator("//h3[normalize-space()='Categories']")).toBeVisible();
   // await expect(page.locator("Ul>li")).toContainText(['Buying A Home (34)','Carlyle (3)','Carlyle Financial (18)']);
    await expect(page.locator("//a[normalize-space()='Do RSUs Count As Income For a Home...']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Do You Qualify for an Interest-Onl...']")).toBeVisible();
    //await expect(page.locator(""));
    await expect(page.locator("//a[normalize-space()='NEWS: Jumbo Mortgages: What They A...']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Consultant? Freelancer? Document E...']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Homeowners Associations: What Home...']")).toBeVisible();

    //await expect(page.locator("")).toBeVisible();
    await expect(page.locator("//span[normalize-space()='Robert Cohan']")).toHaveText("Robert Cohan");
    //await expect(page.locator(""));
    //await expect(page.locator(""));
    await expect(page.locator("(//span[@class='author_name'][normalize-space()='Sereyna Avila'])[1]")).toHaveText("Sereyna Avila");
    await expect(page.locator("(//span[@class='author_name'][normalize-space()='Jesse Collins'])[1]")).toHaveText("Jesse Collins");
    await expect(page.locator("//a[normalize-space()='Buying A Home (34)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Carlyle Financial (18)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Community (0)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Events (4)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Financial News (5)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Homeowner Tips (21)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Interest-Only (4)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Jesse Collins (1)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Jumbo Mortgage (23)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Leadership Team (0)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Mortgage Advice by Robert Cohan (4)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Partner (0)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Refinancing A Home (8)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Ryan Woodward (0)']")).toBeVisible();

    await expect(page.locator("//a[normalize-space()='Carlyle (3)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Carlyle (3)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Carlyle (3)']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Carlyle (3)']")).toBeVisible();
    await page.locator("(//*[name()='svg'])[4]").click();

    await page.goBack();
    await page.locator("(//*[name()='svg'])[7]").click();
    await page.goBack();
    await page.locator("(//*[name()='svg'])[8]").click();
    await page.goBack();
    await page.locator("(//*[name()='svg'])[6]").click();
    await page.goBack();
    await expect(page.locator("//a[normalize-space()='Older Posts']")).toBeVisible();
    await page.locator("//a[normalize-space()='Older Posts']").click();
    await page.goBack();
    

    //await expect(page.url()).toBe("process.env.BASE_URL_1/blog/page/2/")
   // await expect(page.locator("")).toHaveText("");







})