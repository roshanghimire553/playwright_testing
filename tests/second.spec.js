const { test, expect } = require("@playwright/test");

test("second browser test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  //declaring variable//

  const btnClick = page.locator(".btn1");
  const firstName = page.locator("#firstName");
  const lastName = page.locator("#lastName");
  const useremail = page.locator("#userEmail");
  const phoneNumber = page.locator("#userMobile");
  //   const occupation = page.locator("#occupation");
  //   const occupationValue=page.$eval("")
  const gender = page.check("#Male");
  const password = page.locator("#userPassword");
  const confirmPassword = page.locator("#confirmPassword");
  const loginUser = page.locator("#login");

  //site link//

  await page.goto("https://rahulshettyacademy.com/client");

  await btnClick.click();
  await firstName.type("roshan");
  await lastName.type("ghimire");
  await useremail.type("roshanghimire333@gmail.com");
  await phoneNumber.type("9873922929");
  //   await occupation.type("1:Doctor");
  await password.type("12345678");
  await confirmPassword.type("12345678");
  await loginUser.click();
});
