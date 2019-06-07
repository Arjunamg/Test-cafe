import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';
import MfDateEntry from './datePicker.po';

const dateEntry = new MfDateEntry();

export default class CardBasicsPo{
    constructor() {
        this.orderName = Selector('.control.is-clearfix').find('.input')
        this.onsite = Selector('div').withText('OnSite').nth(6).find('.input')
        this.location = Selector('.multiselect__tags').nth(3).find('span').withText('Select option')
    }
    async cardBasic(orderName, onsite, type) {
    await t
        .typeText(this.orderName, orderName)
        await dateEntry.fill('OnSite', onsite);
            if(!type){
                await t
                .click(this.location)
                .click(Selector('li').withText('lak loc1'))
            }
}
}