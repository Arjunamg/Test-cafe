import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
import Role from '../../Helpers/Roles'
import Create from "../../PageObjects/matCreatePO";
import addItem from "../../PageObjects/AddItemPO";
import Checklist from "../../PageObjects/ChecllistPO";


fixture`Material Manager`// declare the fixture
    .beforeEach(async t => {
        // console.log(await localStorageGet('auth-token'))
        await t.wait(500).useRole(Role.Roles())
        // console.log(await localStorageGet('auth-token'), GC_Role.stateSnapshot.storages)
    });

const create = new Create();
const item = new addItem();
const checklist = new Checklist();

test('Create Material', async t => {
    await t 
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2))
        .click(Selector('a').withText('MATERIAL MANAGER'))
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
        .expect(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]').find('.icon').exists).ok()
        .click(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]').find('.icon'))
        .expect(create.orderName.innerText).eql('')
        .expect(create.orderBy.innerText).eql('')
        .expect(create.availBy.innerText).eql('')
        .expect(create.ship.innerText).eql('')
        .expect(create.onsite.innerText).eql('')
        .expect(create.level.innerText).eql('')
        .expect(create.zone.innerText).eql('')
    await create.create('new-03', '8', '16', '23', '30', 'l-01', 'z-01')
    item.add('8', 'item-01', '23', '24', 'item-note')
    checklist.addItemChecklist('checklist-01', '24')
    await t.click(Selector('.fas.fa-check'));
});

// test('Move To FM', async t => {
//    await t
//        .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2))
//        .click(Selector('a').withText('MATERIAL MANAGER'))
//        .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
// });