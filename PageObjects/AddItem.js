import { Selector, t } from "testcafe";
import Clear from "./clearField.po"
import itemTabCommon from './common/itemTab.po'

const clear = new Clear();

export default class addItem extends itemTabCommon{
    constructor() {
        super();
        this.descripTab = Selector('span').withText('DESCRIPTION')
        this.catId = Selector('.vuetable-component').nth(2).find('.input')
        this.fieldverifyTab = Selector('span').withText('FIELD MEASUREMENT')
        this.measureBy = Selector('.vuetable-component').nth(2).find('.input')
        this.assignee = Selector('.multiselect').nth(5).find('div').withText('Select option')
        this.requireFM = Selector('.has-text-centered.check-box')
        // this.itemDates = Selector('span').withText('Dates')
        this.itemnoteTab = Selector('span').withText('NOTES')
        this.itemNote = Selector('.vuetable-component').nth(2).find('.input')
        this.measure = Selector('.vuetable-component').nth(3).find('.input')
        this.measUnits = Selector('.vuetable-component').nth(4)
        this.prefabLevel = Selector('.vuetable-component').nth(5).find('.input')
        this.prefabZone = Selector('.vuetable-component').nth(6).find('.input')
        this.mgtTab = Selector('a').withText('MGMT')
        this.costCode = Selector('.vuetable-component').nth(2).find('.input')
        this.itemCoord = Selector('.vuetable-component').nth(3).find('.input')
        this.itemOnsite = Selector('.vuetable-component').nth(4).find('.input')
    }1
    async add(itemId, itemName, catId, measureBy, itemNote) {
        await t
             await itemTabCommon.prototype.itemTab.call(this, itemId, itemName);
            // Direction of item addition is downward but we have to increment the index for item field, which is pretty time consuming, will do it later.
            // .click(this.catId)
            // .pressKey('ctrl+a')
            // .pressKey('backspace')            
            // .typeText(this.catId, catId)
            await t 
                .click(this.fieldverifyTab)
                .click(this.measureBy)
                .click(Selector('.datepicker-row').nth(28).find('a').withText(measureBy))
                .click(this.assignee)
                .click(Selector('.multiselect__option.multiselect__option--highlight').nth(5).find('span').withText('UI'))
                .click(this.requireFM)
                .wait(1000)
                .click(this.itemnoteTab)
                .typeText(this.itemNote, itemNote)
                .click(this.descripTab)
    }
    async addPrefabItems(itemId, itemName, measure, prefabLevel, prefabZone, costCode, itemCoord, itemOnsite, itemNote){
        await itemTabCommon.prototype.itemTab.call(this, itemId, itemName);
        await clear.clearField(this.measure);
        await t
            .typeText(this.measure, measure)
            .click(this.measUnits)
            .click(Selector('.multiselect__content').find('li').withText('lb'));
        await clear.clearField(this.prefabLevel);
        await t.typeText(this.prefabLevel, prefabLevel);
        await clear.clearField(this.prefabZone);
        await t.typeText(this.prefabZone, prefabZone)
            .click(this.mgtTab)
            .typeText(this.costCode, costCode)
            .click(this.itemCoord)
            .click(Selector('.datepicker-row').nth(15).find('a').withText(itemCoord))
            .click(this.itemOnsite)
            .click(Selector('.datepicker-row').nth(22).find('a').withText(itemOnsite))
            .click(this.itemnoteTab)
            .typeText(this.itemNote, itemNote)
            .click(Selector('a').withText('INFO'))
    }
}