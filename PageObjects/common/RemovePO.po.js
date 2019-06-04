import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class Remove {
    constructor() {
        this.click3dots = VueSelector('ActionsField BDropdown')
        this.remove = VueSelector('ActionsField BDropdown BDropdownItem').nth(3);
        this.orderRemove = Selector('.dropdown-item').nth(21).find('span').withText('Remove')
        this.confirm = Selector('footer').find('button').withText('Yes')
    }
    async removeOrder(type) {
        await t
            .click(this.click3dots)
            if(type=='material') await t.click(this.remove)
            else await t.click(this.orderRemove)
            await t
            .click(this.confirm)
            .wait(3000)
    }
}