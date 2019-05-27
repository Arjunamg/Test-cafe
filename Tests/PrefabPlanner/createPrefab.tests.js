import { Selector, t } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
import Create from "../../PageObjects/subHeaderPO.po";
import addItem from "../../PageObjects/AddItemPO.po";
import Checklist from "../../PageObjects/ChecllistPO.po";
import ImportItem from "../../PageObjects/ImportItemPO.po";


const create = new Create();
const item = new addItem();
const checklist = new Checklist();
const importItem = new ImportItem('planning');


export default {
    createPrefab: async (name) => {
        await t
            .click(Selector('[data-target="navbarBasicExample"].navbar-burger').find('span'))
            .click(Selector('a').withText('PREFAB PLANNER'))
            .click(Selector('[data-target="navbarBasicExample"].navbar-burger'))
            .expect(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]').find('.icon').exists).ok()
            .click(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]').find('.icon'))
            .click(Selector('button').withText('Create'))
        await create.creatPrefab(name, '8', '29')
        for (let i = 0; i < 3; i++) {
            await item.addPrefabItems((i + 1).toString(), 'Prefab item '.concat(i), '10', 'l-01', 'z-01', '123', '22', '23', 'item-note')
        }
        await importItem.itemImport('/home/access/TestCafeStudio/stage-manufacton-com/_uploads_/3 items 5.xlsx')
        checklist.addprefabChecklist('checklist-01', '16')
        await t
            .click(Selector('.fas.fa-check'), {
                modifiers: {
                    ctrl: true
                }
            })
            .wait(2000)
            .expect(create.orderName.value).contains(name)
            .expect(create.coordBy.value).contains("8")
            .expect(create.prefabOnsite.value).contains("29")
        await t.click(Selector('.fas.fa-check'));
    },
}
