var HomePage = require('../pages/homePage.js');
var InvestorsPage = require('../pages/investorsPage.js')

describe('EPAM website demo test', function(){

    browser.waitForAngularEnabled(false);

    beforeEach (async function () {
        await browser.get(browser.baseUrl);
        await HomePage.delay();
    });


    xit('To check the correct order of the button list on the investors page', async function(){

        await HomePage.goToInvestorsPage();
        await HomePage.implicitlyWait(HomePage.timeout.l);
        expect( await InvestorsPage.menuList.first().getText()).toBe('tock Price');
        expect( await InvestorsPage.menuList.last().getText()).toBe('ontact Investor Relations');

        })

        
    xit('To check the button of the Stock Price', async function(){

        await HomePage.goToInvestorsPage();
        await InvestorsPage.clickStockPriceButton();
        expect( await browser.getCurrentUrl()).toBe(InvestorsPage.stockPriceUrl);
        
    })


    xit('To check the news order in the News section', async function(){

        await HomePage.goToInvestorsPage();
        expect( await InvestorsPage.newsList.first().getText()).toBe("PAM Named a Leader in NelsonHall's 2020 NEAT Vendor Evaluation Process for Overall Quality Engineering Services");
        expect( await InvestorsPage.newsList.last().getText()).toBe("PAM Announces Date for Third Quarter 2020 Earnings Release and Conference Call");
    })


    xit('To check the Epam management buttons presence', async function(){
        
        await HomePage.goToInvestorsPage();
        expect( await InvestorsPage.managementButtons.first().getText()).toBe("Board of Directors");
        expect( await InvestorsPage.managementButtons.last().getText()).toBe("Executive Management");
    })


    xit('To check  the Board of Directors button', async function(){

        await HomePage.goToInvestorsPage();     
        await InvestorsPage.clickManagementBoardButton();
        expect( await browser.getCurrentUrl()).toBe(InvestorsPage.boardOfDirectorsUrl);
        
    })

    });

