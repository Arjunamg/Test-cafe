import { Selector, t } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
import Role from '../../Helpers/Roles'
import CreateShip from "../../PageObjects/moveToShipping.po";


fixture`Material Manager`// declare the fixture
    .beforeEach(async t => {
        // console.log(await localStorageGet('auth-token'))
        await t.wait(500).useRole(Role.Roles())
        // console.log(await localStorageGet('auth-token'), GC_Role.stateSnapshot.storages)
    });

const createShip = new CreateShip();

test('Move To Shipping', async t => {
    await t
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2))
        .click(Selector('a').withText('MATERIAL MANAGER'))
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
        .click(Selector('a').withText('ORDERING'))
        .typeText(Selector('.input.p-r-25'), 'name')
        .wait(3000)
    await createShip.moveToShip();
});
