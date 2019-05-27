import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
import Role from '../../Helpers/Roles'
import Clone from "../../PageObjects/ClonePO.po";


fixture`Material Manager`// declare the fixture
    .beforeEach(async t => {
        // console.log(await localStorageGet('auth-token'))
        await t.wait(500).useRole(Role())
        // console.log(await localStorageGet('auth-token'), GC_Role.stateSnapshot.storages)
    });

const clone = new Clone();

test('Clone', async t => {
    await t
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2))
        .click(Selector('a').withText('MATERIAL MANAGER'))
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
        .typeText(Selector('.input.p-r-25'), 'Clone Of Material Order')
        .wait(4000)
    await clone.clone()
});
