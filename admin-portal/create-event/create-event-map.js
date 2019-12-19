exports.map = { 
    name: element.all(by.css("[formcontrolname='Event_Name']"))  ,
    category: element.all(by.css("[formcontrolname='Event_Category_LKP_ID']"))  ,
    date: element.all(by.css("[formcontrolname='Event_Date']"))  ,
    startTime: element.all(by.css("[formcontrolname='StartTime']"))  ,
    duration: element.all(by.css("[formcontrolname='Event_Duration']"))  ,
    ageGroup: element.all(by.css("[formcontrolname='Event_Age_Group_LKP_ID']"))  ,
    location: element.all(by.css("[formcontrolname='Location_ID']"))  ,
    totalSeats: element.all(by.css("[formcontrolname='total_seats']"))  ,
    description: element.all(by.css("[formcontrolname='Event_Description']"))  ,
    selectArtistButton: element.all(by.cssContainingText('[class="mat-button-wrapper"]', 'Select Artist')),
    selectVenueButton: element.all(by.cssContainingText('[class="mat-button-wrapper"]', 'Select Venue')),
    selectPaintingButton: element.all(by.cssContainingText('[class="mat-button-wrapper"]', 'Choose File')),
    selectSeatingButton: element.all(by.className('anchor-tag')),

    searchInput : element.all(by.className('mat-input-element'))
}