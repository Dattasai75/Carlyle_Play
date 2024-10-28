import {test, expect} from "@playwright/test";
import exp from "constants";

test.only("verify the available buttons and functionality of Branch Locations page", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    //await expect(page.url()).toBe("https://www.carlylefinancial.com/");
    await page.locator("//a[@href='/contact-us/'][normalize-space()='Branch Locations']").hover();
    await expect(page.locator("(//span[@class='sr-only'][normalize-space()='//li[@id='menu-item-21047']//div[contains(text(),'One Market Plaza')]'])[2]")).toHaveText("One Market Plaza");
    await expect(page.locator("//li[@id='menu-item-21047']//div[contains(text(),'Los Angeles')]")).toHaveText("Los Angeles");
    await page.locator("//a[@href='/contact-us/'][normalize-space()='Branch Locations']").click();
    await expect(page.url()).toBe();
    await expect(page.locator("//h3[normalize-space()='San Francisco Office']")).toHaveText('San Francisco Office');
    await expect(page.locator("//h3[normalize-space()='Beverly Hills Office']")).toHaveText('Beverly Hills Office');
    await expect(page.locator("//h1[@id='contact-us']")).toBeVisible();
    await expect(page.locator("//h3[normalize-space()='Contact Us']")).toBeVisible();
    await expect(page.locator("//h2[normalize-space()='Personal Information']")).toBeVisible();
    await expect(page.locator("ul>li")).toContainText(['First Name','Last Name','Phone Number','Email Address','Additional Information']);
    await expect(page.locator("//input[@id='input_21_3']")).fill("matt");
    await expect(page.locator("//input[@id='input_21_2']")).fill("pine");
    await expect(page.locator("//input[@id='input_21_5']")).fill("9876543210");
    await expect(page.locator("//input[@id='input_21_12']")).fill("9876543210");
    await expect(page.locator("//textarea[@id='input_21_7']")).fill("pine@gmail.com");
    await page.locator("//input[@id='gform_submit_button_21']").click();
    await expect(page.locator("//b[normalize-space()='Get In Touch with Our Expert Mortgage Bankers']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Why Choose Carlyle Financial?']")).toBeVisible();
    await expect(page.locator("//b[normalize-space()='Start Your Mortgage Journey Today']")).toHaveText("Start Your Mortgage Journey Today");
    //await expect(page.locator(""))

    










    
})