import { Selector, t } from "testcafe";

export default class Movement {
    constructor() {
        this.forwardPaperPlane = Selector('.fa.fa-paper-plane.fa-2x.fa-1x.fa');
        this.forwardItemPaperPlane = Selector('.icon').nth(43).find('.fas.m-r-5.fa.fa-paper-plane');
        this.backwardPaperPlane = Selector('[class^="fa fa-paper-plane fa-flip-horizontal fa-2x fa-1x f"]');
        this.backwardItemPaperPlane = Selector('.fas.m-r-5.fa.fa-paper-plane.fa-flip-horizontal');
        this.selectAllItems = Selector('[class^="vuetable-th-component-checkbox vuetable-th-compone"]').find('input');
        this.modalMove = Selector('a').withText('MOVE');
        this.stageDD = Selector('.multiselect__single').nth(2)
        this.stagePrep =Selector('span').withText('Preparation').nth(1)
        this.stageFM =Selector('span').withText('Field Measurement').nth(1)
        this.stageOrdering =Selector('span').withText('Ordering').nth(1)



        //Below are the Shipping selectors which might be useful later.
        // this.shipButton = Selector('.fa.fa-truck.fa-2x.fa-1x.fa');
        // this.shipItemButton = Selector('.fas.m-r-5.fa.fa-truck');
        // this.shipNext = Selector('button').withText('Next');
        // this.shipOrderName = Selector('div').withText('Name').nth(37).find('.input');
        // this.shipID = Selector('div').withText('Tracking').nth(10).find('.input');
        // this.shipDateField = Selector('.control.has-icons-left.is-clearfix').find('.input');
        // this.deliverDateField = Selector('div').withText('Delivery Location').nth(17).find('.input');
        // this.deliveryLocationField = Selector('div').withText('Delivery Location').nth(17).find('.multiselect__single');
        // this.shipCreate = Selector('button').withText('Create');
    }

    async movement(kind,stage){
        if(kind==='forward'){
            await this.forward(stage);
        }
        else if(kind==='backward'){
            await this.backward(stage);
        }
    }
    async forward(stage){
        if(stage==='Prep'){
        await t  
            .click(this.forwardPaperPlane)
            .click(this.forwardItemPaperPlane)
            .click(this.stageDD)
            .click(this.stagePrep)
            .click(this.selectAllItems)
            .click(this.modalMove)
        }
        else if(stage==='FM'){
            await t  
            .click(this.forwardPaperPlane)
            .click(this.forwardItemPaperPlane)
            .click(this.stageDD)
            .click(this.stageFM)
            .click(this.selectAllItems)
            .click(this.modalMove)
        }
        else if(stage==='Ordering'){
            await t  
            .click(this.forwardPaperPlane)
            .click(this.forwardItemPaperPlane)
            .click(this.stageDD)
            .click(this.stageOrdering)
            .click(this.selectAllItems)
            .click(this.modalMove)
            }
    }
    async backward(){
        if(stage==='Prep'){
            await t  
            .click(this.backwardPaperPlane)
            .click(this.backwardItemPaperPlane)
            .click(this.stageDD)
            .click(this.stagePrep)
            .click(this.selectAllItems)
            .click(this.modalMove)
        }
        if(stage==='FM'){
            await t  
            .click(this.backwardPaperPlane)
            .click(this.backwardItemPaperPlane)
            .click(this.stageDD)
            .click(this.stageFM)
            .click(this.selectAllItems)
            .click(this.modalMove)
        }
        if(stage==='Ordering'){
            await t  
            .click(this.backwardPaperPlane)
            .click(this.backwardItemPaperPlane)
            .click(this.stageDD)
            .click(this.stageOrdering)
            .click(this.selectAllItems)
            .click(this.modalMove)
        }
    }
}