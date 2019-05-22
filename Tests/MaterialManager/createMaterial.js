import { Selector, t } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
import Create from "../../PageObjects/matCreatePO.po";
import addItem from "../../PageObjects/AddItemPO.po";
import Checklist from "../../PageObjects/ChecllistPO.po";

const create = new Create();
const item = new addItem();
const checklist = new Checklist();

export default {
        createMaterial:async(name)=>{
        await t 
            .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span').nth(2))
            .click(Selector('a').withText('MATERIAL MANAGER'))
            .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
            .expect(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]').find('.icon').exists).ok()
            .click(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]').find('.icon'))
        await create.create(name, '8', '16', '23', '30', 'l-01', 'z-01')
        item.add('001', 'item-01', '23', '24', 'item-note')
        item.add('002', 'item-02', '23', '24', 'item-note')
        item.add('003', 'item-03', '23', '24', 'item-note')
        item.add('004', 'item-04', '23', '24', 'item-note')
        item.add('005', 'item-05', '23', '24', 'item-note')
        // await importItem.itemImport('/home/access/TestCafeStudio/stage-manufacton-com/_uploads_/3 items 5.xlsx')
        checklist.addItemChecklist('checklist-01', '24')
        await t
        .click(Selector('.fas.fa-check'), {
            modifiers: {
                ctrl: true
            }
        })
        .wait(2000)
        .expect(create.orderName.value).contains(name)
        .expect(create.orderBy.value).contains("8")
        .expect(create.availBy.value).contains("16")
        .expect(create.ship.value).contains("23")
        .expect(create.onsite.value).contains("30")
        .expect(create.level.value).contains("l-01")
        .expect(create.zone.value).contains("z-01")
        await t.click(Selector('.fas.fa-check'));
    },  
}
