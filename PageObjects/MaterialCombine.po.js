import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

import GlobalSearch from "./GlobalSearch.po";
const globalSearch = new GlobalSearch();

export default class Movement {
    constructor() {
        this.threeDot= Selector('.button.custome-dot-menu').find('.icon')
        this.combineOption= Selector('.dropdown-item').nth(25).find('span').withText('Combine')
        this.combineButton =Selector('button').withText('Combine')
    }
    async combine(parentOrder, childOrder){
        await globalSearch.Search(parentOrder);
        await t
            .click(this.threeDot)
            // .wait(1000)
            .click(this.combineOption)
            // .wait(1000)
            .click(Selector('.table.has-mobile-cards.is-hoverable').find('td').withText(childOrder))
            .click(this.combineButton)
            // .wait(1000)
            .click(globalSearch.globalSearchField)
            .pressKey('ctrl+a')
            .pressKey('backspace')
            .wait(2000)
        // Rio bug for Global search ex "a + b"
        //await globalSearch.Search(`${parentOrder} + ${childOrder}`);    
    }    
}