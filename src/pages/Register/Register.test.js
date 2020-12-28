import "regenerator-runtime/runtime";
const puppeteer = require("puppeteer");

test("should return email and phone are already exist", async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/register");
  await page.click("input#userName");
  await page.type("input#userName", "alaa");
  await page.click("input#email");
  await page.type("input#email", "alaa.moustafa@ibtikar.net.sa");
  await page.click("input#password");
  await page.type("input#password", "12345678");
  await page.click("input#confirmPassword");
  await page.type("input#confirmPassword", "12345678");
  await page.click("input#phoneNumber");
  await page.type("input#phoneNumber", "01150550943");

  await page.click("button#registerBtn");
  await page.waitForSelector(".Toastify__toast-body");

  const header = await page.$eval(".Toastify__toast-body", (e) => e.innerHTML);
  expect(header).toBe("The email has already been taken");
  // expect(header).toBe("The mobile number is invalid");
}, 40000);
