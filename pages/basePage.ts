import { browser, element, by,  ExpectedConditions, ElementFinder} from 'protractor';
import data from '../data/data';

export default class BasePage{
      

    constructor (
        protected acceptCookiesButton = element(by.css('[aria-label="Accept our use of cookies"]')),
        protected timeout =  data.timeout
    ){};

    async navigateTo() {
        await browser.get(browser.url, this.timeout.xl);
        await this.waitToLoad();
    }

    async waitToLoad () {
        return new Promise(resolve => {setTimeout(() => resolve(), this.timeout.m)})
    }

    async implicitlyWait(ms: number){
        browser.manage().timeouts().implicitlyWait(ms);
    }

    async excplicitlyWaitPresenceOf(element: ElementFinder, ms: number){
        browser.wait(ExpectedConditions.presenceOf(element), ms);
    }

    async excplicitlyWaitToBeClicable(element: ElementFinder, ms: number){
        browser.wait(ExpectedConditions.elementToBeClickable(element), ms);
    }

    async moveToElement(element: ElementFinder, x: number, y: number){
        browser.actions()
        .mouseMove(element, {x: x, y: y}) 
        .perform();
    }

    async isCookiesButtonDisplayed(){
        if (this.acceptCookiesButton.isDisplayed()){
            await this.acceptCookiesButton.click()}
        }   
    }
    