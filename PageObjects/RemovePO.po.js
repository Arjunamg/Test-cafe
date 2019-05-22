import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class Remove {
    constructor() {
        this.click3dots = VueSelector('ActionsField BDropdown')
        this.remove = VueSelector('ActionsField BDropdown BDropdownItem').nth(3);
        this.confirm = Selector('footer').find('button').withText('Yes')
    }
    async removeOrder() {
        await t
            .click(this.click3dots)
            .click(this.remove)
            .click(this.confirm)
            .wait(3000)
    }
}