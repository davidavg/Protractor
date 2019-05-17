exports.config = {

  /**
   * Selenium Server - If you installed protractor and updated the webdriver-manager
   * then when you execute a test using protractor, by default, it will initiate a a server with a default port (this changes in each excution)
   * So initiating and specifying your own selenium server is optional, unless you want to execute through a specific port, else you can ignore this line 
   */

  //seleniumAddress: 'http://localhost:4444/wd/hub,
  
  /**
   * Framework to execute - This line specify the testing framework you will use.
   * It must be something compatible with nodejs... so basically a js framework.
   * 
   * if you not specify a testing framework, protractor will use Jasmine which is the default value.
   */

  //framework: 'mocha', 
  
  /**
   * Specs - This indicates the location of your test cases' file.
   * 
   * You can indicate a relative path taking as starting point your project's folder location
   */
  specs: ['./test/protractor_test.js'],


  capabilities: {
    'browserName': 'chrome' //Indicate the browser you want to use. If this is not indicate 'chrome' will be used as default.
  }
};