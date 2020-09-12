const {Builder, By} = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function simpleRegistrationTest() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.xpath("//input[@id='email']")).sendKeys("example@gmail.com");
        await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("12345");
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
        await driver.close();
    } catch (e) {
        console.log(e);
    }
}

simpleRegistrationTest();
