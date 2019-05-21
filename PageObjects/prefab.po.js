import { Selector, t } from "testcafe";

export default class BasicPrefabEditCard {
    constructor() {
        this.orderName = Selector('.control.is-clearfix').find('.input')
        this.orderBy = Selector('.control.has-icons-left.is-clearfix').find('.input')
        this.availBy = Selector('div').withText('Available').nth(6).find('.input')
        this.ship = Selector('div').withText('Ship').nth(11).find('.input')
        this.onsite = Selector('div').withText('OnSite').nth(6).find('.input')
        this.level = Selector('.column:nth-child(3)').find('input')
        this.zone = Selector('.column:nth-child(3)').find('div').withText('Zone').find('input')
    }
    async BasicPrefabEditCard(orderName, orderBy, availBy, ship,onsite, level, zone) {
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
    }
}