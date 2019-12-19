var pageObject = require('./venue-signup-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');

var serverURL;

describe('Validiting fields on venue signup page',function(){

    var env = browser.params.server;
    var details = data.venueDetailsPublic;

    var invalidClass = function(testCase,elem,keys,message,elementName,index){
        helper.sendKeysUsingElement(testCase,elem,keys,elementName,index);
        elem.getAttribute('value').then(function(value) {
            if(value[0]==keys) expect(elem.get(0).getAttribute('class')).toContain('ng-invalid',message);
            else expect(elem.get(0).getAttribute('class')).toContain('ng-valid',message);
          });
        elem.clear();
    }

    serverURL = data[env]["publicPortal"];

    it('should invalidate email without @ symbol',function(){
        // if(env=="dev") browser.get(serverURL+"#/"+details.url);
        browser.get(serverURL+details.url);
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

    it('should invalidate password if length < min length',function(){
        invalidClass("",pageObject.password,data.invalidPassword.minLength,"No error on Password if length < min length",'password');
    });

    // it('should invalidate password exceeding max length',function(){
    //     invalidClass("",pageObject.password,data.invalidPassword.maxLength,"No error on Password if exceeds max length",'password');
    // });

    it('should invalidate password if does not contain atleast 1 number',function(){
        invalidClass("",pageObject.password,data.invalidPassword.noNumber,"No error on Password if does not contain atleast 1 number",'password');
    });

    it('should invalidate password if does not contain atleast 1 Upper case letter',function(){
        invalidClass("",pageObject.password,data.invalidPassword.noUppercase,"No error on Password if does not contain atleast 1 Upper case letter",'password');
    });  

    it('should invalidate Confirm Password if different from Password',function(){
        helper.sendKeysUsingElement("",pageObject.confirmPassword,details.textFields.password+"2",'confirm password');
        helper.sendKeysUsingElement("",pageObject.password,details.textFields.password,'password');
        expect(pageObject.confirmPassword.get(0).getAttribute('aria-invalid')).toBe('true');
    });

    it('should invalidate capacity if has non numeric character(s)',function(){
        invalidClass("",pageObject.capacity,details.textFields.capacity+"a","No error on Capacity if has non numeric character(s)",'capacity');
    });

    it('should invalidate contact number if has non numeric character(s)',function(){
        invalidClass("",pageObject.contact,details.textFields.contact+"a","No error on Contact Number if has non numeric character(s)",'contact number');
    });

    it('should validate password if strong',function(){
        helper.sendKeysUsingElement("",pageObject.password,details.textFields.password,'password');
        expect(pageObject.password.get(0).getAttribute('aria-invalid')).toBe('false');
    });  


});