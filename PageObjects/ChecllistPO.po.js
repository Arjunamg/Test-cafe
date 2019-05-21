import { Selector, t } from "testcafe";

export default class addChecklist {
    constructor() {
        this.checklistTab = Selector('span').withText('CHECKLIST')
        this.name = Selector('.vuetable-component').nth(0).find('.input')
        this.dueDate = Selector('.control.has-icons-left.is-clearfix').nth(5).find('.input')
        this.isPrivate = Selector('.vuetable-slot').nth(3).find('div').find('span').find('input')

    }
    async addItemChecklist(checklistName, dueDate) {
        await t
            .click(this.checklistTab)
            .click(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]'))
            .typeText(this.name, checklistName)
            .click(this.dueDate)
            .click(Selector('.datepicker-row').nth(23).find('a').withText(dueDate))
            .click(this.isPrivate)
    }
}