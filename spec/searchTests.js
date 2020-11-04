var HomePage = require('../pages/homePage.js');
var SearchPage = require('../pages/searchPage.js')

describe('EPAM website search functionality test', function(){

    browser.waitForAngularEnabled(false);

    beforeEach( async function () {
        await browser.get(browser.baseUrl);
        await HomePage.delay();
    });


    xit('To check the Search button', async function(){
        await HomePage.clickSearchButton();
        expect (await HomePage.frequentSearchesTab.isDisplayed()).toBe(true);      
    })

    
    it('To check the search "Submit" button is blue', async function(){
        await HomePage.clickSearchButton();
        expect (await HomePage.getColorOfSubmitButton()).toEqual("rgba(118, 205, 216, 1)")
    })

    
    xit('To check the correctness of the search results', async function(){

        await HomePage.clickSearchButton();
        await HomePage.makeSearch('Investor');
        const actualResult = Array(SearchPage.searchResults).map(async (item) => {
            expect (await item.getText()).toContain('Investor');
                })

        await Promise.all(actualResult);

    });

});

