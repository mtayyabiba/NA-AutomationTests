var d = new Date();
var time =d.getTime();
var data = require('./data.json');
data["time"] = time;
// data["time"] = "unique";

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [
        // 'login-flow.js',
        // 'admin-portal/create-artist/validate-create-artist.js',
        // 'admin-portal/create-artist/create-artist-flow.js',
        // 'admin-portal/create-venue/validate-create-venue.js',
        // 'admin-portal/create-venue/create-venue-flow.js',
        // 'admin-portal/submit-painting/validate-submit-painting.js',
        // 'admin-portal/submit-painting/submit-painting-flow.js',
        'admin-portal/create-event/create-event-flow.js',

        // 'public-portal/venue-signup/validate-venue-signup.js',
        // 'public-portal/venue-signup/venue-signup-flow.js',
        // 'public-portal/artist-signup/validate-artist-signup.js',
        // 'public-portal/artist-signup/artist-signup-flow.js',  
        // 'public-portal/customer-signup/validate-customer-signup.js',  
        // 'public-portal/customer-signup/customer-signup-flow.js',  
        // 'public-portal/cancel-booking/validate-cancel-booking.js', 
        // 'public-portal/cancel-booking/cancel-booking-flow.js',  

        // 'public-portal/cancel-booking/cancel-multiple-bookings.js' ,  
    ],

    framework: 'jasmine2' ,
    getPageTimeout: 30000,
    allScriptsTimeout: 30000,
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--window-size=1400,900']
        }
    },
    onPrepare: function() {
        if(browser.params.save){
            var jasmineReporters = require('./node_modules/jasmine-reporters');
            jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({savePath: './reports/'+time}, true, true,''));
        }
    },
    onComplete: function() {
        if(browser.params.save){
            var browserName, browserVersion;
            var capsPromise = browser.getCapabilities();
        
            capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
        
            var HTMLReport = require('./node_modules/protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './reports/'+time,
                outputFilename: 'htmlReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('./reports/'+time+'/junitresults.xml', testConfig);
            });
        }
    }
};