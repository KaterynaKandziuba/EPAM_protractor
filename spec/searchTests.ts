import { browser } from 'protractor';
import HomePage from '../pages/homePage';
import SearchPage from '../pages/searchPage'

describe('EPAM website search functionality test', function(){

    browser.waitForAngularEnabled(false);

    beforeEach( async function () {
        await browser.get(browser.baseUrl);
        await HomePage.waitToLoad();
        await HomePage.clickSearchButton();
    });


    xit('To check the Search button', async function(){
        expect (await HomePage.frequentSearchesTab.isDisplayed()).toBe(true);      
    })

    
    xit('To check the search "Submit" button is blue', async function(){

        await HomePage.implicitlyWait(5000);
        expect (await HomePage.submitSearchButton.getCssValue("background-color")).toEqual("rgba(118, 205, 216, )")
    })

    
    xit('To check the correctness of the search results', async function(){

        await HomePage.makeSearch('Investor');
        const actualResult = Array(SearchPage.getSearchResults()).map(async (item) => {
            expect (await item.getText()).toContain('Investor');
                })

        await Promise.all(actualResult);

    });

});

