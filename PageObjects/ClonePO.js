import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class Create {
    constructor() {
        this.click3dots = VueSelector('ActionsField BDropdown')
        this.selectClone = VueSelector('ActionsField BDropdown BDropdownItem').nth(2)
        this.selectChecklist = VueSelector('CloneCard BField BCheckbox').nth(0)
        this.selectDocs = VueSelector('CloneCard BField BCheckbox').nth(1)
        this.cloneConfirm = Selector('button').withText('Clone')
        this.nnnnn = Selector('footer').find('button').withText('Yes')
    }
    async clone(orderName) {
        await t
           .typeText(Selector('.input.p-r-25'), orderName)
           .wait(4000)
           .click(this.click3dots)
           .click(this.selectClone)
           .click(this.selectChecklist)
           .click(this.selectDocs)
           .click(this.cloneConfirm)
           .click(this.nnnnn)
           .wait(3000)
    }
}