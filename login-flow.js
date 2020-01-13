var loginObject = require('./login-page-map.js').map;
var data = require('./data.json');
var helper = require('./helper.js');

var emailAddElem = loginObject.adminUserName;
var passwordElem = loginObject.adminPassword;
var env = browser.params.server;
var serverURL = data[env].adminPortal;

describe('Validiting fields on login page',function(){
    
    var invalidClass = function(testCase,elem,keys,message,elementName,index){
        helper.sendKeysUsingElement(testCase,elem,keys,elementName,index);
        expect(elem.get(0).getAttribute('class')).toContain('ng-invalid',message);
        elem.clear();
    }

    it('should invalidate email without @ symbol',function(){
        browser.get(serverURL);
        invalidClass("",emailAddElem,data.invalidEmail.noAtSign,'Email throws no error on missing @ symbol');
    });

    it('should invalidate email with spaces',function(){
        invalidClass("",emailAddElem,data.invalidEmail.withSpaces,'Email throws no error if contains spaces');
    });

    it('should invalidate email with wrong domain',function(){
        invalidClass("",emailAddElem,data.invalidEmail.noDot,'Email throws no error if contains wrong domain');
    });

    // it('should invalidate email which crosses max length',function(){
    //     invalidClass("",emailAddElem,data.invalidEmail.maxLength,'Email throws no error if it crosses max length limit');
    // });

    it('should invalidate password with value < min length',function(){
        invalidClass("",passwordElem,data.invalidPassword.minLength,'Password throws no error if value < min length');
    });

    it('should invalidate password with value < min length',function(){
        invalidClass("",passwordElem,data.invalidPassword.maxLength,'Password throws no error if it crosses max length limit');
    });
});

describe('Checking login page flow',function(){

    it('should not be able to login with incorrect email',function(){
        helper.loginFunc(emailAddElem, data[env]["adminEmail"]+"aa",passwordElem, data[env]["adminPassword"],loginObject.loginButton,serverURL+"#/login");    
    });

    it('should not be able to login with incorrect password',function(){
        helper.loginFunc(emailAddElem,data[env]["adminEmail"],passwordElem,data[env]["adminPassword"]+"aa",loginObject.loginButton,serverURL+"#/login");      
    });

    it('should be able to login',function(){
        helper.loginFunc(emailAddElem,data[env]["adminEmail"],passwordElem,data[env]["adminPassword"],loginObject.loginButton,serverURL+"#/dashboard");       
    });
});