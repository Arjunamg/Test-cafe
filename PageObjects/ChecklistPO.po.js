import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class addChecklist {
    constructor() {
        this.checklistTab = Selector('span').withText('CHECKLIST')
        this.name = Selector('.vuetable-component').nth(0).find('.input')
        this.dueDate = Selector('.vuetable-component').nth(1).find('.input')
        this.isPrivate = Selector('.vuetable-slot').nth(3).find('div').find('span').find('input')

    }
    async addItemChecklist(checklistName, dueDate) {
        await t
            .click(this.checklistTab)
            .click(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]'))
            .typeText(this.name, checklistName)
            .click(this.dueDate)
            .click(Selector('.datepicker-row').nth(22).find('a').withText('16'))
            .click(this.isPrivate)
    }
    // async datePicker(stage){
    //     if (stage === 'planning'){
    //        await t .click(Selector('.datepicker-row').nth(12).find('a').withText('16'))
    //     }
    //     else {
    //         await t.click(Selector('.datepicker-row').nth(22).find('a').withText('16'))
    //     }
    // }
    async addprefabChecklist(checklistName, dueDate){
       await t
            .click(this.checklistTab)
            .click(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]'))
            .typeText(this.name, checklistName)
            .click(this.dueDate)
            .click(Selector('.datepicker-row').nth(12).find('a').withText('16'))
            .click(this.isPrivate)
    }
}