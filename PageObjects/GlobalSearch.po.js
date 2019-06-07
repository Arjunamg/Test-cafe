import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class SearchBar {
    constructor(within = '') {
        this.globalSearchField  = VueSelector(within + ' search-bar');
    }
    async search(name) {
        await t
        .typeText(this.globalSearchField, name)
        .wait(2000)
        .expect(Selector('td').withText(name).textContent).ok();
    }  
}