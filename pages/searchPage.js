var BasePage = require('../pages/basePage.js');

class SearchPage extends BasePage{
    constructor(){
        super();
        this.searchResults = element.all(by.css(".search-results__item"));
    }

}

module.exports = new SearchPage();