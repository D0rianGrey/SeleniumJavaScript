const { Builder, By, Key } = require("selenium-webdriver");
const { assert } = require("chai");
const { expect } = require("chai");
const { should } = require("chai");

async function example() {
  try {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://google.com.ua");
    //await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
    await driver.findElement(By.name("q")).sendKeys("Selenium");
    await driver.findElement(By.xpath("//div[@class='tfB0Bf']//input[@class='gNO89b']")).click();
  } catch (e) {
    console.log(e);
  }
}

example();

