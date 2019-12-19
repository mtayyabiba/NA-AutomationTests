var pageObject = require('./artist-signup-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');
var path = require('path');

describe('Entering details on artist signup page',function(){
    var env = browser.params.server;
    var details = data.artistDetailsPublic;
    var serverURL = data[env]["publicPortal"];

    it('should be able to register artist into system',function(){
        // if(env=="dev") browser.get(serverURL+"#/"+details.url);
        browser.get(serverURL+details.url);

        details.textFields.firstName = details.textFields.firstName +" "+data.time;
        details.textFields.email = details.textFields.email.replace("id",data.time);
        for(var keys in  details.textFields){
            helper.sendKeysUsingElement("",pageObject[keys],details.textFields[keys],keys);
        }
        helper.sendKeysUsingElement("",pageObject['confirmPassword'],details.textFields['password'],'confirmPassword');
        
        helper.selectSingleDropdown("",pageObject.country,details.country);
        helper.selectSingleDropdown("",pageObject.city,details.city);
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
    //     expect(browser.getCurrentUrl()).toContain("success");
        
    // });
});