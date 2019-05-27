import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class SearchBar {
    constructor() {
        this.globalSearchField  = VueSelector('search-bar');
        this.memberModalSearchField =Selector('div').withText('Select Users').nth(8).find('.input.p-r-25')
        this.compModalSearchField =Selector('div').withText('Invite Existing Companies').nth(8).find('.input.p-r-25')
        this.locModalSearchField =Selector('div').withText('Import Company Locations').nth(8).find('.input.p-r-25')



    }
    async search(name) {
        await t
        .typeText(this.globalSearchField, name)
        .wait(2000)
        .expect(Selector('td').withText(name).textContent).ok();
    }  
    async memberModalSearch(name){
        await t 
        .typeText(this.memberModalSearchField, name)
        .wait(2000)
        .expect(Selector('td').withText(name).textContent).ok();
    }
    async compModalSearch(name){
        await t 
        .typeText(this.compModalSearchField, name)
        .wait(2000)
        .expect(Selector('td').withText(name).textContent).ok();
    }
    async locModalSearch(name){
        await t 
        .typeText(this.locModalSearchField, name)
        .wait(2000)
        .expect(Selector('td').withText(name).textContent).ok();
    }
}