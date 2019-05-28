import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class Movement {
    constructor() {
        //Below are the Shipping selectors which might be useful later.
        this.shipButton = Selector('.fa.fa-truck.fa-2x.fa-1x.fa');
        this.shipItemButton = Selector('.fas.m-r-5.fa.fa-truck').nth(3);
        this.shipDate = Selector('.control.has-icons-left.is-clearfix').find('.input');
        this.deliveryDate = Selector('div').withText('Deliver Date').nth(12).find('.input')
        this.owner = Selector('.multiselect__single').nth(4)
        this.recipient = Selector('.multiselect__single').nth(5)
        this.reserveFor = Selector('.multiselect').nth(12).find('div').withText('Select option')
        this.destinationLoc = Selector('.multiselect__single').nth(3)
        this.reciver = Selector('.multiselect__single').nth(1)
        this.next = Selector('p').withText('Next')
        this.updateDelivery = Selector('a').withText('Update Delivery')
    }

    async moveToShip() {
        await t
            .wait(5000)
            .click(this.shipButton)
            .click(this.shipItemButton)
            .wait(2000)
            .click(this.shipDate)
            .click(Selector('.datepicker-row').nth(42).find('a').withText('15'))
            .click(this.owner)
            .click(Selector('span').withText('lakshmi devi').nth(7))
            .click(this.recipient)
            .click(Selector('li').withText('vimal mem1').nth(4).find('.multiselect__option'))
            .click(this.deliveryDate)
            .click(Selector('.datepicker-row').nth(49).find('a').withText('29'))
            .click(this.reserveFor)
            .click(Selector('span').withText('testOrderInDetailingStage').nth(1))
            .click(this.destinationLoc)
            .click(Selector('span').withText('lakshmi loc2').nth(5))
            .click(this.reciver)
            .click(Selector('span').withText('IUSHE').nth(5))
            .click(this.next)
            .click(this.next)
            .click(this.updateDelivery)
    }
    async qaToShip(){
        await t
// wait must be inserted after search 
            .click(this.shipButton)
            .click(this.shipItemButton)
            .wait(2000)
            .click(this.shipDate)
            .click(Selector('.datepicker-row').nth(62).find('a').withText('16'))
            .click(this.recipient)
            .click(Selector('span').withText('lakshmi devi').nth(6))
            .click(this.deliveryDate)
            .click(Selector('.datepicker-row').nth(68).find('a').withText('22'))
            .click(this.destinationLoc)
            .click(Selector('span').withText('xzcvb').nth(4))
            .click(this.reciver)
            .click(Selector('span').withText('IUSHE').nth(6))
            .click(this.next)
            .click(this.next)
            .click(this.updateDelivery)
    }
}
   