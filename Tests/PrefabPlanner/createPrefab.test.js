import { Selector, t } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';
import Create from "../../PageObjects/subHeader.po";
import addItem from "../../PageObjects/AddItemPO.po";
import Checklist from "../../PageObjects/ChecklistPO.po";
import ImportItem from "../../PageObjects/ImportItemPO.po";
import Doc from "../../Helpers/DocLink"

const create = new Create();
const item = new addItem();
const checklist = new Checklist();
const importItem = new ImportItem('planning');

export default {
    createPrefab: async (name) => {
        await t
            .wait(1000)
            .expect(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]').find('.icon').exists).ok()
            .click(Selector('[class^="button is-rounded image is-32x32 is-primary has-to"]').find('.icon'))
            .click(Selector('button').withText('Create'))
        await create.creatPrefab(name, '8', '29')
        for (let i = 0; i < 3; i++) {
            await item.addPrefabItems((i + 1).toString(), 'Prefab item '.concat(i+1), '10', 'l-01', 'z-01', '123', '22', '23', 'item-note')
        }
        // await item.addPrefabItems('1', 'item-01',  '10', 'l-01','z-01', '123', '22', '23', 'item-note')
        await importItem.itemImport(Doc.docPath())
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
