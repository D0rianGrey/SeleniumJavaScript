const { Builder, By, Key } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function iframeForm(){

    try{
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
    await driver.switchTo().frame(0);
    await driver.findElement(By.xpath("//input[@aria-labelledby='i1']")).sendKeys('Eugene Vakerin');
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB)).perform();
    await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)).perform();
    await driver.actions().sendKeys(Key.chord(Key.SPACE)).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "12")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "24")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "1991")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "Secret answer")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();

    } catch (e) {
        console.log(e);
    }
}

iframeForm();