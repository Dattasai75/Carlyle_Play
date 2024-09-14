// import { test, expect } from "@playwright/test";
// import exp from "constants";
// // import {
// //   addDistributor,
// //   getCharacters,
// //   getCurrentDateFormatted,
// //   getRandomLanguage,
// //   getRandomNumbers,
// //   getUniqueName,
// // } from "../utils/common";

// test("Login-User2", async ({ page }) => {
//   await page.waitForTimeout(2000);
//   await page.locator("(//span[@class='show-text'])[1]").hover();
//   // await page.waitForTimeout(2000);
//   await page.locator("(//a[normalize-space()='Sign Out'])[1]").click();
//   //await page.waitForTimeout(2000);
//   await page.goto(process.env.BASE_URL);
//   //await page.goto("https://inflight-admin.alphatest.in/auth/signin");
//   await page.waitForTimeout(1000);
//   await page.getByPlaceholder("Email").fill(process.env.ADMN_USRNAME);
//   await page.getByPlaceholder("Password").fill(process.env.ADMN_PASSWORD);
//   await page.getByRole("button", { name: "Sign In" }).click();
//   // Wait untill page receives the cookies
//   await page.waitForURL(process.env.BASE_URL);
//   await expect(
//     page.locator("(//span[normalize-space()='Media Library'])[1]")
//   ).toBeVisible();
//   // Save the state of the webpage - meaning we are logged in
//   await page.context().storageState({ path: "./adminUserLoginAuth.json" });
// });
// test.use({ storageState: "./adminUserLoginAuth.json" });

// test.beforeEach(async ({ page }) => {
//   // Runs before each test and signs in each page.
//   await page.goto(process.env.BASE_URL);
// });

// test("Tc-0028-confirm whether Movie table column names and users are able to click the Add info button. ", async ({
//   page,
// }) => {
//   await page.locator("//span[normalize-space()='Media Library']").click();
//   await page.waitForTimeout(1000);
//   await expect(page.locator("tr>th")).toContainText([
//     "Basic Info",
//     "Distributor",
//     "Theatrical Release",
//     "IFE Release",
//     "Category",
//   ]);
//   await page
//     .locator("(//a[@role='button'][normalize-space()='Add Info +'])[1]")
//     .click();
//   await expect(
//     page.locator("//a[normalize-space()='Back to Movies']")
//   ).toHaveText(/Back to Movies/);
//   await expect(page.locator("(//button[@role='button'])[1]")).toHaveText(
//     /Delete/
//   );
// });

// test("Tc-0029-Ensure all fields are present on the info page and that their respective details are displayed correctly in the header.", async ({
//   page,
// }) => {
//   let movieToSave = getUniqueName(getCharacters(5));
//   let originalTitle = getUniqueName("Avengers - EndgameAvenger");
//   await page.getByRole("link", { name: "+ + Add Media" }).click();
//   await page.waitForTimeout(1000);
//   await page.locator("//input[@placeholder='Movie Name']").fill(movieToSave);
//   await addDistributor(page, "Annapurna Studios", "Hyderabad");
//   await page.locator("//button[@id='submit-media']").click();
//   await page.getByRole("button", { name: "Submit To Media Library" }).click();
//   await expect(
//     page.getByRole("heading", { name: "Media details added successfullyy" })
//   ).toBeTruthy();
//   //Confirming whether the added media is visible on the listing page or not.
//   await page.waitForTimeout(2000);
//   await page.locator("//input[@placeholder='Search']").click();
//   await page.locator("//input[@placeholder='Search']").fill(movieToSave);
//   await page.waitForTimeout(2000);
//   await page.locator("//input[@placeholder='Search']").press("Backspace");
//   await page
//     .locator("(//a[@role='button'][normalize-space()='Add Info +'])")
//     .click();
//   await page.waitForTimeout(2000);
//   await expect(
//     page.locator("//a[normalize-space()='Back to Movies']")
//   ).toHaveText(/Back to Movies/);
//   //Adding Original title info
//   await expect(page.locator('(//div[@class="col-md-6 mb-5"])[1]')).toHaveText(
//     /Original Title/
//   );
//   await page.locator('//input[@placeholder="Original Title"]').clear();
//   await page
//     .locator('//input[@placeholder="Original Title"]')
//     .fill(getCharacters(350));
//   await page.locator("//button[normalize-space()='Save Changes']").click();
//   await page.waitForTimeout(2000);
//   // Check validation message is displayed or not
//   await expect(page.locator("(//span[@class='text-danger'])[1]")).toHaveText(
//     /This field must be less than or equal to 255 characters/
//   );
//   await page.locator('//input[@placeholder="Original Title"]').clear();
//   await expect(page.locator("(//span[@class='text-danger'])[1]")).toHaveText(
//     /This field is required/
//   );
//   await page.waitForTimeout(2000);
//   await page
//     .locator('//input[@placeholder="Original Title"]')
//     .fill(originalTitle);
//   //Adding runtime info
//   await page.locator("//input[@placeholder='Time']").clear();
//   await page.locator("//input[@placeholder='Time']").fill("abcd");
//   await expect(
//     page.locator(
//       "//span[normalize-space()='Only numerical values are allowed']"
//     )
//   ).toHaveText(/Only numerical values are allowed/);
//   await page.locator("//input[@placeholder='Time']").fill("357913945");
//   await page.waitForTimeout(2000);
//   await expect(page.locator("(//span[@class='text-danger'])[1]")).toHaveText(
//     /Duration must be in range of 1 and 35791394/
//   );
//   await page.locator("//input[@placeholder='Time']").fill("123");
//   await page.locator("//textarea[@name='rights']").fill("Rights");
//   //Adding New Director info by clicking on Button.
//   let newDirector = getUniqueName("SS Rajamouli");
//   await page.locator("//a[normalize-space()='Add a new Director']").click();
//   await page.locator("//input[@placeholder='Director name']").fill(newDirector);
//   await page.locator("//button[@id='submit-lab']").click();
//   //Users can add new director info by typing in the field, where they'll see a "Create" option in the dropdown. Clicking on it will open a modal to add the new director.
//   let createDirector = getUniqueName("Sukumar Pushpa");
//   await page.locator("(//div[@class=' css-19bb58m'])[1]").click();
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[1]").click();
//   await page
//     .locator("(//div[contains(@class,'css-19bb58m')])[1]")
//     .pressSequentially(createDirector);
//   await page.waitForTimeout(2000);
//   await expect(
//     page.getByRole("option", { name: `Create "${createDirector}"` })
//   ).toHaveText(`Create "${createDirector}"`);
//   await page
//     .getByRole("option", { name: `Create "${createDirector}"` })
//     .click();
//   await expect(
//     page.locator("//h3[normalize-space()='Add New Director']")
//   ).toHaveText(/Add New Director/);
//   await page.locator("//button[@id='submit-lab']").click();
//   //Users can search for a director's name and select it from the dropdown menu.
//   await page
//     .locator("(//div[@class=' css-1xc3v61-indicatorContainer'])[1]")
//     .click();
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[1]").click();
//   await page
//     .locator("(//div[contains(@class,'css-19bb58m')])[1]")
//     .pressSequentially("Margot");
//   await page.waitForTimeout(2000);
//   await page.locator("(//div[text()='Margot'][@role='option'])[1]").click();
//   //Selecting MPAA rating info
//   await page.locator("//label[4]").click();
//   //Adding New Cast info
//   let castName = getUniqueName("Rana");
//   await page.locator("//a[normalize-space()='Add a new Cast']").click();
//   await page.locator("//input[@placeholder='Cast name']").fill(castName);
//   await page.locator("//button[@id='submit-lab']").click();
//   //Users can add new Cast info by typing in the field, where they'll see a "Create" option in the dropdown. Clicking on it will open a modal to add the new director.
//   let createCast = getUniqueName("Ram pothineni");
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[2]").click();
//   await page
//     .locator("(//div[contains(@class,'css-19bb58m')])[2]")
//     .pressSequentially(createCast);
//   await page.waitForTimeout(2000);
//   await expect(
//     page.getByRole("option", { name: `Create "${createCast}"` })
//   ).toHaveText(`Create "${createCast}"`);
//   await page.getByRole("option", { name: `Create "${createCast}"` }).click();
//   await expect(
//     page.locator("//h3[normalize-space()='Add New Cast']")
//   ).toHaveText(/Add New Cast/);
//   await page.locator("//button[@id='submit-lab']").click();
//   //Users can search for a cast name and select it from the dropdown menu.
//   await page
//     .locator("(//div[@class=' css-1xc3v61-indicatorContainer'])[2]")
//     .click();
//   await page
//     .locator("(//div[@class=' css-1xc3v61-indicatorContainer'])[2]")
//     .pressSequentially("Ram pothineni");
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//div[text()='Ram pothineni'][@role='option'])[3]")
//     .click();
//   //Adding synopsis
//   await page.locator("//textarea[@name='synopsis']").fill(getCharacters(510));
//   await expect(page.locator("(//span[@class='text-danger'])[1]")).toHaveText(
//     /This field must be less than or equal to 300 characters/
//   );
//   await page.locator("//textarea[@name='synopsis']").clear();
//   await page.locator("//textarea[@name='synopsis']").fill("Synopsis-123");
//   //Adding a New genre info
//   await page.locator("//a[normalize-space()='Add a new Genre']").click();
//   await page.locator("//input[@placeholder='Genre Name']").fill("Historical");
//   await page.locator("//button[@id='submit-show']").click();
//   //Selecting Theatrical Release
//   const currentDateFormatted = getCurrentDateFormatted();
//   await page.locator("(//input[@placeholder='Select a date'])[1]").click();
//   await page.keyboard.press("Delete");
//   await page.locator("(//input[@placeholder='Select a date'])[2]").click();
//   await page.keyboard.press("Delete");
//   await page.locator("(//input[@placeholder='Select a date'])[1]").click();
//   await page
//     .locator("//span[@aria-label= '" + currentDateFormatted + "']")
//     .first()
//     .click();
//   await page.waitForTimeout(1800);
//   //Selecting IFE Release
//   await page.locator("(//input[@placeholder='Select a date'])[2]").click();
//   await page
//     .locator("//span[@aria-label= '" + currentDateFormatted + "']")
//     .nth(1)
//     .click();
//   //Ditributor Information section
//   await expect(
//     page.locator("//h3[normalize-space()='Distributor Information']")
//   ).toHaveText(/Distributor Information/);
//   //Adding Distributor
//   await addDistributor(page, "Parvathikameswarann", "Tirupati");
//   // Adding Lab info
//   await page.waitForTimeout(2000);
//   await page.locator("//input[@id='react-select-7-input']").click();
//   await page.waitForTimeout(2000);
//   await page.locator("//div[@id='react-select-7-option-3']").click();
//   //Adding  Distributor Version info
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[6]").click();
//   await page.keyboard.press("Delete");
//   await page.locator("(//div[text()='Theatrical'][@role='option'])[1]").click();
//   //Adding Country of Origin
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[7]").click();
//   await page.keyboard.press("Delete");
//   await page.locator("//div[text()='Angola'][@role='option']").click();
//   //Rights In info
//   await page
//     .locator("(//*[name()='svg'][contains(@class,'css-8mmkcg')])[8]")
//     .click();
//   await page.keyboard.press("Delete");
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[8]").click();
//   await page.keyboard.press("Delete");
//   await page.waitForTimeout(2000);
//   await page.locator("(//div[text()='Worldwide'][@role='option'])[1]").click();
//   //Adding Logno info
//   await page.locator("(//input[@name='distributions.0.log_no'])[1]").click();
//   await page
//     .locator("(//input[@name='distributions.0.log_no'])[1]")
//     .fill("abc");
//   await page.locator("//button[normalize-space()='Save Changes']").click();
//   await page.waitForTimeout(3000);
//   await expect(page.locator("(//span[@class='text-danger'])[1]")).toHaveText(
//     /Only numerical values are allowed/
//   );
//   await page
//     .locator("(//input[@name='distributions.0.log_no'])[1]")
//     .fill("123454");
//   //Adding Availability info
//   await page
//     .locator("(//*[name()='svg'][contains(@class,'css-8mmkcg')])[9]")
//     .click();
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[9]").click();
//   await page.keyboard.press("Delete");
//   await page.locator("//div[text()='On Flow'][@role='option']").click();
//   //Category Info from dropdown list
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[10]").click();
//   await page.keyboard.press("Delete");
//   await page.locator("//div[text()='Classical'][@role='option']").click();
//   //Adding category via 'Add New category' button
//   await page
//     .locator("(//a[normalize-space()='Add a new Category'])[1]")
//     .click();
//   await page
//     .locator("//input[@placeholder=' Category Name']")
//     .fill("Category Movie");
//   await page.locator("//button[normalize-space()='Save changes']").click();
//   //Adding category by entering in the field
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[10]").click();
//   await page
//     .locator("(//div[contains(@class,'css-19bb58m')])[10]")
//     .pressSequentially("New Category Movies");
//   await expect(
//     page.getByRole("option", { name: 'Create "New Category Movies"' })
//   ).toHaveText(/Create "New Category Movies"/);
//   await page
//     .getByRole("option", { name: 'Create "New Category Movies"' })
//     .click();
//   await page.waitForTimeout(3000);
//   await expect(
//     page.locator("//h3[contains(text(),'Add New  Category')]")
//   ).toHaveText(/Add New  Category/);
//   await page.locator("//button[normalize-space()='Save changes']").click();
//   //Procurement Category Info from dropdown list
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[11]").click();
//   await page.waitForTimeout(2000);
//   await page.keyboard.press("Enter");
//   //Adding Procurement Category via 'Add New category' button
//   await page
//     .locator("(//a[normalize-space()='Add a new Procurement category'])[1]")
//     .click();
//   await page
//     .locator("//input[@placeholder='Procurement Category Name']")
//     .fill("Procurement Category Movie");
//   await page.locator("//button[normalize-space()='Save changes']").click();
//   await page.waitForTimeout(2000);
//   //Adding Procurement Category by entering in the field
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[11]").click();
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//div[contains(@class,'css-19bb58m')])[11]")
//     .pressSequentially("New Procurement Category Movies");
//   await expect(
//     page.getByRole("option", {
//       name: 'Create "New Procurement Category Movies"',
//     })
//   ).toHaveText(/Create "New Procurement Category Movies"/);
//   await page
//     .getByRole("option", { name: 'Create "New Procurement Category Movies"' })
//     .click();
//   await page.waitForTimeout(3000);
//   await expect(
//     page.locator("//h3[normalize-space()='Add New Procurement Category']")
//   ).toHaveText(/Add New Procurement Category/);
//   await page.locator("//button[normalize-space()='Save changes']").click();
//   //selecting Available for wireless radio buttons.
//   await page
//     .locator("(//label[@data-kt-button='true'][normalize-space()='Yes'])[1]")
//     .click();
//   //selecting DRM needed radio buttons
//   await page
//     .locator("(//label[@data-kt-button='true'][normalize-space()='No'])[2]")
//     .click();
//   await expect(
//     page.locator("(//a[text()='Delete Distributor'])[1]")
//   ).toHaveText(/Delete Distributor/);
//   await expect(
//     page.locator("(//a[text()='Add Another Distributor'])[1]")
//   ).toHaveText(/Add Another Distributor/);
//   //Adding IMDB info
//   await page.locator("//input[@name='rating.imdb']").clear();
//   await page.locator("//input[@name='rating.imdb']").fill("12345");
//   await page.locator("//button[normalize-space()='Save Changes']").click();
//   await page.waitForTimeout(2000);
//   await expect(
//     page.locator(
//       "//span[contains(text(),'This field cannot be greater than 10 and can have max 2 digit after the decimal point.')]"
//     )
//   ).toHaveText(
//     /This field cannot be greater than 10 and can have max 2 digit after the decimal point./
//   );
//   await page.locator("//input[@name='rating.imdb']").clear();
//   await page.locator("//input[@name='rating.imdb']").fill(".");
//   await expect(
//     page.locator(
//       "//span[normalize-space()='Only numerical values are allowed']"
//     )
//   ).toHaveText(/Only numerical values are allowed/);
//   await page.locator("//input[@name='rating.imdb']").fill("10.00");
//   await page.waitForTimeout(2000);
//   //Adding Metacritic info
//   await page.locator("//input[@name='rating.metacritic_critics']").clear();
//   await page
//     .locator("//input[@name='rating.metacritic_critics']")
//     .fill("123456");
//   await page.locator("//button[normalize-space()='Save Changes']").click();
//   await page.waitForTimeout(2000);
//   await expect(
//     page.locator(
//       "(//span[contains(text(),'This field cannot be greater than 100 and can have max 2 digit after the decimal point.')])[1]"
//     )
//   ).toHaveText(
//     /This field cannot be greater than 100 and can have max 2 digit after the decimal point./
//   );
//   await page.locator("//input[@name='rating.metacritic_critics']").clear();
//   await page.locator("//input[@name='rating.metacritic_critics']").fill("a");
//   await expect(
//     page.locator(
//       "//span[normalize-space()='Only numerical values are allowed']"
//     )
//   ).toHaveText(/Only numerical values are allowed/);
//   await page
//     .locator("//input[@name='rating.metacritic_critics']")
//     .fill("99.99");
//   await page.waitForTimeout(2000);
//   //Adding Rotten Tomatoes Audience Score info
//   await page
//     .locator("//input[@name='rating.rotten_tomatoes_audience']")
//     .clear();
//   await page
//     .locator("//input[@name='rating.rotten_tomatoes_audience']")
//     .fill("88.881");
//   await page.locator("//button[normalize-space()='Save Changes']").click();
//   await page.waitForTimeout(2000);
//   await expect(
//     page.locator(
//       "(//span[contains(text(),'This field cannot be greater than 100 and can have max 2 digit after the decimal point.')])[1]"
//     )
//   ).toHaveText(
//     /This field cannot be greater than 100 and can have max 2 digit after the decimal point./
//   );
//   await page.locator("//input[@name='rating.rotten_tomatoes_critics']").clear();
//   await page
//     .locator("//input[@name='rating.rotten_tomatoes_critics']")
//     .fill("123456");
//   await expect(
//     page.locator(
//       "(//span[contains(text(),'This field cannot be greater than 100 and can have max 2 digit after the decimal point.')])[2]"
//     )
//   ).toHaveText(
//     /This field cannot be greater than 100 and can have max 2 digit after the decimal point./
//   );
//   await page
//     .locator("//input[@name='rating.rotten_tomatoes_audience']")
//     .clear();
//   await page
//     .locator("//input[@name='rating.rotten_tomatoes_audience']")
//     .fill("@");
//   await expect(
//     page.locator(
//       "//span[normalize-space()='Only numerical values are allowed']"
//     )
//   ).toHaveText(/Only numerical values are allowed/);
//   await page
//     .locator("//input[@name='rating.rotten_tomatoes_audience']")
//     .fill("88.80000");
//   //Adding Rotten Tomatoes Critic Score info
//   await page.locator("//input[@name='rating.rotten_tomatoes_critics']").clear();
//   await page
//     .locator("//input[@name='rating.rotten_tomatoes_critics']")
//     .fill("1 1 1");
//   await expect(
//     page.locator(
//       "//span[normalize-space()='Only numerical values are allowed']"
//     )
//   ).toHaveText(/Only numerical values are allowed/);
//   await page
//     .locator("//input[@name='rating.rotten_tomatoes_critics']")
//     .fill("99.000");
//   //General Notes
//   await expect(
//     page.locator("//h3[normalize-space()='General Notes']")
//   ).toHaveText(/General Notes/);
//   await expect(
//     page.locator("//label[normalize-space()='Internal Notes']")
//   ).toHaveText(/Internal Notes/);
//   await page.locator("//textarea[@name='note']").fill("Internal General Notes");
//   await page
//     .locator("(//textarea[@name='awards'])[1]")
//     .fill("Awards/Nominations");
//   // Edit Notes
//   await expect(page.locator("//h3[normalize-space()='Edit Notes']")).toHaveText(
//     /Edit Notes/
//   );
//   await expect(
//     page.locator("//button[normalize-space()='+ Add More Notes']")
//   ).toHaveText("+ Add More Notes");
//   await page.locator("//button[normalize-space()='+ Add More Notes']").click();
//   await page.waitForTimeout(3000);
//   await expect(
//     page.locator("//h3[normalize-space()='Add Edit Notes']")
//   ).toHaveText(/Add Edit Notes/);
//   await page.locator("//input[@placeholder='Notes Title']").fill("Notes");
//   await expect(
//     page.locator("//h3[@class='fs-5 fw-bold text-gray-900 mb-1']")
//   ).toHaveText(/Drop files here or click to upload./);
//   await expect(
//     page.locator("//span[@class='fs-7 fw-semibold text-gray-500']")
//   ).toHaveText(/Upload a PDF or Doc/);
//   await page.getByText(
//     "Drop files here or click to upload. Upload a PDF or Doc"
//   );
//   await page.setInputFiles('//input[@type="file"]', "Notes.docx");
//   await page.waitForTimeout(2000);
//   await page.locator("//button[normalize-space()='Save changes']").click();
//   //Save changes
//   await page.locator("//button[normalize-space()='Save Changes']").click();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("//div[@role='dialog']")).toBeVisible();
//   await expect(page.locator("//h2[@id='swal2-title']")).toHaveText(
//     /Details updated successfully/
//   );
//   //Check Weather details are displayed correctly in the header.
//   await page.reload();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("(//a[text()='Distributor'])[1]")).toBeVisible();
//   await expect(page.locator("//div[normalize-space()='Runtime']")).toHaveText(
//     /Runtime/
//   );
//   await expect(
//     page.locator("(//div[normalize-space()='Theatrical Release'])[1]")
//   ).toHaveText(/Theatrical Release/);
//   await expect(
//     page.locator("(//div[normalize-space()='IFE Release'])[1]")
//   ).toHaveText(/IFE Release/);
//   await expect(page.locator("(//div[normalize-space()='MPAA'])[1]")).toHaveText(
//     /MPAA/
//   );
//   await expect(
//     page.locator("(//div[normalize-space()='Category'])[1]")
//   ).toHaveText(/Category/);
//   await expect(
//     page.locator("(//div[contains(text(),'Procurement Category')])[1]")
//   ).toHaveText(/Procurement Category/);
// });

// test("Tc-0030-Check the menu bar options in the header.", async ({ page }) => {
//   await page.locator("//span[normalize-space()='Media Library']").click();
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//a[@role='button'][normalize-space()='Add Info +'])[1]")
//     .click();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("ul>li")).toContainText([
//     "File Info",
//     "Languages",
//     "Metadata",
//     "Preview",
//     "Images",
//   ]);
// });

// test("Tc-0031-check the funtionality of language module", async ({ page }) => {
//   let movieToSave = getUniqueName(getCharacters(5));
//   await page.getByRole("link", { name: "+ + Add Media" }).click();
//   await page.waitForTimeout(2000);
//   await page.locator("//input[@placeholder='Movie Name']").fill(movieToSave);
//   await addDistributor(page, "Annapurna Studios", "Hyderabad");
//   await page.locator("//button[@id='submit-media']").click();
//   await page.getByRole("button", { name: "Submit To Media Library" }).click();
//   await expect(
//     page.getByRole("heading", { name: "Media details added successfullyy" })
//   ).toBeTruthy();
//   //Confirming whether the added media is visible on the listing page or not.
//   await page.waitForTimeout(2000);
//   await page.locator("//input[@placeholder='Search']").click();
//   await page.locator("//input[@placeholder='Search']").fill(movieToSave);
//   await page.waitForTimeout(2000);
//   await page.locator("//input[@placeholder='Search']").press("Backspace");
//   await page
//     .locator("(//a[@role='button'][normalize-space()='Add Info +'])")
//     .click();
//   await page.waitForTimeout(2000);
//   await page.locator("//a[normalize-space()='Languages']").click();
//   await expect(page.locator("//h3[normalize-space()='Languages']")).toHaveText(
//     /Languages/
//   );
//   //verify the types in language module.
//   await expect(page.locator("ul>li")).toContainText([
//     "Theatrical",
//     "Edited",
//     "Middle East Edit",
//     "Special Edit",
//   ]);
//   //Adding Dub
//   await page.locator("//a[normalize-space()='Theatrical']").click();
//   await expect(page.locator("//span[normalize-space()='Dubs']")).toHaveText(
//     /Dubs/
//   );
//   await page.locator("//a[normalize-space()='Edited']").click();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("//a[normalize-space()='Add Dub']")).toHaveText(
//     /Add Dub/
//   );
//   await page.locator("//a[normalize-space()='Add Dub']").click();
//   await page.waitForTimeout(2000);
//   await expect(
//     page.locator("//h3[normalize-space()='Add New dub']")
//   ).toHaveText(/Add New dub/);
//   await page.locator("(//div[@class=' css-19bb58m'])[1]").click();
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//div[text()='Select an option'])[1]")
//     .pressSequentially("Creole");
//   await page.waitForTimeout(2000);
//   await page.keyboard.press("Backspace");
//   await page.waitForTimeout(2000);
//   //await page.keyboard.press("Enter");
//   await page.locator("//div[text()='Creole']").click();
//   await page.waitForTimeout(2000);
//   await page.locator("(//div[@class=' css-19bb58m'])[2]").click();
//   await page.waitForTimeout(2000);
//   await page.getByRole("option", { name: "Recall" }).click();
//   await page.locator("(//div[@class=' css-19bb58m'])[3]").click();
//   await page.waitForTimeout(2000);
//   await page.getByRole("option", { name: "16x9" }).click();
//   await page
//     .locator("//input[contains(@placeholder,'Enter bit rate')]")
//     .fill("3.2");
//   await page.locator("(//div[@class=' css-19bb58m'])[4]").click();
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//div[@class=' css-19bb58m'])[4]")
//     .pressSequentially("ASCII");
//   await page.locator("(//div[@role='option'][text()='ASCII'])[1]").click();
//   await page.locator("(//div[@class=' css-19bb58m'])[5]").click();
//   await page
//     .locator("(//div[@class=' css-19bb58m'])[5]")
//     .pressSequentially("system23456");
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//div[@role='option'][text()='system23456'])[1]")
//     .click();
//   await page.locator("//button[normalize-space()='Save changes']").click();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("tr>th")).toContainText([
//     "Language",
//     "Status",
//     "Aspect Ratio",
//     "Bit Rate",
//     "Video Spec",
//     "Systems",
//   ]);
//   // Edit the added dub
//   await expect(
//     page.locator("(//a[normalize-space()='Edit Dub'])[1]")
//   ).toHaveText(/Edit Dub/);
//   await page.locator("(//a[normalize-space()='Edit Dub'])[1]").click();
//   await page.waitForTimeout(2000);
//   await page.locator("(//div[@class=' css-19bb58m'])[1]").click();
//   await page.waitForTimeout(2000);
//   await page.getByRole("option", { name: "Tech Fees" }).click();
//   await page.locator("(//div[@class=' css-19bb58m'])[2]").click();
//   await page.waitForTimeout(2000);
//   await page.getByRole("option", { name: "4x3" }).click();
//   await page
//     .locator("//input[contains(@placeholder,'Enter bit rate')]")
//     .fill("2.7");
//   await page.locator("(//div[@class=' css-19bb58m'])[3]").click();
//   await page
//     .locator("(//div[@class=' css-19bb58m'])[3]")
//     .pressSequentially("Aditya Music");
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//div[@role='option'][text()='Aditya Music'])[1]")
//     .click();
//   await page.locator("(//div[@class=' css-19bb58m'])[4]").click();
//   await page
//     .locator("(//div[@class=' css-19bb58m'])[4]")
//     .pressSequentially("system987654");
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//div[@role='option'][text()='system987654'])[1]")
//     .click();
//   await page.locator("//button[normalize-space()='Save changes']").click();
//   await page.waitForTimeout(5000);
//   //Adding Sub in Thetrical
//   await expect(page.locator("//a[normalize-space()='Add Sub']")).toHaveText(
//     /Add Sub/
//   );
//   await page.locator("//a[normalize-space()='Add Sub']").click();
//   await page.waitForTimeout(2000);
//   await page.locator("(//div[@class=' css-19bb58m'])[1]").click();
//   await page.waitForTimeout(400);
//   await page
//     .locator("(//div[text()='Select an option'])[1]")
//     .pressSequentially("Creole");
//   await page.waitForTimeout(2000);
//   await page.locator("//div[text()='Creole']").click(); //await page.keyboard.press("Enter");
//   await page.locator("(//div[@class=' css-19bb58m'])[2]").click();
//   await page.waitForTimeout(2000);
//   await page.getByRole("option", { name: "Burnt In" }).click();
//   await page.locator("(//div[@class=' css-19bb58m'])[3]").click();
//   await page.waitForTimeout(2000);
//   await page.getByRole("option", { name: "Recall" }).click();
//   await page.locator("(//div[@class=' css-19bb58m'])[4]").click();
//   await page
//     .locator("(//div[@class=' css-19bb58m'])[4]")
//     .pressSequentially("system23456");
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//div[@role='option'][text()='system23456'])[1]")
//     .click();
//   await page
//     .locator(
//       "(//div[contains(@class,'css-1wy0on6')]//div[2]//*[name()='svg'])[4]"
//     )
//     .click();
//   await page.locator("//button[normalize-space()='Save changes']").click();
//   await page.waitForTimeout(4000);
//   // Edit the added Sub
//   await expect(
//     page.locator("(//a[normalize-space()='Edit Sub'])[1]")
//   ).toHaveText(/Edit Sub/);
//   await page.locator("(//a[normalize-space()='Edit Sub'])[1]").click();
//   await page.waitForTimeout(2000);
//   await page.locator("(//div[@class=' css-19bb58m'])[1]").click();
//   await page.waitForTimeout(2000);
//   await page.getByRole("option", { name: "Dynamic" }).click();
//   await page.locator("(//div[@class=' css-19bb58m'])[2]").click();
//   await page.waitForTimeout(2000);
//   await page.getByRole("option", { name: "Tech Fees" }).click();
//   await page.locator("(//div[@class=' css-19bb58m'])[3]").click();
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//div[@class=' css-19bb58m'])[3]")
//     .pressSequentially("system987654");
//   await page
//     .locator("(//div[@role='option'][text()='system987654'])[1]")
//     .click();
//   await page.locator("//button[normalize-space()='Save changes']").click();
//   await page.waitForTimeout(4000);
//   //Remove Dub
//   await expect(
//     page.locator("(//a[normalize-space()='Remove Dub'])[1]")
//   ).toHaveText(/Remove Dub/);
//   await page.waitForTimeout(3000);
//   await page.locator("(//a[normalize-space()='Remove Dub'])[1]").click();
//   await expect(page.locator("//div[@id='swal2-html-container']")).toHaveText(
//     "Are you sure you want to delete this Dub?  This can not be undone."
//   );
//   await page.locator("//button[normalize-space()='Yes, Delete']").click();
//   await expect(page.locator("//h2[@id='swal2-title']")).toHaveText(
//     /Data deleted successfully/
//   );
//   //Remove Sub
//   await expect(
//     page.locator("(//a[normalize-space()='Remove Sub'])[1]")
//   ).toHaveText(/Remove Sub/);
//   await page.locator("(//a[normalize-space()='Remove Sub'])[1]").click();
//   await expect(page.locator("//div[@id='swal2-html-container']")).toHaveText(
//     "Are you sure you want to delete this Sub?  This can not be undone."
//   );
//   await page.locator("//button[normalize-space()='Yes, Delete']").click();
//   await expect(page.locator("//h2[@id='swal2-title']")).toHaveText(
//     /Data deleted successfully/
//   );
// });

// test("Tc-0032-Check the funtionality of Metadata module", async ({ page }) => {
//   let movieToSave = getUniqueName(getCharacters(5));
//   await page.getByRole("link", { name: "+ + Add Media" }).click();
//   await page.waitForTimeout(2000);
//   await page.locator("//input[@placeholder='Movie Name']").fill(movieToSave);
//   await addDistributor(page, "Annapurna Studios", "Hyderabad");
//   await page.locator("//button[@id='submit-media']").click();
//   await page.getByRole("button", { name: "Submit To Media Library" }).click();
//   await expect(
//     page.getByRole("heading", { name: "Media details added successfullyy" })
//   ).toBeTruthy();
//   //Confirming whether the added media is visible on the listing page or not.
//   await page.waitForTimeout(2000);
//   await page.locator("//input[@placeholder='Search']").click();
//   await page.locator("//input[@placeholder='Search']").fill(movieToSave);
//   await page.waitForTimeout(2000);
//   await page.locator("//input[@placeholder='Search']").press("Backspace");
//   await page
//     .locator("(//a[@role='button'][normalize-space()='Add Info +'])")
//     .click();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("//a[normalize-space()='Metadata']")).toHaveText(
//     /Metadata/
//   );
//   await page.locator("//a[normalize-space()='Metadata']").click();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("//h3[normalize-space()='Metadata']")).toHaveText(
//     /Metadata/
//   );
//   await expect(
//     page.locator("//h5[normalize-space()='Add Another Language']")
//   ).toHaveText(/Add Another Language/);
//   // Additional steps to simulate saving or confirming the changes, if necessary
//   await page.locator("//div[@class=' css-19bb58m']").click();
//   await page.waitForTimeout(2300);
//   await page.locator("(//div[text()='Creole'])[1]").click();
//   await page.waitForTimeout(2000);
//   await page.locator("//a[normalize-space()='Add Language']").click();
//   await expect(
//     page.locator(
//       "//h4[@class='fw-bold mb-5'][normalize-space()='Creole Synopsis']"
//     )
//   ).toHaveText(/Creole Synopsis/);
//   await expect(
//     page.locator("(//a[normalize-space()='Remove Synopsis Language'])[1]")
//   ).toHaveText(/Remove Synopsis Language/);
//   await expect(page.locator("(//div[@class='char-count '])[1]")).toHaveText(
//     "0 / 500 characters"
//   );
//   await expect(page.locator("(//div[@class='char-count '])[2]")).toHaveText(
//     "0 / 300 characters"
//   );
//   await expect(page.locator("(//div[@class='char-count '])[3]")).toHaveText(
//     "0 / 100 characters"
//   );
//   await expect(
//     page.locator("(//label[text()='Long Synopsis (500 Characters)'])[1]")
//   ).toHaveText("Long Synopsis (500 Characters)");
//   //await page.locator("//textarea[@data-Long-language='Creole']").click();
//   await page
//     .locator("//textarea[@data-Long-language='Creole']")
//     .fill(getCharacters(510));
//   await page.locator("//textarea[@data-Medium-language='Creole']").click();
//   await page
//     .locator("//textarea[@data-Medium-language='Creole']")
//     .fill(getCharacters(310));
//   await page.locator("//textarea[@data-short-language='Creole']").click();
//   await page
//     .locator("//textarea[@data-short-language='Creole']")
//     .fill(getCharacters(110));
//   await expect(page.locator("//button[text()='Save Changes']")).toHaveText(
//     /Save Changes/
//   );
//   await page.locator("//button[text()='Save Changes']").click();
//   await page.waitForTimeout(2000);
//   await expect(
//     page.locator(
//       "(//span[@class='text-danger'][normalize-space()='Long Synopsis must be less than or equal to 500 characters'])[1]"
//     )
//   ).toHaveText(/Long Synopsis must be less than or equal to 500 characters/);
//   await expect(
//     page.locator(
//       "(//span[@class='text-danger'][contains(text(),'Medium Synopsis must be less than or equal to 300 character')])[1]"
//     )
//   ).toHaveText(/Medium Synopsis must be less than or equal to 300 characters/);
//   await expect(
//     page.locator(
//       "(//span[@class='text-danger'][normalize-space()='Short Synopsis must be less than or equal to 100 characters'])[1]"
//     )
//   ).toHaveText(/Short Synopsis must be less than or equal to 100 characters/);
//   await page
//     .locator(
//       "//textarea[@name='synopses.0.long']",
//       "//textarea[@name='synopses.0.medium']",
//       "//textarea[@name='synopses.0.short']"
//     )
//     .clear();
//   await page.locator("//textarea[@data-Long-language='Creole']").click();
//   await page
//     .locator("//textarea[@data-long-language='Creole']")
//     .fill(getCharacters(459));
//   await page.locator("//textarea[@data-medium-language='Creole']").click();
//   await page.fill(
//     "//textarea[@data-Medium-language='Creole']",
//     getCharacters(210)
//   );
//   await page.locator("//textarea[@data-short-language='Creole']").click();
//   await page.fill(
//     "//textarea[@data-short-language='Creole']",
//     getCharacters(50)
//   );
//   await page.locator("//button[text()='Save Changes']").click();
//   await page.waitForTimeout(2000);
//   //Generate Trasulations
//   await expect(
//     page.locator("//button[normalize-space()='Generate Translations']")
//   ).toHaveText(/Generate Translations/);
//   await page
//     .locator("//button[normalize-space()='Generate Translations']")
//     .click();
//   await page.waitForTimeout(2000);
//   await expect(
//     page.locator("//h3[normalize-space()='Generate Translations']")
//   ).toHaveText(/Generate Translations/);
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[2]").click();
//   await page
//     .locator("(//div[contains(@class,'css-19bb58m')])[2]")
//     .pressSequentially("Creole");
//   await page.waitForTimeout(2000);
//   await page.locator("//div[text()='Creole']").click();
//   await page.locator("(//div[contains(@class,'css-19bb58m')])[4]").click();
//   await page.waitForTimeout(2000);
//   await page.keyboard.press("Enter");
//   await page.locator("//button[normalize-space()='Save changes']").click();
//   await page.waitForTimeout(2000);
//   await page.locator("//button[text()='Save Changes']").click();
// });

// test("Tc-0033- Check the funtionality of Preview module", async ({ page }) => {
//   await page.locator("//span[normalize-space()='Media Library']").click();
//   await page.waitForTimeout(2000);
//   await page.locator("//select[@name='movie-table_length']").selectOption("96");
//   await page.waitForTimeout(3000);
//   await page
//     .locator(
//       "(//a[@role='button'][normalize-space()='Add Info +'])[" +
//         getRandomNumbers() +
//         "]"
//     )
//     .click();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("//a[normalize-space()='Preview']")).toHaveText(
//     /Preview/
//   );
//   await page.locator("//a[normalize-space()='Preview']").click();
//   await expect(
//     page.locator("//h4[normalize-space()='Preview Details']")
//   ).toHaveText(/Preview Details/);
//   //uploading official preview file.
//   await page.waitForTimeout(3000);
//   await page.setInputFiles('//input[@type="file"]', "PreviewFile.mp4");
//   await page.waitForTimeout(2000);
//   await expect(page.locator("//button[normalize-space()='Upload']")).toHaveText(
//     /Upload/
//   );
//   await expect(page.locator("//button[normalize-space()='Remove']")).toHaveText(
//     /Remove/
//   );
//   await expect(page.locator("//img[@alt='play-fill']")).toBeTruthy();
//   await page.locator("//img[@alt='play-fill']").click();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("//button[normalize-space()='Close']")).toHaveText(
//     /Close/
//   );
//   await page.locator("//button[normalize-space()='Close']").click();
//   await page.locator("//input[@name='log_no']").click();
//   await page.locator("//input[@name='log_no']").clear();
//   await page.locator("//input[@name='log_no']").fill("123");
//   await page.locator("//div[@class=' css-19bb58m']").click();
//   page.keyboard.press("Enter");
//   await page
//     .locator("//input[@name='url']")
//     .pressSequentially("https://www.youtube.com/");
//   await expect(
//     page.locator("//h4[normalize-space()='Screener Details']")
//   ).toHaveText("Screener Details");
//   await page
//     .locator("//input[@name='screener_link']")
//     .pressSequentially("https://www.google.com/");
//   await page.locator("//button[normalize-space()='Upload']").click();
//   await page.waitForTimeout(2000);
//   await page.locator("//button[normalize-space()='Save Changes']").click();
// });

// test("Tc-0034- Check the funtionality of Images module", async ({ page }) => {
//   await page.locator("//span[normalize-space()='Media Library']").click();
//   await page.waitForTimeout(2000);
//   await page.waitForTimeout(2000);
//   await page
//     .locator("(//a[@role='button'][normalize-space()='Add Info +'])[1]")
//     .click();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("//a[normalize-space()='Images']")).toHaveText(
//     /Images/
//   );
//   await page.locator("//a[normalize-space()='Images']").click();
//   await expect(page.locator("//h4[normalize-space()='Posters']")).toHaveText(
//     "Posters"
//   );
//   await page.waitForTimeout(2000);
//   await page.setInputFiles('//input[@type="file"]', "Marvel.jpeg");
//   await page.waitForTimeout(5000);
//   await page.setInputFiles(
//     `(//input[contains(@type,'file')])[2]`,
//     "download.jpeg"
//   );
//   await page.waitForTimeout(2000);
//   await page.locator("//button[normalize-space()='Save Changes']").click();
//   await page.waitForTimeout(2000);
//   await expect(
//     page.locator(
//       "(//span[contains(@class,'badge badge-info poster-badge-default')])[1]"
//     )
//   ).toHaveText("Default");
//   await expect(
//     page.locator("(//label[contains(text(),'Aspect')])[1]")
//   ).toHaveText("Aspect");
//   await expect(
//     page.locator("(//label[contains(text(),'Type')])[1]")
//   ).toHaveText("Type");
//   await expect(
//     page.locator("(//label[contains(text(),'Size')])[1]")
//   ).toHaveText("Size");
// });

// // test("Tc-0035- Verify the funtionality of Deleting Movies", async({page}) =>{
// //   await page.locator("//span[normalize-space()='Media Library']").click();
// //   await page.locator("(//button[normalize-space()='Movies'])[1]").click();
// //   await page.waitForTimeout(2000);
// //   await expect(page.locator("(//button[@role='button'])[1]")).toHaveText("Delete");
// //   await page.locator("(//button[@role='button'])[1]").click();
// //   await expect(page.locator("(//div[@id='swal2-html-container'])[1]")).toBeVisible();
// //   await page.locator("(//button[normalize-space()='Yes, Delete'])[1]").click();
// //   await expect(page.locator("//h2[@id='swal2-title']")).toBeVisible();
// // });
