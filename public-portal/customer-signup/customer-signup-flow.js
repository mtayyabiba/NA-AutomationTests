var pageObject = require('./customer-signup-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');

describe('Entering details on artist signup page',function(){
    var env = browser.params.server;
    var details = data.customerDetails;
    var serverURL = data[env]["publicPortal"];

    it('should be able to enter customer details',function(){
        // if(env=="dev") browser.get(serverURL+"#/"+details.url);
        browser.get(serverURL);
        helper.clickUsingElement("",pageObject.signinLink);
        helper.clickUsingElement("",pageObject.signupLink);

        details.lastName = details.lastName.replace("Test",data.time);
        details.email = details.email.replace("id",data.time);
        for(var keys in  details){
            helper.sendKeysUsingElement("",pageObject[keys],details[keys],keys);
        }
        helper.sendKeysUsingElement("",pageObject['confirmPassword'],details['password'],'confirmPassword');
    });

    // it('should be able to sign up the customer',function(){
    //     helper.clickUsingElement("",pageObject.signupButton);
    //     expect(browser.getCurrentUrl()).toContain("success");
        
    // });
//customer.1575439755232@mailinator.com
    it('should be able to signin the customer',function(){
        browser.get(serverURL);
        helper.clickUsingElement("",pageObject.signinLink);
        browser.driver.sleep(2000);
        helper.sendKeysUsingElement("",pageObject.username,"h.tayyab.m@gmail.com","Username / email address"); 
        helper.sendKeysUsingElement("",pageObject.signinPassword,"1234@Abb","password for signin"); 
        helper.clickUsingElement("",pageObject.signinButton);
        expect(pageObject.accountButton.isPresent()).toBe(true);
    });

    it('should be able to edit/update customer details',function(){
        helper.clickUsingElement("",pageObject.accountButton);
        helper.clickUsingElement("",pageObject.profileButton);
        helper.clickUsingElement("",pageObject.profileTab,5);
        browser.driver.sleep(2000);
        helper.clickUsingElement("",pageObject.editButton);
        helper.selectSingleDropdown("",pageObject.countryDropdown,data.customerEdits.country);
        helper.selectSingleDropdown("",pageObject.stateDropdown,data.customerEdits.state);
        helper.selectSingleDropdown("",pageObject.cityDropdown,data.customerEdits.city);
    });
});