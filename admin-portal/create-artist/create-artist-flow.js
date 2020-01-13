var pageObject = require('./create-artist-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');
var loginObject = require('../../login-page-map.js').map;

describe('Entering details on create artist - admin portal page',function(){
    var env = browser.params.server;
    var details = data.artistDetailsAdmin;
    var serverURL = data[env]["adminPortal"];

    it('should be able to enter artist details into system',function(){
        browser.get(serverURL);
        //login if not logged in
        helper.loginFunc(loginObject.adminUserName,data[env]["adminEmail"],loginObject.adminPassword,data[env]["adminPassword"],loginObject.loginButton,serverURL+"#/dashboard"); 

        // helper.clickUsingElement("",element.all(by.cssContainingText('[class="navigation-text"]', 'Artist Management')));
        browser.get(serverURL+"#/artist/create");

        details.textFields.firstName = details.textFields.firstName +" "+data.time;
        details.textFields.email = details.textFields.email.replace("id",data.time);
        for(var keys in  details.textFields){
            helper.sendKeysUsingElement("",pageObject[keys],details.textFields[keys],keys);
        }
        helper.sendKeysUsingElement("",pageObject['confirmPassword'],details.textFields['password'],'confirmPassword');       
    });

    it('should be able to select artist details',function(){
        helper.selectSingleDropdown("",pageObject.countryCode,details.countryCode);
        helper.selectSingleDropdown("",pageObject.country,details.country);
        helper.selectSingleDropdown("",pageObject.city,details.city);
        helper.selectSingleDropdown("",pageObject.location,details.location);
        helper.selectSkill("",pageObject.skills,details.skills[0],details.skills[1],pageObject.ratingButton,pageObject.skillAddButton);        
    });

    it('should be able to select artist avail. time and days',function(){
        var availSlots = details.availability;
        for(i=0;i<availSlots.length;i++){
            helper.sendKeysUsingElement("",pageObject.startTime,availSlots[i][0],'startTime',i);
            helper.sendKeysUsingElement("",pageObject.endTime,availSlots[i][1],'endTime',i);
            for(var days of availSlots[i][2])   helper.clickUsingElement("",pageObject.availDaysCheckbox,days+7*i);
            if(i+1<availSlots.length) element(by.cssContainingText('[role="img"]', 'add_circle_outline')).click();
        }        
    });

    it('should be able to upload artist image',function(){
        helper.uploadFile('images/artist-images/',3,element.all(by.css('input[type="file"]')),0);       
    });

    // it('should be able to submit artist details into system',function(){
    //     helper.clickUsingElement("",pageObject.signupButton);
    //     expect(browser.getCurrentUrl()).toContain("/artist/list");
    // });

    // it('should be able to find created artist by name',function(){
    //     browser.get(serverURL+"#/artist/list");
    //     helper.sendKeysUsingElement("",pageObject.searchInput,details.textFields.firstName,"Search input");
    //     browser.driver.sleep(2000);
    //     element.all(by.className('k-pager-info')).getText().then(function (text) {
    //         expect(text[0]).toContain('1 items',"Expected exact 1 artist to be returned in search results.");
    //     })
    // });
});