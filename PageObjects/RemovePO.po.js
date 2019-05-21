import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class Remove {
    constructor() {
        this.click3dots = VueSelector('ActionsField BDropdown')
        this.remove = Selector('footer').find('button').withText('Yes')
    }
    async remove(orderName) {
        await t
            .typeText(Selector('.input.p-r-25'), orderName)
            .wait(4000)
            .click(this.click3dots)
            .click(this.remove)
            .wait(3000)
    }
}