// An example configuration file.
exports.config = {
  directConnect: true, //do not need to start selenium file separatly

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    
    chromeOptions: 
     { 
        args: ['--start-maximized'] 
     },
  },

  baseUrl: 'https://www.epam.com/',
  framework: 'jasmine',

  specs: ['C:/Users/1/Desktop/EPAM_JS/Kandziuba_EPAM_ProractorFramework/spec/investorsPageElementsTests.js', 'C:/Users/1/Desktop/EPAM_JS/Kandziuba_EPAM_ProractorFramework/spec/contactFormTests.js', 
  'C:/Users/1/Desktop/EPAM_JS/Kandziuba_EPAM_ProractorFramework/spec/searchTests.js'], 

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
