const { Builder, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function iframeForm(){
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
    await driver.switchTo().frame(0);
    

}