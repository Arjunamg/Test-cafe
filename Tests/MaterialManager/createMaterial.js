import { Selector, t } from 'testcafe';
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
    await create.create('Material Order', '8', '16', '23', '30', 'l-01', 'z-01')
    item.add('001', 'item-01', '23', '24', 'item-note')
    item.add('002', 'item-02', '23', '24', 'item-note')
    item.add('003', 'item-03', '23', '24', 'item-note')
    item.add('004', 'item-04', '23', '24', 'item-note')
    item.add('005', 'item-05', '23', '24', 'item-note')
    checklist.addItemChecklist('checklist-01', '24')
    await t
    .click(Selector('.fas.fa-check'), {
        modifiers: {
            ctrl: true
        }
    })
    .wait(2000)
    .expect(create.orderName.value).contains("Material Order")
    .expect(create.orderBy.value).contains("8")
    .expect(create.availBy.value).contains("16")
    .expect(create.ship.value).contains("23")
    .expect(create.onsite.value).contains("30")
    .expect(create.level.value).contains("l-01")
    .expect(create.zone.value).contains("z-01")
    await t.click(Selector('.fas.fa-check'));
});
