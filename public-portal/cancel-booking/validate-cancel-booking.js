var pageObject = require('./cancel-booking-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');

describe('Validiting fields on cancel booking page',function(){

    var env = browser.params.server;
    var details = data.cancelBooking;

    var serverURL = data[env]["publicPortal"];
    
    var invalidClass = function(testCase,elem,keys,message,elementName,index){
        helper.sendKeysUsingElement(testCase,elem,keys,elementName,index);
        elem.getAttribute('value').then(function(value) {
            if(value[0]==keys) expect(elem.get(0).getAttribute('class')).toContain('ng-invalid',message);
            else expect(elem.get(0).getAttribute('class')).toContain('ng-valid',message);
          });
        elem.clear();
    }

    function findTicket(number,present=true){
        helper.sendKeysUsingElement("",pageObject.ticketNumber,number,'ticketNumber');
        helper.clickUsingElement("",pageObject.findTicketButton);
        expect(element(by.className('ticketImg')).isPresent()).toBe(present);
    }

    it('should invalidate empty ticket number',function(){
        // if(env=="dev") browser.get(serverURL+"#/"+details.url);
        browser.get(serverURL+details.url);
        invalidClass("",pageObject.ticketNumber,"","No error on empty ticket number",'ticket number');
    });

    it('should be able to find valid ticket',function(){ 
        findTicket(details.ticketNumber[0]);     
    });

    it('should invalidate email without @ symbol',function(){
        invalidClass("",pageObject.email,data.invalidEmail.noAtSign,"No error on Email if @ is missing",'email');
    });

    it('should invalidate email without no Dot',function(){
        invalidClass("",pageObject.email,data.invalidEmail.noDot,"No error on Email if dot is missing",'email');
    });

    it('should invalidate email with spaces',function(){
        invalidClass("",pageObject.email,data.invalidEmail.withSpaces,"No error on Email if has spaces",'email');
    });

    // it('should invalidate email exceeding max length',function(){
    //     invalidClass("",pageObject.email,data.invalidEmail.maxLength,"No error on Email if exceeds max length",'email');
    // });

    it('should invalidate contact number if has non numeric character(s)',function(){
        invalidClass("",pageObject.contactNo,details.contactNo+"a","No error on Contact Number if has non numeric character(s)",'contact number');
    });

});

