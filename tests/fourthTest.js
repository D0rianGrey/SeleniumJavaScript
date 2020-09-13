const {Builder, By} = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function radioButtonTest() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        await driver.findElement(By.xpath("//input[@id='title']")).sendKeys("Title that has at least 20 characters");
        await driver.findElement(By.xpath("//input[@id='description']"))
            .sendKeys("Description mast be at least 20 characters");
        await driver.findElement(By.xpath("//span[@class='custom-control-indicator']")).click();
        await driver.findElement(By.xpath("//button[@name='submit']")).click();
        await driver.close();
    } catch (e) {
        console.log(e);
    }
}

radioButtonTest();
