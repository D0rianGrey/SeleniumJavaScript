const {Builder, By} = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function dropDownTest() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
        const select1 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']//button[@class='btn-primary']"));
        await select1.click();
        await driver.findElement(By.xpath("//nb-option[@value='4']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await select1.click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`)).click();
        const select3 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']//button[@class='btn-primary']"));
        await select3.click();
        await driver.findElement(By.xpath("//nb-option[@value='3']")).click();
        await select3.click();
        await driver.findElement(By.xpath("//select[@formcontrolname='select4']//option[@value='saab']")).click();
        await driver.findElement(By.xpath("//button[@name='submit']")).click();
        await driver.close;

    } catch (e) {
        console.log(e);
    }
}

dropDownTest();
