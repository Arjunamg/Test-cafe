import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';


export default class importItem {
    constructor(stage) {
        if(stage==='planning'){
            this.firstTab = Selector('span').withText('INFO')
        }
        else this.firstTab = Selector('span').withText('DESCRIPTION')
        // this.descripTab = Selector('span').withText('DESCRIPTION')
        this.excelButton = Selector('div').withText('ITEM ID').nth(7).find('.fas.m-t-3.fa-file-excel')
        this.chooseFile = Selector('button').withText('Choose File')
        this.Next = Selector('button').withText('Next')
        this.project = Selector('.multiselect__tags').nth(3).find('.multiselect__single')
        this.location = Selector('.multiselect__tags').nth(4).find('span').withText('Select option')
    }
    async itemImport(excelItem) {
        // const file = await excelItem;
        // console.log('excelItem',excelItem);
        // console.log('file',file);
        await t
            .click(this.firstTab)
            .click(this.excelButton)
            .click(this.chooseFile)
            .setFilesToUpload(Selector('.c-hide'), [excelItem])
            // .click(Selector('.multiselect__tags').nth(9).find('span').withText('Select option'))
            // .click(this.id)
            // .click(this.matchLevel)
            // .click(Selector('.multiselect__tags').nth(11).find('span').withText('Select option'))
            // .click(this.matchZone)
            .click(this.Next)   

    }
    async inventoryImport(excelItem){
        await t 
            .click(Selector('th').withText('ACTIONS').find('.icon'))
            .click(this.chooseFile)
            .setFilesToUpload(Selector('.c-hide'), [excelItem])
            .click(this.project)
            .click(Selector('span').withText('app test').nth(4))
            .click(this.location)
            .click(Selector('span').withText('lak loc1').nth(4))
            .click(this.Next)   
    }
}
