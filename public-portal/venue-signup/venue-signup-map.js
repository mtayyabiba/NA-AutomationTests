exports.map = { 
    venueName: element.all(by.id('venue-name')) ,
    category: element.all(by.id('category'))  ,
    capacity: element.all(by.id('capacity')),
    location: element.all(by.id('location'))  ,
    zipCode: element.all(by.id('zip-code')) ,
    country: element.all(by.id('country'))  ,
    city: element.all(by.id('city')) ,
    address: element.all(by.id('address'))  ,
    facilities: element.all(by.id('facilities')) ,
    fullName: element.all(by.id('full-name'))  ,
    email: element.all(by.id('email'))  ,
    designation: element.all(by.id('designation')) ,
    contact: element.all(by.id('contact-number'))  ,
    password: element.all(by.id('password'))  ,
    confirmPassword: element.all(by.css("[formcontrolname='Confirm_Password']"))  ,
    startTime: element.all(by.css("[formcontrolname='start_time']"))  ,
    endTime: element.all(by.css("[formcontrolname='end_time']"))  ,
    availDaysCheckbox : element.all(by.className('example-margin mat_checkbox mat-checkbox mat-primary ng-valid')),
    addSlot : element.all(by.className('ml-2 hoverPointer mat-icon notranslate material-icons mat-icon-no-color')),
    closeDropdown : element.all(by.className('cdk-overlay-container')),
    selectButton: element.all(by.cssContainingText('[class="mat-button-wrapper"]', 'Select')),
    seatMapbutton: element.all(by.className('mat-tab-label-content')),
    mapSelectButton : element.all(by.xpath('/html/body/div[2]/div[2]/div/mat-dialog-container/nat-seat-maps-dialog/mat-dialog-content/div/div/div/mat-tab-group/div/mat-tab-body[1]/div/div[2]/button/span')),//all(by.tagName('button')),
    signupButton: element.all(by.css('[type="submit"]'))
}