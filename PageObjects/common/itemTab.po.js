import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';
import Clear from "../clearField.po"

const clear = new Clear();

export default class itemTabPO {
    constructor() {
        this.itemId = Selector('.vuetable-component').nth(0).find('.input')
        this.itemName = Selector('.vuetable-component').nth(1).find('.input')
    }
    async itemTab(itemId, itemName) {
        let table = VueSelector('BTabs BTabItem').nth(4)
        await t
            .click(Selector('.fas.m-t-3.fa-plus').nth(0))
            .click(this.itemId)
            .pressKey('ctrl+a')
            .pressKey('backspace')
            .typeText(this.itemId, itemId)
            .click(this.itemName)
            .pressKey('ctrl+a')
            .pressKey('backspace')
            .typeText(this.itemName, itemName)
    }
}