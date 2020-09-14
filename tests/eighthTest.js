const { Builder, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function uploadFileTest() {
  try {
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
    await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname + "\\viber_image_2020-04-17_20-35-21.jpg");
    await driver.findElement(By.id("submit")).click();
  } catch (e) {
    console.log(e);
  }
}

uploadFileTest();