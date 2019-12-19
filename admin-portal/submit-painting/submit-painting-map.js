exports.map = { 
    paintingName: element.all(by.css('[formcontrolname="Painting_Name"]')) ,
    inspiredFrom: element.all(by.css('[formcontrolname="Inspired_From"]')) ,
    cost: element.all(by.css('[formcontrolname="Cost"]')) ,
    paintingType: element.all(by.css('[formcontrolname="Painting_Type"]')) ,
    artistId: element.all(by.css('[formcontrolname="Artist_Id"]')) ,
    difficultyLevel : element.all(by.className('bar1')),
    uploadButton : element.all(by.css('input[type="file"]')) ,
    submitButton: element.all(by.cssContainingText('[class="mat-button-wrapper"]', 'Submit')),

    saveButton: element.all(by.cssContainingText('[class="mat-button-wrapper"]', 'Save')),
    searchInput : element.all(by.className('mat-input-element'))

}