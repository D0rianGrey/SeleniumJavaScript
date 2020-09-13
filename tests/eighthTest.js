const {Builder, By} = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function downloadFileTest() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        await driver.findElement(By.xpath(""))


    } catch (e) {
        console.log(e);
    }
}

downloadFileTest();
