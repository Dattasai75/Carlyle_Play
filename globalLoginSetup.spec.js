import {test, expect} from "@playwright/test";
test("Login_User", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    console.log('BASE_URL_1:', process.env.BASE_URL_1);
    await page.waitForTimeout(3000);
    await expect(page.locator("//label[@for='input_wp_protect_password'][text()='Password:']")).toHaveText("Password:");
    await page.locator("//input[@class='input_wp_protect_password']").click();
    await page.locator("//input[@class='input_wp_protect_password']").pressSequentially(process.env.Password);
    await expect(page.locator("//input[@class='button button-primary button-login']")).toBeVisible();
    await page.locator("//input[@class='button button-primary button-login']").click();
    await page.waitForTimeout(5000);
    await page.context().storageState({path:"./adminUserLoginAuth.json"}); 
});