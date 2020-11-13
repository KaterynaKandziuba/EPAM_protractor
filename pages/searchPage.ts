import { element, by } from 'protractor';
import BasePage from './basePage';

class SearchPage extends BasePage{
    constructor(
        private searchResults = element.all(by.css(".search-results__item"))
    ){
        super();
    }

    getSearchResults(){
        return this.searchResults;
    }

}

export default new SearchPage();