var HomePage = require('../pages/homePage.js');
var InvestorsPage = require('../pages/investorsPage.js')

describe('EPAM website demo test', function(){

    browser.waitForAngularEnabled(false);

    beforeEach (async function () {
        await browser.get(browser.baseUrl);
        await HomePage.delay();
    });


    it('To check the correct order of the button list on the investors page', async function(){

        await HomePage.clickInvestorsButton();
        await HomePage.implicitlyWait(HomePage.timeout.xl);
        await browser.sleep(2000);
        expect( await InvestorsPage.menuList[0].getText()).toBe('tock Price');
        expect( await InvestorsPage.menuList[InvestorsPage.menuList.length - 1].getText()).toBe('Contact Investor Relations');

        })

        
    xit('2.	To check the button of the Stock Price', async function(){

        await InvestorsPage.clickInvestorsButton();
        await InvestorsPage.clickStockPriceButton();
        expect( await browser.getCurrentUrl()).toBe(InvestorsPage.stockPriceUrl);
        
    })


    xit('To check the news order in the News section', async function(){

        await InvestorsPage.clickInvestorsButton();
        expect( await InvestorsPage.newsList[0].getText()).toBe("PAM Named a Leader in NelsonHall's 2020 NEAT Vendor Evaluation Process for Overall Quality Engineering Services");
        expect( await InvestorsPage.newsList[1].getText()).toBe("PAM Announces Date for Third Quarter 2020 Earnings Release and Conference Call");
    })


    xit('To check the Epam management buttons presence', async function(){
        
        await InvestorsPage.clickInvestorsButton();
        expect( await InvestorsPage.managementButtons[0].getText()).toBe("Board of Directors");
        expect( await InvestorsPage.managementButtons[1].getText()).toBe("Executive Management");
    })


    xit('To check  the Board of Directors button', async function(){

        await InvestorsPage.clickInvestorsButton();     
        await InvestorsPage.managementButtons[0].click();
        expect( await browser.getCurrentUrl()).toBe(InvestorsPage.boardOfDirectorsUrl);
        
    })

    });

