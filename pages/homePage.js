var BasePage = require('../pages/basePage.js');

class HomePage extends BasePage{
    constructor(){
        super();
        this.investorsButton = element(by.xpath('//li[@class="footer__links-container item--piped"]/a[text() ="Investors"]'));
        this.searchButton = element(by.xpath('//button[@class = "header-search__button header__icon"]'));
        this.frequentSearchesTab = element(by.xpath('//div[@class="frequent-searches-ui"]'));
        this.submitSearchButton = element(by.css(".header-search__submit"));
        this.searchField = element(by.xpath('//input[@id = "new_form_search"]'));
        this.contactUsButton = element(by.xpath("//a[@class = 'cta-button-ui cta-button--envelope header__control']"));
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

    async makeSearch(keys){
        await this.searchField.sendKeys(keys);
        await this.searchField.submit();
        await this.implicitlyWait(this.timeout.l);
    }
}

module.exports = new HomePage();