import { Selector, t } from "testcafe";

export default class Movement {
    constructor() {
        //Below are the Shipping selectors which might be useful later.
        this.shipButton = Selector('.fa.fa-truck.fa-2x.fa-1x.fa');
        this.shipItemButton = Selector('.fas.m-r-5.fa.fa-truck');
        this.selectAllItems = Selector('[class^="vuetable-th-component-checkbox vuetable-th-compone"]').find('input');
        this.modalMove = Selector('a').withText('MOVE');
        this.shipNext = Selector('button').withText('Next');
        this.shipOrderName = Selector('div').withText('Name').nth(37).find('.input');
        this.shipID = Selector('div').withText('Tracking').nth(10).find('.input');
        this.currentLocation = Selector('.control.has-icons-left.is-clearfix').find('.input')
        this.shippingDate = Selector('.datepicker-header').nth(17).find('div').withText('S').nth(1)
        this.deliveryDate = Selector('div').withText('Delivery Location').nth(17).find('.input')
        this.deliveryLocation = Selector('div').withText('Delivery Location').nth(17).find('.multiselect__single')
        this.shipCreate = Selector('button').withText('Create');
    }

    async moveToShip() {
        await t
            .click(this.shipButton)
            .click(this.shipItemButton)
            .click(this.selectAllItems)
            .click(this.shipNext)
            .click(this.currentLocation)
            .click(this.shippingDate)
            .click(Selector('.datepicker-row').nth(41).find('a').withText('9'))
            .click(this.deliveryDate)
            .click(Selector('.datepicker-row').nth(47).find('a').withText('16'))
            .click(this.deliveryLocation)
            .click(Selector('li').withText('New Location').nth(2).find('.multiselect__option'))
            .click(Selector('button').withText('Create'));
    }
}
