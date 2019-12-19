var pageObject = require('./cancel-booking-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');

describe('Entering details on cancel booking page',function(){
    var env = browser.params.server;
    var details = data.cancelBooking;

    var serverURL = data[env]["publicPortal"];

    function findTicket(number,present=true){
        helper.sendKeysUsingElement("",pageObject.ticketNumber,number,'ticketNumber');
        helper.clickUsingElement("",pageObject.findTicketButton);
        expect(element(by.className('ticketImg')).isPresent()).toBe(present);
    }

    it('should not be able to find invalid ticket',function(){
        // if(env=="dev") browser.get(serverURL+"#/"+details.url);
        browser.get(serverURL+details.url);
        findTicket(details.ticketNumber[0]+"invalid",false);        
    });

    it('should be able to find valid ticket',function(){ 
        pageObject.ticketNumber.clear();
        findTicket(details.ticketNumber[0]);     
    });

    it('should be able to enter cancellation details',function(){
        helper.sendKeysUsingElement("",pageObject.email,details.email,'email address');
        helper.sendKeysUsingElement("",pageObject.countryCode,details.countryCode,'country code');
        helper.sendKeysUsingElement("",pageObject.contactNo,details.contactNo,'contact number');
        helper.selectSingleDropdown("",pageObject.reason,details.reason);
    });

    // it('should be able to cancel a valid ticket',function(){ 
    //     helper.clickUsingElement("",pageObject.cancelButton) ;
    //     expect(browser.getCurrentUrl()).toContain("success");
    // });

    it('should be able to find coupon code on cancel success page',function(){ 
        var couponCode;
        //uncomment below line if cancel spec is commented
        browser.get("http://172.17.41.33:6070/cancel/success/86IPO4");
        
        browser.getCurrentUrl().then(function(url){
            couponCode = url.split("success/")[1];
            console.log("Generated coupon code is "+couponCode);
            expect(element(by.cssContainingText('mat-card', couponCode)).isPresent()).toBe(true);
        });
    });

});