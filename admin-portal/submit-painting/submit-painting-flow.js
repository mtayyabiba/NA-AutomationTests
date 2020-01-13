var pageObject = require('./submit-painting-map.js').map;
var data = require('../../data.json');
var helper = require('../../helper.js');
var loginObject = require('../../login-page-map.js').map;

var env = browser.params.server;
var details = data.submitPaintingAdmin;
var serverURL = data[env]["adminPortal"];

describe('Entering details on submit painting page',function(){

    it('should be able to enter details on submit painting page',function(){
        browser.get(serverURL);
        //login if not logged in
        helper.loginFunc(loginObject.adminUserName,data[env]["adminEmail"],loginObject.adminPassword,data[env]["adminPassword"],loginObject.loginButton,serverURL+"#/dashboard");
        // helper.clickUsingElement("",element.all(by.cssContainingText('[class="navigation-text"]', 'Gallery')));
        browser.get(serverURL+"#/painting/list");
        helper.clickUsingElement("",element.all(by.cssContainingText('[class="mat-button-wrapper"]', 'Add Painting')));

        details.textFields.paintingName = details.textFields.paintingName+ " "+data.time;
        for(var keys in  details.textFields){
            helper.sendKeysUsingElement("",pageObject[keys],details.textFields[keys],keys);
        }
        
        helper.selectSingleDropdown("",pageObject.paintingType,details.paintingType);
        details.artistId = data.artistDetailsAdmin.textFields.firstName + " " +data.artistDetailsAdmin.textFields.lastName;
        helper.selectSingleDropdown("",pageObject.artistId,0);//details.artistId);
        helper.clickUsingElement("",pageObject.difficultyLevel,details.difficultyLevel);//diff level index starts from 0
    });

    it('should be able to upload image on submit painting page',function(){
        helper.uploadFile('images/paintings/',6,pageObject.uploadButton,0);
    });
    
    it('should be able to upload video tutorial on submit painting page',function(){
        helper.uploadFile('paintings-videos/',3,pageObject.uploadButton,1,'.mp4');
    });

    // it('should be able to submit the painting',function(){
    //     helper.clickUsingElement("",pageObject.submitButton);
    //     browser.driver.sleep(2000);
    //     expect(browser.getCurrentUrl()).toContain("/painting/list");
    // });

});


// describe('Editing details on edit painting page',function(){
//     var paintingNameVal = details.textFields.paintingName;

//     it('should be able to find submitted painting',function(){
//         browser.get(serverURL+"#/painting/list");
//         helper.sendKeysUsingElement("",pageObject.searchInput,paintingNameVal+" "+data.time,"Search input");
//         browser.driver.sleep(2000);
//         expect(element.all(by.className('mat-card-image1')).count()).toBe(1);
//     });

//     it('should be able to edit painting details',function(){
//         //go to edit painting page
//         helper.clickUsingElement("",element.all(by.className('mat-card-image1')));

//         helper.sendKeysUsingElement("",pageObject.inspiredFrom,10+details.textFields.inspiredFrom,"inspired from");
//         helper.sendKeysUsingElement("",pageObject.cost,10+details.textFields.cost,"cost");

//         helper.selectSingleDropdown("",pageObject.paintingType,details.paintingType);
//         helper.selectSingleDropdown("",pageObject.artistId,1);//(details.artistId+1));
//         helper.clickUsingElement("",pageObject.difficultyLevel,((details.difficultyLevel+1)%5)); //increasing difficulty level by 1        
//     });

//     it('should be able to edit image on edit painting page',function(){
//         helper.uploadFile('images/paintings/',5,element.all(by.css('input[type="file"]')),0);
//     });

//     it('should be able to save edited image',function(){
//         helper.clickUsingElement("",pageObject.saveButton);
//         expect(browser.getCurrentUrl()).toContain("/painting/list");
//     });

//     it('should be able to find edited painting',function(){
//         helper.sendKeysUsingElement("",pageObject.searchInput,10+paintingNameVal+" "+data.time,"Search input");
//         browser.driver.sleep(2000);
//         expect(element.all(by.className('mat-card-image1')).count()).toBe(1);
//     });
// });