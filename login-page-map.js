exports.map = { 
    adminUserName: element.all(by.css('[formcontrolname="Username"]')),
    adminPassword: element.all(by.css('[formcontrolname="Password"]')),
    loginButton: element.all(by.className('loginBtn'))
}