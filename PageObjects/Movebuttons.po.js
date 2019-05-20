import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class Movement {
    constructor() {
        this.globalSearchField  = VueSelector('search-bar');
        this.forwardPaperPlane = Selector('.fa.fa-paper-plane.fa-2x.fa-1x.fa');
        this.forwardItemPaperPlane = Selector('.icon').nth(43).find('.fas.m-r-5.fa.fa-paper-plane');
        this.backwardPaperPlane = Selector('[class^="fa fa-paper-plane fa-flip-horizontal fa-2x fa-1x f"]');
        this.backwardItemPaperPlane = Selector('.fas.m-r-5.fa.fa-paper-plane.fa-flip-horizontal');
        //Below are the Shipping selectors which might be useful later.
        // this.shipButton = Selector('.fa.fa-truck.fa-2x.fa-1x.fa');
        // this.shipItemButton = Selector('.fas.m-r-5.fa.fa-truck');
        // this.selectAllItems = Selector('[class^="vuetable-th-component-checkbox vuetable-th-compone"]').find('input');
        // this.modalMove = Selector('a').withText('MOVE');
        // this.shipNext = Selector('button').withText('Next');
        // this.shipOrderName = Selector('div').withText('Name').nth(37).find('.input');
        // this.shipID = Selector('div').withText('Tracking').nth(10).find('.input');
        // this.shipDateField = Selector('.control.has-icons-left.is-clearfix').find('.input');
        // this.deliverDateField = Selector('div').withText('Delivery Location').nth(17).find('.input');
        // this.deliveryLocationField = Selector('div').withText('Delivery Location').nth(17).find('.multiselect__single');
        // this.shipCreate = Selector('button').withText('Create');
    }

    async movement(orderName,kind){
        await t
        .typeText(this.globalSearchField, orderName)
        .wait(2000)
        if(kind==='forward'){
            await this.forward();
        }
        else if(kind==='backward'){
            await this.backward();
        }
    }
    async forward(){
        await t  
            .click(this.forwardPaperPlane)
            .click(this.forwardItemPaperPlane)
            .click(this.selectAllItems)
            .click(this.modalMove)
    }
    async backward(){
        await t  
            .click(this.backwardPaperPlane)
            .click(this.backwardItemPaperPlane)
            .click(this.selectAllItems)
            .click(this.modalMove)
    }
}