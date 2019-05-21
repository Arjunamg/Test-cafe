import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
import Role from '../../Helpers/Roles'

import Docs from "../../PageObjects/DocumentsPO";
import ImportItem from "../../PageObjects/ImportItemPO";
import Clone from "../../PageObjects/ClonePO";
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
    await t
        .expect(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2).exists).ok()
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2))
        .click(Selector('a').withText('MATERIAL MANAGER'))
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
    await docs.addDocs('new-02', '/home/access/TestCafeStudio/stage-manufacton-com/_uploads_/500 items Prefab.xlsx', 'item doc', 'https://www.google.com',
        '/home/access/TestCafeStudio/stage-manufacton-com/_uploads_/500 items Prefab.xlsx', 'order doc', 'https://www.amazon.com')
    await importItem.itemImport('/home/access/TestCafeStudio/stage-manufacton-com/_uploads_/3 items 5.xlsx')
    await t.click(Selector('.fas.fa-check'));
});

test('Clone Card', async t => {
    await t
        .expect(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2).exists).ok()
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2))
        .click(Selector('a').withText('MATERIAL MANAGER'))
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
    await clone.clone('prep');
})

