import {element, by} from 'protractor';
import BasePage from './basePage';

class InvestorsPage extends BasePage{
    
    constructor(
        public menuList = element.all(by.xpath('//ul[@class="in-page-navigation__list in-page-navigation--padding-normal"]//a')),
        public stockPriceUrl = 'https://investors.epam.com/investors/stock-price',
        public newsList = element.all(by.xpath('//div[@class = "field-content"]/a[@hreflang]')),
        public managementButtons = element.all(by.xpath('//a[@class="president__link"]')),
        public boardOfDirectorsUrl = 'https://investors.epam.com/investors/leadership-and-governance#directors'
    ){
        super()
    }

    async clickStockPriceButton(){
        await this.menuList.first().click();
        this.implicitlyWait(this.timeout.l);
    }

    async clickManagementBoardButton(){
        await this.implicitlyWait(this.timeout.l);
        await this.managementButtons.first().click();
        await this.implicitlyWait(this.timeout.l);
    }

}

export default new InvestorsPage();