import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

import GlobalSearch from "../GlobalSearch.po";
const globalSearch = new GlobalSearch();

import ClearSearch from '../ClearSearch.po';
const clearSearch = new ClearSearch();



export default class Movement {
    constructor(type) {
        if(type === 'material'){
            this.combineOption = VueSelector('ActionsField BDropdown BDropdownItem').nth(1)
        }
        else {
            this.combineOption = VueSelector('ActionsField BDropdown BDropdownItem').nth(3)
        }
        this.click3dots = VueSelector('ActionsField BDropdown')
        this.combineButton = Selector('button').withText('Combine')
    }
    async combine(parentOrder, childOrder) {
        await globalSearch.search(parentOrder);
        await t
            .click(this.click3dots)
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