const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
const reporter = require("cucumber-html-reporter");

defineSupportCode(function({ registerHandler }) {
  registerHandler("AfterFeatures", function(event, callback) {
    try {
      var options = {
        theme: "bootstrap",
        jsonFile: "./reports/cucumber.json",
        output: './reports/json_result/cucumber_report.html',
        //screenshotsDirectory: './reports/screenshots/',
        storeScreenshots: false,
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
          "App Version": "1.0"
       }
     };
     reporter.generate(options);
    } catch (e) {
      console.log(
        "Report generation is not possible with the following message:"
      );
      console.log(e);
    }

    client.end();
    callback();
  });
});
