const { Builder, By, Key } = require("selenium-webdriver");
const { assert } = require("chai");
const { expect } = require("chai");
const { should } = require("chai");

async function example() {
  try {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://google.com.ua");
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
  } catch (e) {
    console.log(e);
  }
}

example();

