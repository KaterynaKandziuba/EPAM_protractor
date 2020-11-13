import { browser } from 'protractor';
import HomePage from '../pages/homePage';
import InvestorsPage from '../pages/investorsPage';

describe('EPAM website demo test', function(){

    browser.waitForAngularEnabled(false);

    beforeEach (async function () {
        await browser.get(browser.baseUrl);
        await HomePage.waitToLoad();
        await HomePage.goToInvestorsPage();
    });


    xit('To check the correct order of the button list on the investors page', async function(){

        expect( await InvestorsPage.menuList.first().getText()).toBe('Stock Price');
        expect( await InvestorsPage.menuList.last().getText()).toBe('Contact Investor Relations');

        })

        
    xit('To check the button of the Stock Price', async function(){

        await InvestorsPage.clickStockPriceButton();
        expect( await browser.getCurrentUrl()).toBe(InvestorsPage.stockPriceUrl);
        
    })


    xit('To check the news order in the News section', async function(){

        expect( await InvestorsPage.newsList.first().getText()).toBe("EPAM Named a Leader in NelsonHall's 2020 NEAT Vendor Evaluation Process for Overall Quality Engineering Services");
        expect( await InvestorsPage.newsList.last().getText()).toBe("EPAM Announces Date for Third Quarter 2020 Earnings Release and Conference Call");
    })


    xit('To check the Epam management buttons presence', async function(){
        await HomePage.moveToElement(InvestorsPage.managementButtons[0], 50, 0);
        expect( await InvestorsPage.managementButtons.first().getText()).toBe("Board of Directors");
        expect( await InvestorsPage.managementButtons.last().getText()).toBe("Executive Management");
    })


    it('To check  the Board of Directors button', async function(){

        await InvestorsPage.clickManagementBoardButton();
        expect( await browser.getCurrentUrl()).toBe(InvestorsPage.boardOfDirectorsUrl);
        
    })

    });
