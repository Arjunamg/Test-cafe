import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';


export default class importItem {
    constructor() {
        this.excelButton = Selector('div').withText('ITEM ID').nth(7).find('.fas.m-t-3.fa-file-excel')
        this.chooseFile = Selector('button').withText('Choose File')
        this.Next = Selector('button').withText('Next')
    }
    async itemImport(excelItem) {
        await t
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
}
