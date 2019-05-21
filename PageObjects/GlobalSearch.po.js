import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class Movement {
    constructor() {
        this.globalSearchField  = VueSelector('search-bar');
    }
    async Search(orderName) {
        await t
        .typeText(this.globalSearchField, orderName)
        .wait(2000)
        .expect(Selector('td').withText(orderName).textContent).ok();

    }      
}
      