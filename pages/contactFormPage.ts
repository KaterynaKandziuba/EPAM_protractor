import { browser, element, by, ElementFinder } from 'protractor';
import BasePage from './basePage';
import data from '../data/data';

class ContactFormPage extends BasePage{
    
    constructor(
        public url = 'http://www.epam.com/about/who-we-are/contact',
        private formBox = element(by.xpath("//div[@class='layout-box__desktop bg-color-smoke-gray']")),
        private howDidYouHearCombobox = element(by.xpath("(//span[@class='select2-selection__rendered'])[6]")),
        private optionInHearCombobox = element(by.css("#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-results")),
        private commentsField = element(by.xpath("//textarea[@placeholder='Your inquiry or comments']")), 
        private checkboxes = element.all(by.xpath("//label[@class='checkbox__label checkbox-custom-label checkbox__label-text']")),
        public errorMessages = element.all(by.xpath("//span[text() = 'This is a required field']")), 
        public fieldsErrorMessages = element.all(by.xpath('//div[@class="text-field-ui validation-field"]/span[@class="validation-tooltip"]')), 
        private submitButton = element(by.xpath("//button[@type = 'submit']"))
    ){ super(); }


    async onContactFormPage(){
        return await browser.getCurrentUrl();
    }


    async fillFields(isFieldsFilled : boolean ){

        await this.excplicitlyWaitPresenceOf(this.formBox, this.timeout.l);

        const promises = data.formFields.map( async (item, index) => {
            await this.implicitlyWait(this.timeout.l);
            
            if (isFieldsFilled){
                await element(by.xpath("//input[@placeholder='" + item + "']")).sendKeys(data.valuesForForm[index]);
            } else{
                await element(by.xpath("//input[@placeholder='" + item + "']")).sendKeys('');
            }
        })

        await Promise.all(promises);
        await this.commentsField.click();
        
        isFieldsFilled ? await this.commentsField.sendKeys(data.valuesForForm[data.valuesForForm.length - 1]) : await this.commentsField.sendKeys('');
    }

    async fillHowDidYouHearDropdown(){
        
        await this.isCookiesButtonDisplayed();
        await this.howDidYouHearCombobox.click();
        await this.optionInHearCombobox.click();
    }

    // async fillCheckboxes(){

    //     await this.moveToElement(this.submitButton, 100, 0);
    //     const promises = this.checkboxes.map( async (item) => {
    //         await browser.sleep(this.timeout.m);
    //         if (typeof item === 'ElementFinder'){
    //             await this.excplicitlyWaitPresenceOf(item, this.timeout.m);
    //             await item.click()
    //         }
            
    //     })

    //     await Promise.all(promises);
    // }


    async submitButtonClick(){
        await this.isCookiesButtonDisplayed();
        await this.implicitlyWait(this.timeout.xl);
        await this.submitButton.click();
        await this.implicitlyWait(this.timeout.xl);
    }
    
}

export default new ContactFormPage();