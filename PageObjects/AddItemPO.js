import { Selector, t } from "testcafe";

export default class addItem {
    constructor(type) {
        this.descripTab = Selector('span').withText('DESCRIPTION')
        this.itemId = Selector('.vuetable-component').nth(0).find('.input')
        this.itemName = Selector('.vuetable-component').nth(1).find('.input')
        this.catId = Selector('.vuetable-component').nth(2).find('.input')
        this.fieldverifyTab = Selector('span').withText('FIELD MEASUREMENT')
        this.measureBy = Selector('.vuetable-component').nth(2).find('.input')
        this.assignee = Selector('.multiselect').nth(5).find('div').withText('Select option')
        this.requireFM = Selector('.has-text-centered.check-box')
        // this.itemDates = Selector('span').withText('Dates')
        this.itemnoteTab = Selector('span').withText('ITEM NOTES')
        this.itemNote = Selector('.vuetable-component').nth(2).find('.input')

    }
    async add(itemId, itemName, catId, measureBy, itemNote) {
        await t
            .click(Selector('div').withText('ITEM ID').nth(7).find('.fas.m-t-3.fa-plus'))
            .click(this.itemId)
            .pressKey('ctrl+a')
            .pressKey('backspace')
            .typeText(this.itemId, itemId)
            .click(this.itemName)
            .pressKey('ctrl+a')
            .pressKey('backspace')
            .typeText(this.itemName, itemName)
            // Direction of item addition is downward but we have to increment the index for item field, which is pretty time consuming, will do it later.
            // .click(this.catId)
            // .pressKey('ctrl+a')
            // .pressKey('backspace')            
            // .typeText(this.catId, catId)
            .click(this.fieldverifyTab)
            .click(this.measureBy)
            .click(Selector('.datepicker-row').nth(23).find('a').withText(measureBy))
            .click(this.assignee)
            .click(Selector('.multiselect__option.multiselect__option--highlight').nth(5).find('span').withText('UI'))
            .click(this.requireFM)
            .click(this.itemnoteTab)
            .typeText(this.itemNote, itemNote)
            .click(this.descripTab)
    }
}