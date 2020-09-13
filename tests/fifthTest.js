const {Builder, By} = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function checkboxTest() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form");
        await driver.findElement(By.name("name")).sendKeys("This is 'Name' input-field");
        await driver.findElement(By.id("comment")).sendKeys("This is 'Cpmment (optional)' input-field");
        await driver.findElement(By.xpath("//span[@class='custom-control-comment']")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@formcontrolname='dinner']//span[@class='customised-control-indicator']"))
            .click();
        await driver.findElement(By.name("submit")).click();
        await driver.close();

    } catch (e) {
        console.log(e)
    }
}

checkboxTest();
