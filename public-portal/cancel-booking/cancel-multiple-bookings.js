var pageObject = require('./cancel-booking-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');

describe('Entering details to cancel multiple tickets',function(){
    var env = browser.params.server;
    var details = data.cancelBooking;

    var serverURL = data[env]["publicPortal"];

    it('should be able to cancel after finding a ticket',function(){
        for(var tickets of details.ticketNumber){
            // if(env=="dev") browser.get(serverURL+"#/"+details.url);
            browser.get(serverURL+details.url);

            helper.sendKeysUsingElement("",pageObject.ticketNumber,tickets,'ticketNumber');
            helper.clickUsingElement("",pageObject.findTicketButton);
            helper.sendKeysUsingElement("",pageObject.email,details.email,'email address');
            helper.sendKeysUsingElement("",pageObject.contact,details.contact,'contact number');
            helper.selectSingleDropdown("",pageObject.reason,details.reason);
            helper.clickUsingElement("",pageObject.cancelButton);
            expect(browser.getCurrentUrl()).toContain('cancel/success');
        }
    });



});