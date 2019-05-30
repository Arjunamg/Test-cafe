import { Selector,ClientFunction, Role } from "testcafe";
import createPrefab from '../Tests/PrefabPlanner/createPrefab.test';
import Feeder from '../Helpers/Feeder';
import GC_Role from '../Helpers/Roles';
import prefabCreate from '../Tests/PrefabPlanner/createPrefab.test'
import editMfCard from '../Tests/ProductionManager/editManufacturingCard.tests';
import common from './../Tests/common.test'
import ClearField from "../PageObjects/clearField.po";
import Navi from '../Helpers/Navigator'

const clearField = new ClearField();



fixture`Prefab to Shipping`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
      .wait(500).useRole(GC_Role());
  });

test('Prefab to Shipping', async t => {
  /*PRefab Card Creation*/
  await Navi.navigator('prefabs')
  await prefabCreate.createPrefab(Feeder.prefabOrderName);
  await t.wait(1000);
  await common.search(Feeder.prefabOrderName);
  await t.wait(1000);
  await common.clone();
  await t.wait(1000);
  await common.search(`Clone Of ${Feeder.prefabOrderName}`);
  await common.remove('prefabs');
  await common.clearSearch();
  await common.search(Feeder.prefabOrderName);
  await t.wait(1000);
  await common.move('forward','PO',`Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await Navi.navigator('po')
  await common.search(`Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await t.wait(1000);
  await common.split(`Split-of-Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await common.search(`Split-of-Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await common.clearSearch();
  await common.combine(Feeder.prefabOrderName,`Split-of-Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await common.search(Feeder.prefabOrderName);
  await t
    .click(Selector('.control').nth(26).find('.button.is-primary.has-tooltip'))
  await clearField.clearField('.input.is-size-5')
  await t
    .typeText(Selector('.input.is-size-5'), `Planning-to-Shipping-${Feeder.prefabOrderName}`)
    .click(Selector('.fas.fa-check'))
    .wait(1000);
  await common.clearSearch();
  await common.search(`Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await common.move('forward','Detailing');
  await Navi.navigator('detailing')
  await common.search(`Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await t.wait(1000);
  await common.move('forward','Manufacturing');
  await Navi.navigator('manufacturing')
  await common.search(`Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await editMfCard.editManufacturingCard(`Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await t.wait(1000);
  await common.search(`Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await t.wait(1000);
  await common.move('forward','QA');
  await t.click(Selector('button').withText('OK'));
  await Navi.navigator('qa')
  await common.search(`Planning-to-Shipping-${Feeder.prefabOrderName}`);
  await t.wait(7000);
  await common.ship('prefab');
  await Navi.navigator('ship-order')
  await common.search(`Planning-to-Shipping-${Feeder.prefabOrderName}`); 
})




