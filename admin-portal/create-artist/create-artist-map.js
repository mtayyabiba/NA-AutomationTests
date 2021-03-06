exports.map = { 
    firstName: element.all(by.css('[formcontrolname="firstName"]')) ,
    lastName: element.all(by.css('[formcontrolname="lastName"]')) ,
    zipCode: element.all(by.css('[formcontrolname="zipCode"]')) ,
    country: element.all(by.css('[formcontrolname="country"]')) ,
    city: element.all(by.css('[formcontrolname="city"]')) ,
    location: element.all(by.css('[formcontrolname="location"]')) ,
    address: element.all(by.css('[formcontrolname="address"]')) ,
    email: element.all(by.css('[formcontrolname="email"]')) ,
    countryCode: element.all(by.id('country-code')) ,
    contact: element.all(by.id('contact-no')) ,
    password: element.all(by.css('[formcontrolname="password"]')) ,
    confirmPassword: element.all(by.css('[formcontrolname="confirmPassword"]')) ,
    portfolioUrl: element.all(by.css('[formcontrolname="portfolioUrl"]')) ,
    studioBusiness: element.all(by.css('[formcontrolname="studioBusiness"]')),
    skills: element.all(by.css('[formcontrolname="skills"]')),
    ratingButton: element.all(by.className('star ng-star-inserted')),
    skillAddButton: element.all(by.className('addButton')),
    startTime: element.all(by.css("[formcontrolname='start_time']")) ,
    endTime: element.all(by.css("[formcontrolname='end_time']")) ,
    availDaysCheckbox : element.all(by.className('example-margin mat_checkbox mat-checkbox mat-primary ng-valid')),
    addSlot : element.all(by.className('ml-2 hoverPointer mat-icon notranslate material-icons mat-icon-no-color')) ,
    closeDropdown : element.all(by.className('cdk-overlay-container')),
    signupButton: element.all(by.cssContainingText('[class="mat-button-wrapper"]', 'Save')),

    searchInput : element.all(by.className('mat-input-element'))
}