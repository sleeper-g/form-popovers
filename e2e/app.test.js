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
  test("start", async () => {
    await page.goto("http://localhost:9000");
    await page.waitFor("body");
  });

  test("button click add .active", async () => {
    jest.setTimeout(30000);
    await page.goto("http://localhost:8080");
    await page.waitForSelector("button");
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
