const { test, expect } = require("@playwright/test");

test("browser page test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  //declaring variable//
  const username = page.locator("#username");
  const password = page.locator("#password");
  const btnClick = page.locator("#signInBtn");
  const arrayList = page.locator(".card-body a");

  //site link//

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await username.type("roshanghimire");
  await password.type("password");
  await page.check("#usertype");
  await page.locator(".form-control", { label: "Student" });
  await btnClick.click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText(
    "Incorrect username/password."
  );

  //fill with write information//
  await username.fill("");
  await username.fill("rahulshettyacademy");
  await password.fill("learning");
  await btnClick.click();

  //for getting array we should get firts and nth item otherwise array in data cannot be captured
  console.log(await arrayList.first().textContent());
  console.log(await arrayList.nth(1).textContent());
  console.log(await arrayList.allTextContents());
});

// test("browser test", async ({ page }) => {
//   await page.goto("http://google.com");
//   console.log(await page.title());
//   await expect(page).toHaveTitle("Google");
// });
