import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class CardBasicsPo{
    constructor() {
        this.orderName = Selector('.control.is-clearfix').find('.input')
        this.onsite = Selector('div').withText('OnSite').nth(6).find('.input')
        this.location = Selector('.multiselect__tags').nth(3).find('span').withText('Select option')
    }
    async cardBasic(orderName, onsite,location) {
    await t
        .typeText(this.orderName, orderName)
        .click(this.onsite)
        .click(Selector('.datepicker-row').nth(19).find('a').withText(onsite))
        .click(this.location)
        .click(Selector('li').withText('Loc Name'))
}
}