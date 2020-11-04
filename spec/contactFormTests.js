var HomePage = require('../pages/homePage.js');
var ContactFormPage = require('../pages/contactFormPage.js')
var formData = require('../data/formData.js')

describe('EPAM "Contact us" form demo test', function(){
    
    browser.waitForAngularEnabled(false);

    beforeEach(async function () {
        await browser.get(browser.baseUrl);
        await HomePage.delay();
    });


    xit('To check the "Contact us" button', async function(){
        await HomePage.clickContactUsButton();
        expect (await ContactFormPage.onContactFormPage()).toBe(ContactFormPage.url);
        
    }) 
    

    xit('To check the ability to fill all form fields with text', async function(){
        await HomePage.clickContactUsButton();
        //await ContactFormPage.fillComboBoxes(formData);
        await ContactFormPage.fillFields(formData, true);
        await ContactFormPage.fillCheckboxes();
        expect(await ContactFormPage.errorMessages.isPresent()).toBe(true);
    })


    xit('To check the obligatory filling of the fields with *', async function(){
        await HomePage.clickContactUsButton();
        await ContactFormPage.fillFields(formData, false);
        expect(await ContactFormPage.fieldsErrorMessages.count()).toBe(3);
    })


    //Failed: Cannot read property 'bind' of undefined
    xit('To check for errors for empty checkboxes', async function(){

        await HomePage.clickContactUsButton();
        // await ContactFormPage.fillComboBoxes(formData);
        await ContactFormPage.fillFields(formData, true);
        await ContactFormPage.submitButtonClick();
        expect(await ContactFormPage.errorMessages.count()).toBe(1);
        
    })

    })