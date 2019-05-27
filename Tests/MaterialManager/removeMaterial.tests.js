import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
import Role from '../../Helpers/Roles'

import Remove from "../../PageObjects/RemovePO.po";
// import Movement from "../../PageObjects/DocumentsPO";

const removeCard = new Remove();

fixture`Material Manager`// declare the fixture
    .beforeEach(async t => {
        await t.wait(500).useRole(Role.Roles())
    });


// const movement = new Movement();

test('Remove Card', async t => {
    await t
        .expect(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2).exists).ok()
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2))
        .click(Selector('a').withText('MATERIAL MANAGER'))
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
        .wait(4000)
    await removeCard.remove('new-02');
    await t.wait(2000);
})

