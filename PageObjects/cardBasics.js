import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';
import CommonCardBasics from './common/cardBasics.po';
import MfDateEntry from './common/datePicker.po';

const dateEntry = new MfDateEntry();

export default class Create extends CommonCardBasics{
    constructor() {
        super();
        this.level = Selector('.column:nth-child(3)').find('input')
        this.zone = Selector('.column:nth-child(3)').find('div').withText('Zone').find('input')
        this.recipient = Selector('.multiselect__tags').nth(4).find('span').withText('Select option')
        this.coordBy = Selector('.control.has-icons-left.is-clearfix').find('.input')
    }
    async create(orderName, orderBy, availBy, ship, onsite, level, zone) {
        await CommonCardBasics.prototype.cardBasic.call(this,orderName,onsite);
        await dateEntry.fill({ 'Fab/Order': orderBy, 'Available': availBy, 'Ship': ship });
        await t
            .typeText(this.level, level)
            .typeText(this.zone, zone)
            .click(this.recipient)
            .click(Selector('.multiselect__option.multiselect__option--highlight').nth(4).find('span').withText('Anil Kumar'))
    }
    async creatPrefab(orderName ,coordBy,onsite, type){
        await CommonCardBasics.prototype.cardBasic.call(this,orderName,onsite, type);
        await dateEntry.fill('Coordinate', '20');
    }
}