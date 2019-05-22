import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class CloneCard {
    constructor() {
        this.click3dots = VueSelector('ActionsField BDropdown')
        this.selectClone = VueSelector('ActionsField BDropdown BDropdownItem').nth(2)
        this.selectChecklist = VueSelector('CloneCard BField BCheckbox').nth(0)
        this.selectDocs = VueSelector('CloneCard BField BCheckbox').nth(1)
        this.cloneConfirm = Selector('button').withText('Clone')
        this.clone = Selector('footer').find('button').withText('Yes')
    }
    async clone() {
        await t
           .click(this.click3dots)
           .click(this.selectClone)
           .click(this.selectChecklist)
           .click(this.selectDocs)
           .click(this.cloneConfirm)
           .click(this.clone)
           .wait(3000)
    }
}