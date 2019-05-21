import { Selector, t } from "testcafe";

export default class addDocs {
    constructor() {
        this.Orderupload = Selector('button').withText('Add File')
        this.uploadDoc = Selector('span').withText('Upload A File')
        this.filename = Selector('div').withText('Add URL').nth(5).nth(5).find('div').find('div').find('.input')
        this.file = Selector('.control.has-icons-right').find('.input')
        this.itemupload = Selector('tr:nth-child(1)').find('.trigger')
        this.isPrivate = Selector('.check')
        this.add = Selector('a').withText('Add')

    }
    async addDocs(orderName, itemDoc, itemFileName, itemFile, orderDoc, orderFileName, orderFile) {
        await t
            // Search for Order and  Open it
            .typeText(Selector('.input.p-r-25'), orderName)
            .wait(5000)
            .click(Selector('.columns').find('div').withText(orderName))

            //  This for Order level Documents and File
            .click(this.Orderupload)
            .click(this.uploadDoc)
            .setFilesToUpload(Selector('label').withText('Upload A File').find('input'), [orderDoc])
            .click(this.Orderupload)
            .typeText(this.filename, orderFileName)
            .typeText(this.file, orderFile)
            .click(this.isPrivate)
            .click(this.add)

            //  This for Item level Documents and File
            .click(this.itemupload)
            .click(this.uploadDoc)
            .setFilesToUpload(Selector('label').withText('Upload A File').find('input'), [itemDoc])
            .click(this.itemupload)
            .typeText(this.filename, itemFileName)
            .typeText(this.file, itemFile)
            .click(this.isPrivate)
            .click(this.add)
    }
}
