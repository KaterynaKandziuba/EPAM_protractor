import { Config } from "protractor";

export const config: Config =  {
    framework: 'jasmine',
    seleniumAddress: "http://localhost:4444/wd/hub",
    // SELENIUM_PROMISE_MANAGER: false,
    directConnect: true,
    noGlobals: false,
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
    ]
};