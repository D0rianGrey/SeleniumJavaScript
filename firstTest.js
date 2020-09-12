const {Builder, By, Key} = require("selenium-webdriver");
const {assert} = require("chai");
const {expect} = require("chai");
const {should} = require("chai");

async function example() {
    try {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().setTimeouts({implicit: 10000});
        await driver.get("http://google.com.ua");
        //await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
        await driver.findElement(By.name("q")).sendKeys("Selenium");
        await driver.findElement(By.xpath("//div[@class='tfB0Bf']//input[@class='gNO89b']")).click();
        await driver.close();
    } catch (e) {
        console.log(e)
    } finally {
        console.log("Finally");
    }
}


example().then(() => console.log("Test is passed"));

