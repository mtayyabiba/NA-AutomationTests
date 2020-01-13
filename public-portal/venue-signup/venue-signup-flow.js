var pageObject = require('./venue-signup-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');
var path = require('path');

describe('Entering details on VCP signup page',function(){
    var env = browser.params.server;
    var details = data.venueDetailsPublic;
    var serverURL = data[env]["publicPortal"];
    
    var selectMultipleDropdown = function (testDescp, elem, option,index=0) {
        helper.clickUsingElement(testDescp,elem,index);
        browser.driver.sleep(1000);
        for(var i of option){
            helper.clickUsingElement(testDescp,element.all(by.cssContainingText('[class="mat-option-text"]',i)));
        }
        browser.driver.sleep(1000);
    };

    it('should be able to register venue into system',function(){
        // if(env=="dev") browser.get(serverURL+"#/"+details.url);
        browser.get(serverURL+details.url);

        details.textFields.fullName = details.textFields.fullName +" "+data.time;
        details.textFields.venueName = details.textFields.venueName +" "+data.time;
        details.textFields.email = details.textFields.email.replace("id",data.time);
        for(var keys in  details.textFields){
            helper.sendKeysUsingElement("",pageObject[keys],details.textFields[keys],keys);
        }
        helper.sendKeysUsingElement("",pageObject['confirmPassword'],details.textFields['password'],'confirmPassword');
    });

    it('should be able to select venue details',function(){
        helper.selectSingleDropdown("",pageObject.countryCode,details.countryCode);
        helper.selectSingleDropdown("",pageObject.country,details.country);
        helper.selectSingleDropdown("",pageObject.category,details.category);
        helper.selectSingleDropdown("",pageObject.city,details.city);
        selectMultipleDropdown("",pageObject.facilities,details.facilities);  
        helper.clickUsingElement("",pageObject.closeDropdown);
    });

    it('should be able to select avail. time and days',function(){
        var availSlots = details.availability;
        for(i=0;i<availSlots.length;i++){
            helper.sendKeysUsingElement("",pageObject.startTime,availSlots[i][0],'startTime',i);
            helper.sendKeysUsingElement("",pageObject.endTime,availSlots[i][1],'endTime',i);
            for(var days of availSlots[i][2])   helper.clickUsingElement("",pageObject.availDaysCheckbox,days+7*i);
            if(i+1<availSlots.length) element(by.cssContainingText('[role="img"]', 'add_circle_outline')).click();
        }
    });

    it('should be able to select venue seat map',function(){
        helper.clickUsingElement("",pageObject.selectButton);
        browser.driver.sleep(2000);
        helper.clickUsingElement("",pageObject.seatMapbutton);  
        helper.clickUsingElement("",pageObject.mapSelectButton); 
    });

    it('should be able to upload venue image files',function(){
        helper.uploadFile("images/venue-images/",8,element.all(by.css('input[type="file"]')),0);        
        var venueElement = element.all(by.tagName('form'));
        for(var i=0;i<=4;i++){
            inputElement = venueElement.get(i).all(by.tagName('input'));
            helper.uploadFile("images/venue-images/",8,inputElement,0);
        }
    });

    // it('should be able to submit venue details into system',function(){
    //     helper.clickUsingElement("",pageObject.signupButton);
    //     expect(browser.getCurrentUrl()).toContain("success");
        
    // });
});