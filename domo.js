const spawn = require('child_process').spawn;
console.log("starting chromedriver...");
const chromedriver = spawn('chromedriver', ['--port=9515'], {stdio: "inherit"});

var webdriver = require("selenium-webdriver");
// shell.exec("chromedriver --port=9515")

startChrome = function() {
  console.log("starting chrome...");
  var chrome = new webdriver.Builder()
                          .withCapabilities(webdriver.Capabilities.chrome())
                          .usingServer('http://127.0.0.1:9515')
                          .build();

  // chrome.get('http://www.google.com');
  // chrome.findElement(webdriver.By.name('q')).sendKeys('webdriver');
  // chrome.findElement(webdriver.By.name('btnG')).click();
  // chrome.getTitle().then(function(title) {
  //   console.log(title);
  // });

  // chrome.quit();

  // chromedriver.kill("SIGINT");
}

setTimeout(startChrome, 5000);