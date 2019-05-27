import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';


export default class Create {
    constructor() {
        this.orderName = Selector('.control.is-clearfix').find('.input')
        this.orderBy = Selector('.control.has-icons-left.is-clearfix').find('.input')
        this.availBy = Selector('div').withText('Available').nth(6).find('.input')
        this.ship = Selector('div').withText('Ship').nth(11).find('.input')
        this.onsite = Selector('div').withText('OnSite').nth(6).find('.input')
        this.level = Selector('.column:nth-child(3)').find('input')
        this.zone = Selector('.column:nth-child(3)').find('div').withText('Zone').find('input')
        this.location = Selector('.multiselect__tags').nth(3).find('span').withText('Select option')
        this.recipient = Selector('.multiselect__tags').nth(4).find('span').withText('Select option')
        this.coordBy = Selector('.control.has-icons-left.is-clearfix').find('.input')
        this.prefabOnsite = Selector('div').withText('OnSite').nth(6).find('.input')
    }
    async create(orderName, orderBy, availBy, ship, onsite, level, zone) {
        const date = VueSelector('MfDate BDatepickerTable ')
        await t
            .typeText(this.orderName, orderName)
            .click(this.orderBy)
            .click(Selector('.datepicker-row').nth(1).find('a').withText(orderBy))
            .click(this.availBy)
            .click(Selector('.datepicker-row').nth(7).find('a').withText(availBy))
            .click(this.ship)
            .click(Selector('.datepicker-row').nth(13).find('a').withText(ship))
            .click(this.onsite)
            .click(Selector('.datepicker-row').nth(19).find('a').withText(onsite))
            .typeText(this.level, level)
            .typeText(this.zone, zone)
            .click(this.location)
            .click(Selector('li').withText('lak loc2'))
            .click(this.recipient)
            .click(Selector('.multiselect__option.multiselect__option--highlight').nth(4).find('span').withText('Anil Kumar'))
    }
    async creatPrefab(orderName, coordBy, prefabOnsite) {
        await t
            .typeText(this.orderName, orderName)
            .click(this.coordBy)
            .click(Selector('.datepicker-row').nth(1).find('a').withText(coordBy))
            .click(this.prefabOnsite)
            .click(Selector('.datepicker-row').nth(9).find('a').withText(prefabOnsite))
    }
}