import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
fixture `das`
    .page `https://stage.manufacton.com`;
test('New Test', async t => {
    await t
        .typeText(Selector('.input.m-b-15'), 'ui@automation.comp')
        .pressKey('tab')
        .typeText(Selector('.control.has-icons-left').nth(1).find('.input'), 'Cricket!')
        .pressKey('enter')
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
        .click(Selector('a').withText('MATERIAL MANAGER'))
        .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span'))
        .click(Selector('.fas.fa-plus.m-t-3-4'))
        .typeText(Selector('.control.is-clearfix').find('.input'), 'Material ')
        .click(Selector('.control.has-icons-left.is-clearfix').find('.input'))
        .click(VueSelector('MfDate').find('a').withText('6'))
        .click(Selector('div').withText('Ship').nth(11).find('.input'))
        .click(VueSelector('MfDate').find('a').withText('20'))
        .click(Selector('div').withText('OnSite').nth(6).find('.input'))
        .click(VueSelector('MfDate').find('a').withText('27'))
        .click(Selector('.fas.fa-check'));
});