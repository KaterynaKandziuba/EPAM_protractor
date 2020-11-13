import { browser } from 'protractor';
import HomePage from '../pages/homePage';
import ContactFormPage from '../pages/contactFormPage';
import formData from '../data/data';

describe('EPAM "Contact us" form demo test', function(){
    
    browser.waitForAngularEnabled(false);

    beforeEach(async function () {
        await browser.get(browser.baseUrl);
        await HomePage.waitToLoad();
        await HomePage.clickContactUsButton();
    });


    it('To check the "Contact us" button', async function(){
        expect (await ContactFormPage.onContactFormPage()).toBe(ContactFormPage.url);
    }) 
    

    it('To check the ability to fill all form fields with text', async function(){
        await ContactFormPage.fillFields(true);
        await ContactFormPage.fillHowDidYouHearDropdown();
        //await ContactFormPage.fillCheckboxes();
        expect(await ContactFormPage.errorMessages.isPresent()).toBe(false);
    })


    it('To check the obligatory filling of the fields with *', async function(){
        await ContactFormPage.fillFields(false);
        expect(await ContactFormPage.fieldsErrorMessages.count()).toBe(4);
    })


    it('To check for errors for empty checkboxes', async function(){
        await ContactFormPage.fillFields(true);
        await ContactFormPage.fillHowDidYouHearDropdown();
        await ContactFormPage.submitButtonClick();
        expect(await ContactFormPage.errorMessages.count()).toBe(1);
        
    })

    })