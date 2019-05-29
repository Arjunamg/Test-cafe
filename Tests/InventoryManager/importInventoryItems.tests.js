import { Selector, t } from 'testcafe';
import itemImport from '../../PageObjects/ImportItemPO.po'

const importItem = new itemImport('inventory');

export default {
    importItems: async () => {
        await t
            .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
            .click(Selector('span').withText('INVENTORY MANAGER'))
            .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
        await importItem.inventoryImport('/home/access/TestCafeStudio/stage-manufacton-com/_uploads_/3 items 5.xlsx')
         await t
            .click(Selector('.icon-filter-off.m-t-1.has-tooltip'))
            .click(Selector('.multiselect').find('div').withText('Select option'))
            .click(Selector('li').withText('APP N PROJECT').find('.multiselect__option'))
            .click(Selector('.navbar-start.is-centered.is-mobile'))
            .wait(5000)    
    },
}