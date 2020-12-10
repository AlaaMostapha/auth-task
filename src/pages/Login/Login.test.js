const puppeteer = require("puppeteer");

test("should return name and email", async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.click("input#email");
  await page.type("input#email", "alaa.moustafa@ibtikar.net.sa");
  await page.click("input#password");
  await page.type("input#password", "12345678");
  await page.click("button#loginBtn");
  // await page.on("close");
  // await page.waitForRequest("http://localhost:3000/home");
  await page.goto("http://localhost:3000/home");

  // const userName = await page.$eval("#usernName", (el) => el.textContent);
  // expect(userName).toBe("alaa mostafa");
}, 40000);
