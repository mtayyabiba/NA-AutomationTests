var pageObject = require('./create-event-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');
var loginObject = require('../../login-page-map.js').map;

describe('Entering details on create venue page',function(){
    var env = browser.params.server;
    var details = data.eventDetailsAdmin;
    var serverURL = data[env]["adminPortal"];

    var getNextDate = function(dayIndex){
        var d = new Date();
        d.setDate(d.getDate() + ((7-d.getDay())%7+dayIndex) % 7);
        // (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear()
        return d.toLocaleDateString('en-US');
    }
    
    it('should be able to enter/select event details',function(){
        browser.get(serverURL);
        //login if not logged in
        helper.loginFunc(loginObject.adminUserName,data[env]["adminEmail"],loginObject.adminPassword,data[env]["adminPassword"],loginObject.loginButton,serverURL+"#/dashboard"); 

        // helper.clickUsingElement("",element.all(by.cssContainingText('[class="navigation-text"]', 'Venue Management')));
        browser.get(serverURL+"#/event/create");
        
        var eventTime = data.artistDetailsAdmin.availability[0][0].replace("am"," am").replace("pm"," pm");
        var artistName = data.artistDetailsAdmin.textFields.firstName + " " +data.artistDetailsAdmin.textFields.lastName;
        var venueName = data.venueDetailsAdmin.textFields.venueName;
        var paintingName = data.submitPaintingAdmin.textFields.paintingName;
        var eventLocation = data.artistDetailsAdmin.location;

        helper.sendKeysUsingElement("",pageObject.name,details.name+" "+data.time,"Event Name");
        helper.sendKeysUsingElement("",pageObject.date,getNextDate(2),"Event Date");
        helper.sendKeysUsingElement("",pageObject.startTime,eventTime,"Event Start time");
        helper.sendKeysUsingElement("",pageObject.duration,details.duration,"Event Duration");
        helper.sendKeysUsingElement("",pageObject.totalSeats,details.totalSeats,"Event total seats");
        helper.sendKeysUsingElement("",pageObject.description,details.description,"Event Description");
        helper.selectSingleDropdown("",pageObject.category,details.category);
        helper.selectSingleDropdown("",pageObject.ageGroup,details.ageGroup);
        helper.selectSingleDropdown("",pageObject.location,eventLocation);
        
    });


});