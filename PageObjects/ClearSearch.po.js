import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class Movement {
    constructor() {
        this.globalSearchFieldClear  = Selector('.icon.btn-close').find('.fa.fa-times')
    }
    async clearSearch() {
        await t
            .click(this.globalSearchFieldClear)

    }      
}
      