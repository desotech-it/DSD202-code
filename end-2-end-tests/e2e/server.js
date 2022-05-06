const {Builder, Browser, until} = require('selenium-webdriver');

async function test() {
  const driver = await new Builder()
                           .forBrowser(Browser.CHROME)
                            .usingServer('http://selenium:4444/wd/hub')
                           .build();
  try {
    await driver.get('http://ui:3000/pet');
    await driver.wait(until.titleIs('Cat of the Day'), 1000);
  } finally {
    await driver.quit();
  }
}

console.log('Now waiting for 5 secs');
setTimeout(test, 5000);
