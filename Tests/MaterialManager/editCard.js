import { Selector, t, ClientFunction } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
import Role from '../../Helpers/Roles'

import Docs from "../../PageObjects/DocumentsPO.po";
import ImportItem from "../../PageObjects/ImportItemPO.po";
import Clone from "../../PageObjects/ClonePO.po";
// import Movement from "../../PageObjects/DocumentsPO";
import Doc from '../../Helpers/DocLink'

const docs = new Docs();
const importItem = new ImportItem();
// const movement = new Movement();

// const browserscroll = ClientFunction(function() {
//     //  window.scrollBy(0, 100);
//     window.scrollBy(0,0)

//       //document.scrollIntoView(true)
//   })

export default {
    editCard: async (name) => {
        await t
        .wait(2000);
        // await browserscroll();
        // await t.wait(2000);
        await t .click(Selector('td').withText(name));
        await docs.addDocs( Doc.docPath(), 'item doc', 'https://www.google.com',
        Doc.docPath(), 'order doc', 'https://www.amazon.com')
        // await importItem.itemImport('/home/access/TestCafeStudio/stage-manufacton-com/_uploads_/3 items 5.xlsx')
        await t
            .click(Selector('span').withText('FIELD MEASUREMENT'))
        for (let i = 0; i < 2; i++) {
            await t.click(Selector('.has-text-centered.check-box').nth(i))
        }
        await t
        .click(Selector('.fas.fa-check'))
        .wait(2000)
        .click(Selector('.fas.fa-columns.fa-lg'))
        .click(Selector('label').withText('Project').find('.check'))
        .click(Selector('.fas.fa-columns.fa-lg'));
    }
}
