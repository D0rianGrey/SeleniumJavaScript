const {Builder} = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function openWebSites() {
    try {
        await driver.get("http://meta.ua");
        await driver.get("http://google.com");
        await driver.close();
    } catch (e) {
        console.log(e);
    }
}

openWebSites().then(() => console.log("Successfully opened"));
