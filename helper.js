//Genrel Methods for apps
//Click methods
var path = require('path');

exports.clickByCSSContainingText = function(testDescp,selector,text,index){
    index = index || 0;
    element.all(by.cssContainingText(selector, text)).get(index).click().then(function(){
        console.log('Clicked on element having selector '+selector+' and text '+text+' for '+testDescp);
    });
};
exports.clickUsingID = function (testDescp, selector, index) {
    index = index || 0;
    element.all(by.id(selector)).get(index).click().then(function () {
        console.log("Clicking on " + selector + " for " + testDescp);
    });

};
exports.clickUsingTagName = function (testDescp, selector, index) {
    index = index || 0;
    element.all(by.tagName(selector)).get(index).click().then(function () {
        console.log("Clicking on " + selector + " for " + testDescp);
    });

};
exports.clickByCSS = function (testDescp, selector, index) {
    index = index || 0;
    element.all(by.css(selector)).click().then(function () {
        console.log('Clicking ' + selector + ' for ' + testDescp);
    });
};
exports.clickUsingModel = function (testDescp, selector, index) {
    index = index || 0;
    element.all(by.model(selector)).get(index).click().then(function () {
        console.log("Clicking on " + selector + " for " + testDescp);
    });

};
exports.clickByName = function (testDescp, name, index) {
    index = index || 0;
    element.all(by.name(name)).get(index).click().then(function () {
        console.log('Clicking on element having name: ' + name + ' for ' + testDescp);
    });
}

exports.clickUsingJS = function (testDescp, selector) {
    browser.executeScript(function (selector) {
        document.getElementById(selector).click();
    }, selector).then(function () {
        console.log("Clicking On " + selector + ' for' + testDescp);
    });
};

exports.clickUsingJSName = function (testDescp, selector) {
    browser.executeScript(function (selector) {
        document.getElementsByName(selector).click();
    }, selector).then(function () {
        console.log("Clicking On " + selector + ' for' + testDescp);
    });
};

exports.clickUsingJsCSS = function (testDescp, selector) {
    browser.executeScript(function (selector) {
        var elm = document.querySelector(selector);
        elm.click();
    }, selector).then(function () {
        console.log("Clicking On " + selector + ' for' + testDescp);
    });
};
exports.clickUsingJsCSSindex = function (testDescp, selector,index) {
    index = index || 0;
    browser.executeScript(function (selector,number) {
        var elm = document.querySelectorAll(selector);
        elm[number].click();
    }, selector,index).then(function () {
        console.log("Clicking On " + selector + ' for' + testDescp);
    });
};
exports.clickUsingClassNameJs = function (testDescp, selector, index) {
    browser.executeScript(function (selector, index) {
        var elm = document.getElementsByClassName(selector);
        elm[index].click();
    }, selector, index).then(function () {
        console.log("Clicking On " + selector + ' for' + testDescp);
    });
};
exports.clickUsingClass = function (testDescp, selector, index) {
    index = index || 0;
    element.all(by.className(selector)).get(index).click().then(function () {
        console.log('Clicking ' + selector + ' for ' + testDescp);
    });
};
exports.clickUsingElement = function (testDescp, element, index=0) {
    element.get(index).click().then(function () {
        console.log('Clicking ' + element+ ' for ' + testDescp);
    });
};
exports.clickByButtonTxt = function (testDescp, selector, index) {
    index = index || 0;
    element.all(by.buttonText(selector)).get(index).click().then(function () {
        console.log("Clicking on " + selector + " for " + testDescp);
    });
};
exports.getTextByID = function (testDescp, selector) {
    return element(by.id(selector)).getText();
};
//sending keys methods
exports.sendKeysByModel = function (testDescp, model, keys, index) {
    index = index || 0;
    element.all(by.model(model)).get(index).sendKeys(keys).then(function () {
        console.log('Sending keys '+keys+' to ' + model + ' for ' + testDescp);
    });

};
exports.sendKeysById = function (testDescp, id, keys, index) {
    element.all(by.id(id)).sendKeys(keys).then(function () {
        console.log('Sending ' + keys + ' to ' + id + ' for ' + testDescp);
    });
};
exports.sendKeysByName = function (testDescp, name, keys) {
    element(by.name(name)).sendKeys(keys).then(function () {
        console.log('Sending Keys '+keys+' to ' + name + ' for ' + testDescp);
    });
};
exports.sendKeysUsingJS = function (testDescp, selector, keys) {
    browser.executeScript(function (selector, keys) {
        document.getElementById(selector).value = keys;
    }, selector,keys).then(function () {
        console.log("sending keys to " + selector + ' for' + testDescp);
    });
};
exports.sendKeysBycss = function (testDescp, css, value, keys) {
    element(by.cssContainingText(css, value)).sendKeys(keys).then(function () {
        console.log('Sending Keys '+keys+' to ' + css +' containing text '+value+ ' for ' + testDescp);
    });;

};
exports.sendKeysByCSS = function(testDescp,selector,keys,index){
    index = index || 0;
    element.all(by.css(selector)).get(index).sendKeys(keys).then(function(){
        console.log('Sent '+keys+' to '+selector+' for '+testDescp);
    });
};
exports.sendKeysUsingElement = function(testDescp,element,keys,elementName,index=0){
    element.get(index).sendKeys(keys).then(function(){
        console.log('Sent '+keys+' to '+elementName+' for '+testDescp);
    });
};


exports.clearByModel = function (testDescp, model) {
    element(by.model(model)).clear().then(function () {
        console.log('Clearing model ' + model + ' for ' + testDescp)
    });
};
exports.clearByName = function (testDescp, name) {
    element(by.name(name)).clear().then(function () {
        console.log('Clearing field ' + name);
    });
};
exports.clearByID = function (testDescp, id) {
    element(by.id(id)).clear().then(function () {
        console.log('Clearing field ' + id);
    });
};
exports.clearByCSS = function(testdescp,css){
    element(by.css(css)).clear().then(function () {
        console.log('Clearing field ' + css);
    });
};
exports.clearByCSSIndex = function(testdescp,selector,index){
    index = index || 0;
    element.all(by.css(selector)).get(index).clear().then(function(){
        console.log('Clearing '+selector+' for '+testdescp)
    });
}
exports.checkIfTabVisible = function (testDescp, tabFor, index) {
    var elm;
    elm = element.all(by.repeater('tab in parentCtrl.authService.userMenu')).get(index);
    elm.click().then(function () {
        console.log('Checkign tab for ' + tabFor + ' for test ' + testDescp);
    });


};
//list methods
exports.selectElementFromListUsingId = function (testDescp, id, repeater, index) {
    index = index || 0;
    element(by.id(id)).click();
    element.all(by.repeater(repeater)).get(index).click().then(function () {
        console.log('Clicking element from list for ' + testDescp);
    });

};
exports.selectElementFromListUsingCSS = function (testDescp, css, repeater, index) {
    index = index || 0;
    element(by.css(css)).click();
    element.all(by.repeater(repeater)).get(index).click().then(function () {
        console.log('Clicking element from list for ' + testDescp);
    });

};
exports.selectElementFromList = function (testDescp, repeater, index) {
    index = index || 0;
    element.all(by.repeater(repeater)).get(index).click().then(function () {
        console.log('Clicking element from list for ' + testDescp);
    });

};





//Login
exports.login = function (testDescp, url, username, password) {
    console.log(testDescp);
    console.log(username,' ',password);
    browser.get(url);
           element(by.xpath('*//input[@id="emailaddress"]')).sendKeys(username);
           element(by.xpath('*//input[@id="password"]')).sendKeys(password);
           element(by.xpath('//button[@type="submit"]')).click();

    browser.sleep(config.timeouts.mid_timeout);
   
};

exports.addComma_Decimal_to_Price = function (Total_price){
    var Total_price_withcomma = Number(parseFloat(Total_price).toFixed(2)).toLocaleString('en', {minimumFractionDigits: 2});
    return Total_price_withcomma;
}



exports.getElementText=function(elementLocator)
{ 
    elementLocator.getText().then(function(text)
    { 
    console.log("##########Text is ################"+text);   //it prints correct text
    o_n = text;
    return o_n;
    }
)};
   
exports.loginFunc = function(emailAddElem,emailAdd,passwordElem,password,loginElement,urlEnd){
    browser.getCurrentUrl().then(function(url){
        if(url.indexOf("login") >= 0 ){
            emailAddElem.clear();passwordElem.clear();
            emailAddElem.get(0).sendKeys(emailAdd);
            passwordElem.get(0).sendKeys(password);
            loginElement.get(0).click();
            expect(browser.getCurrentUrl()).toEqual(urlEnd); 
        }
    });
}

exports.selectSingleDropdown = function (testDescp,elem, option,index=0) {
    elem.get(index).click();
    browser.driver.sleep(1000);
    if(isNaN(option)){
        element.all(by.cssContainingText("[class='mat-option-text']", option)).get(0).click();
    }else{
        element.all(by.className('mat-option')).then(function(options){
            options[option].click();
        });
    }
}

exports.selectSkill = function (testDescp, elem, option,rating,ratingButton,skillAddButton,index=0) {
    for(var i=0; i<option.length;i++){
        elem.get(index).click();
        browser.driver.sleep(1000);
        element.all(by.cssContainingText("[class='mat-option-text']", option[i])).get(0).click();
        ratingButton.get(rating[i]-1).click();
        skillAddButton.get(0).click();
    }
}

exports.uploadFile = function(filePath,totalFiles,fileElement,index,type='.png'){
    var fileToUpload = filePath+(Math.floor(Math.random() * totalFiles) + 1)  +type;
    absolutePath = path.resolve(__dirname, fileToUpload);
    fileElement.get(index).sendKeys(absolutePath);
}
// exports.setCheckBox=function setCheckBoxTo(locator, value){
//     var checkbox = element(locator);
//     checkbox.is.then(function(selected){
//         if(selected !== value){
//             checkbox.click();
//         }
//     }
    
//     )};