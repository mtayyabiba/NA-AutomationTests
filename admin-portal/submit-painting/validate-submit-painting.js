var pageObject = require('./submit-painting-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');
var loginObject = require('../../login-page-map.js').map;

describe('Validiting fields on submit painting page',function(){

    var env = browser.params.server;
    var details = data.submitPaintingAdmin;
    var serverURL = data[env]["adminPortal"];

    var invalidClass = function(testCase,elem,keys,message,elementName,index){
        helper.sendKeysUsingElement(testCase,elem,keys,elementName,index);
        elem.getAttribute('value').then(function(value) {
            if(value[0]==keys) expect(elem.get(0).getAttribute('class')).toContain('ng-invalid',message);
            else expect(elem.get(0).getAttribute('class')).toContain('ng-valid',message);
          });
        elem.clear();
    }

    
    it('should be able to direct to submit painting page',function(){
        browser.get(serverURL);
        //login if not logged in
        helper.loginFunc(loginObject.adminUserName,data[env]["adminEmail"],loginObject.adminPassword,data[env]["adminPassword"],loginObject.loginButton,serverURL+"#/dashboard"); 
        
        // helper.clickUsingElement("",element.all(by.cssContainingText('[class="navigation-text"]', 'Gallery')));
        browser.get(serverURL+"#/painting/list");
        helper.clickUsingElement("",element.all(by.cssContainingText('[class="mat-button-wrapper"]', 'Add Painting')));
        expect(browser.getCurrentUrl()).toEqual(serverURL+"#/painting/submit");
    });

    it('should invalidate empty painting name field',function(){
        invalidClass("",pageObject.paintingName,"","No error on painting name if empty",'painting name');
    });

    it('should invalidate empty inspired from field',function(){
        invalidClass("",pageObject.inspiredFrom,"","No error on inspired from if empty",'inspired from');
    });

    it('should invalidate empty cost field',function(){
        invalidClass("",pageObject.cost,"","No error on cost if empty",'cost');
    });

    it('should invalidate cost if has non numeric character(s)',function(){
        invalidClass("",pageObject.cost,details.textFields.cost+"a","No error on cost if has non numeric character(s)",'cost');
    });


});