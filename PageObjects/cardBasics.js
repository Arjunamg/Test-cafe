import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';
import CommonCardBasics from './common/cardBasics.po';

export default class Create extends CommonCardBasics{
    constructor() {
        super();
        this.orderBy = Selector('.control.has-icons-left.is-clearfix').find('.input')
        this.availBy = Selector('div').withText('Available').nth(6).find('.input')
        this.ship = Selector('div').withText('Ship').nth(11).find('.input')
        this.level = Selector('.column:nth-child(3)').find('input')
        this.zone = Selector('.column:nth-child(3)').find('div').withText('Zone').find('input')
        this.recipient = Selector('.multiselect__tags').nth(4).find('span').withText('Select option')
        this.coordBy = Selector('.control.has-icons-left.is-clearfix').find('.input')
    }
    async create(orderName, orderBy, availBy, ship, onsite, level, zone) {
        await CommonCardBasics.prototype.cardBasic.call(this,orderName,onsite);
        await t
            .click(this.orderBy)
            .click(Selector('.datepicker-row').nth(1).find('a').withText(orderBy))
            .click(this.availBy)
            .click(Selector('.datepicker-row').nth(9).find('a').withText(availBy))
            .click(this.ship)
            .click(Selector('.datepicker-row').nth(16).find('a').withText(ship))
            .typeText(this.level, level)
            .typeText(this.zone, zone)
            .click(this.recipient)
            .click(Selector('.multiselect__option.multiselect__option--highlight').nth(4).find('span').withText('UI'))
    }
    async creatPrefab(orderName ,coordBy,onsite,location){
        await CommonCardBasics.prototype.cardBasic.call(this,orderName,onsite);
        await t
            .click(this.coordBy)
            .click(Selector('.datepicker-row').nth(1).find('a').withText(coordBy))
    }
}