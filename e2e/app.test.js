import puppeteer from "puppeteer";

describe("form", () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 100,
    });
    page = await browser.newPage();
  });

  test("button click add .active", async () => {
    jest.setTimeout(30000);
    await page.goto("http://localhost:8080");
    await page.waitForSelector(".form-button");
    const btn = await page.$(".form-button");
    await btn.click();
    const active = await page.$(".active");
    await page.waitForSelector(".active");
    expect(active).toBeDefined();
  });
  afterEach(async () => {
    await browser.close();
  });
});
