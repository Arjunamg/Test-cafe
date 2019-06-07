import { Selector, t } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';

import Search from "../GlobalSearch.po";
const search = new Search();

export default class Movement {
    constructor() {
        this.threeDot=Selector('.button.custome-dot-menu').find('.icon')
        this.splitOption = Selector('.dropdown-content').find('a').withText('Split')
        this.firstItemCheckBox = Selector('.scroll-style').find('tr').find('td').find('input')
        this.splitOrderNameBox = Selector('div').withText('New Order').nth(6).find('.input')
        this.splitButton = Selector('button').withText('Split Order')
    }
    async split(newOrderName){
        await t
            .click(this.threeDot)
            .click(this.splitOption)
            .click(this.firstItemCheckBox)
            .typeText(this.splitOrderNameBox,newOrderName)
            .click(this.splitButton)
            .click(search.globalSearchField)
            .pressKey('ctrl+a')
            .pressKey('backspace')
            .wait(2000)
    }
}
