import {element, by} from 'protractor';
import BasePage from './basePage';

class HomePage extends BasePage{
    constructor(
        private investorsButton = element(by.xpath('//li[@class="footer__links-container item--piped"]/a[text() ="Investors"]')),
        private searchButton = element(by.xpath('//button[@class = "header-search__button header__icon"]')),
        public frequentSearchesTab = element(by.xpath('//div[@class="frequent-searches-ui"]')),
        public submitSearchButton = element(by.css(".header-search__submit")),
        private searchField = element(by.xpath('//input[@id = "new_form_search"]')),
        private contactUsButton = element(by.xpath("//a[@class = 'cta-button-ui cta-button--envelope header__control']"))
    ){
        super();
    }

    async clickContactUsButton() {
        await this.contactUsButton.click();
    }

    async goToInvestorsPage(){
        await this.isCookiesButtonDisplayed();
        await this.clickInvestorsButton();
    }

    async clickInvestorsButton(){
        await this.investorsButton.click();
    }

    async clickSearchButton(){
        await this.searchButton.click();
        await this.implicitlyWait(this.timeout.m);
    }

    async makeSearch(keys: string){
        await this.searchField.sendKeys(keys);
        await this.searchField.submit();
        await this.implicitlyWait(this.timeout.l);
    }
}

export default new HomePage();