var BasePage = require('../pages/basePage.js');
const { investorsButton } = require('./homePage.js');

class InvestorsPage extends BasePage{
    
    constructor(){
        super();
        this.menuList = element.all(by.xpath('//ul[@class="in-page-navigation__list in-page-navigation--padding-normal"]//a'));
        this.stockPriceUrl = 'https://investors.epam.com/investors/stock-price';
        this.newsList = element.all(by.xpath('//div[@class = "field-content"]/a[@hreflang]'));
        this.managementButtons = element.all(by.xpath('//a[@class="president__link"]'));
        this.boardOfDirectorsUrl = 'https://investors.epam.com/investors/leadership-and-governance#directors';
    }

    async clickStockPriceButton(){
        await this.menuList[0].click();
    }

}

module.exports = new InvestorsPage();