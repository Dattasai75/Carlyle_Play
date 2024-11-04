import {test, expect} from "@playwright/test";

test("verify Blogs page", async({page})=>{
    await page.goto(process.env.BASE_URL_1);
    await page.waitForTimeout(5000);
    







})