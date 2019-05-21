import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
import Role from '../../Helpers/Roles'

import Docs from "../../PageObjects/DocumentsPO.po";
import ImportItem from "../../PageObjects/ImportItemPO.po";
import Clone from "../../PageObjects/ClonePO.po";
// import Movement from "../../PageObjects/DocumentsPO";


fixture`Material Manager`// declare the fixture
    .beforeEach(async t => {
        await t.wait(500).useRole(Role.Roles())
    });

const docs = new Docs();
const importItem = new ImportItem();
const clone = new Clone();
// const movement = new Movement();

test("Edit Card", async t => {
    let row = Selector('tr')
    let rowCount = await row.count
    await t
        .expect(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2).exists).ok()
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2))
        .click(Selector('a').withText('MATERIAL MANAGER'))
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
        .click(Selector('span').withText('FIELD MEASUREMENT'))
        .click(Selector('.columns').find('div').withText('Portable buildings'))
    await docs.addDocs('Portable buildings', '/home/access/TestCafeStudio/stage-manufacton-com/_uploads_/500 items Prefab.xlsx', 'item doc', 'https://www.google.com',
        '/home/access/TestCafeStudio/stage-manufacton-com/_uploads_/500 items Prefab.xlsx', 'order doc', 'https://www.amazon.com')
    await importItem.itemImport('/home/access/TestCafeStudio/stage-manufacton-com/_uploads_/3 items 5.xlsx')
    await t
        .click(Selector('span').withText('FIELD MEASUREMENT'))
        for (let i = 0; i < rowCount; i++) {
            await t.click(Selector('.has-text-centered.check-box').nth(i))
        }
        await t.click(Selector('.fas.fa-check'));
});

