var BasePage = require('../pages/basePage.js');
var data = require('../data/data.js')

class ContactFormPage extends BasePage{
    
    constructor(){
        super();
        this.url = 'http://www.epam.com/about/who-we-are/contact';
        this.formBox = element(by.xpath("//div[@class='layout-box__desktop bg-color-smoke-gray']"));
        this.howDidYouHearCombobox = element(by.xpath("(//span[@class='select2-selection__rendered'])[6]"));
        this.optionInHearCombobox = element(by.css("#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-results"));
        this.commentsField = element(by.xpath("//textarea[@placeholder='Your inquiry or comments']"));
        this.checkboxes = element.all(by.xpath("//label[@class='checkbox__label checkbox-custom-label checkbox__label-text']"))
        this.errorMessages = element.all(by.xpath("//span[text() = 'This is a required field']"));
        this.fieldsErrorMessages = element.all(by.xpath('//div[@class="text-field-ui validation-field"]/span[@class="validation-tooltip"]'));
        this.submitButton = element(by.xpath("//button[@type = 'submit']"));
        //this.checkboxError;
    }


    async onContactFormPage(){
        return await browser.getCurrentUrl();
    }


    async fillFields(isFieldsFilled){

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

    async fillCheckboxes(){

        await this.moveToElement(this.submitButton, 100, 0);
        const promises = Array(this.checkboxes).map( async (item) => {
            await browser.sleep(this.timeout.m);
            await this.excplicitlyWaitPresenceOf(item, this.timeout.m);
            await item.click()
        })

        await Promise.all(promises);
    }


    async submitButtonClick(){
        await this.isCookiesButtonDisplayed();
        await this.implicitlyWait(this.timeout.xl);
        await this.submitButton.click();
        await this.implicitlyWait(this.timeout.xl);
    }
    
}

module.exports = new ContactFormPage();