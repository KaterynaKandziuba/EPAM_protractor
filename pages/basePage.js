module.exports = class BasePage{

    constructor (){

        this.timeout = {
            'xs': 420,
            's' : 1000,
            'm' : 2000,
            'l' : 5000,
            'xl': 9000,
            'xxl': 15000
        };
    }

        async delay () {
            return new Promise(resolve => {setTimeout(() => resolve(), this.timeout.s)})
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
    }
    