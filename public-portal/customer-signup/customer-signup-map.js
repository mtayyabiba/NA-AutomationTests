exports.map = { 
    signinLink: element.all(by.xpath("//a[contains(text(),'Sign in')]")),
    signupLink: element.all(by.id('sign-up')),
    firstName: element.all(by.id('first-name')),
    lastName: element.all(by.id('last-name')) ,
    email: element.all(by.id('email')),
    // countryCode: element.all(by.id('country-code')) ,
    // contact: element.all(by.id('contact-no')) ,
    password: element.all(by.id('save-password')) ,
    confirmPassword: element.all(by.id('confirm-password')) ,
    signupButton: element.all(by.id('signup-submit')),

    username: element.all(by.id('username')),
    signinPassword: element.all(by.id('password')) ,
    signinButton:element.all(by.id('submit')),

    accountButton: element.all(by.id('dropdownManual')),
    profileButton : element.all(by.id('my-profile')),
    profileTab: element.all(by.className('mat-tab-label-content')),
    editButton: element.all(by.className('clickable mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted')),
    countryDropdown : element.all(by.id('country')),
    stateDropdown : element.all(by.id('state')),
    cityDropdown : element.all(by.id('city')),
    checkButton : element.all(by.className('check-icon')),

}