var data = require('../data/data.js')

module.exports = class BasePage{
      

    constructor (){

        this.acceptCookiesButton = element(by.css('[aria-label="Accept our use of cookies"]'));
        this.timeout =  data.timeout;
    }

    async navigateTo() {
        await browser.get(this.url, this.timeout.xl);
        await this.waitToLoad();
    }

    async waitToLoad () {
        return new Promise(resolve => {setTimeout(() => resolve(), this.timeout.m)})
    }

    async implicitlyWait(ms){
        browser.manage().timeouts().implicitlyWait(ms);
    }

    async excplicitlyWaitPresenceOf(element, ms){
        browser.wait(protractor.ExpectedConditions.presenceOf(element), ms);
    }

    async excplicitlyWaitToBeClicable(element, ms){
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), ms);
    }

    async moveToElement(el, x, y){
        browser.actions()
        .mouseMove(el, {x: x, y: y}) 
        .perform();
    }

    async isCookiesButtonDisplayed(){
        if (this.acceptCookiesButton.isDisplayed()){
            await this.acceptCookiesButton.click()}
        }   
    }
    