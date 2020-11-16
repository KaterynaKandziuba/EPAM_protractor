// import { Config } from "protractor";
const tsNode = require('ts-node');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: "http://localhost:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    directConnect: true,
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: ['--start-maximized']
        }
    },

    baseUrl: 'https://www.epam.com/',
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    specs: [
        "C:/Users/1/Desktop/EPAM_JS/Kandziuba_EPAM_ProractorFramework/spec/contactFormTests.ts",
    ],

    async onPrepare() {
        tsNode.register({
          project: './tsconfig.json',
        });
      },
};