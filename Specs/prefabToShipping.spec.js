import { Selector,ClientFunction, Role } from "testcafe";
import createPrefab from '../Tests/PrefabPlanner/createPrefab.test';
import orderName from '../Helpers/RandomNames';
import BasicParams from '../Helpers/BasicParams';
import GC_Role from '../Helpers/Roles';
import prefabCreate from '../Tests/PrefabPlanner/createPrefab.test'
import editMfCard from '../Tests/ProductionManager/editManufacturingCard.tests';
import common from './../Tests/common.test'
import ClearField from "../PageObjects/clearField.po";
const clearField = new ClearField();

const name = orderName.name();


fixture`Material Manager`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
      .wait(500).useRole(GC_Role());
  });

test('Prefab to Shipping', async t => {
  /*PRefab Card Creation*/
  await t.navigateTo('https://stage.manufacton.com/#/prefabs-list')
  await prefabCreate.createPrefab(name);
  await t.wait(1000);
  await common.search(name);
  await t.wait(1000);
  await common.clone();
  await t.wait(1000);
  await common.search(`Clone Of ${name}`);
  await common.remove('prefabs');
  await common.clearSearch();
  await common.search(name);
  await t.wait(1000);
  await common.move('forward','PO',`Planning-to-Shipping-${name}`);
  await t.navigateTo('https://stage.manufacton.com/#/orders-list')
  await common.search(`Planning-to-Shipping-${name}`);
  await t.wait(1000);
  await common.split(`Split-of-Planning-to-Shipping-${name}`);
  await common.search(`Split-of-Planning-to-Shipping-${name}`);
  await common.clearSearch();
  await common.combine(name,`Split-of-Planning-to-Shipping-${name}`);
  await common.search(name);
  await t
    .click(Selector('.control').nth(26).find('.button.is-primary.has-tooltip'))
  await clearField.clearField('.input.is-size-5')
  await t
    .typeText(Selector('.input.is-size-5'), `Planning-to-Shipping-${name}`)
    .click(Selector('.fas.fa-check'))
    .wait(1000);
  await common.clearSearch();
  await common.search(`Planning-to-Shipping-${name}`);
  await common.move('forward','Detailing');
  await t.navigateTo('https://stage.manufacton.com/#/manager/detailing')
  await common.search(`Planning-to-Shipping-${name}`);
  await t.wait(1000);
  await common.move('forward','Manufacturing');
  await t.navigateTo('https://stage.manufacton.com/#/manager/manufacturing')
  await common.search(`Planning-to-Shipping-${name}`);
  await editMfCard.editManufacturingCard(`Planning-to-Shipping-${name}`);
  await t.wait(1000);
  await common.search(`Planning-to-Shipping-${name}`);
  await t.wait(1000);
  await common.move('forward','QA');
  await t.click(Selector('button').withText('OK'));
  await t.navigateTo('https://stage.manufacton.com/#/manager/qa')
  await common.search(`Planning-to-Shipping-${name}`);
  await t.wait(7000);
  await common.ship('prefab');
  await t.navigateTo('https://stage.manufacton.com/#/scm/shipping/order-view')
  await common.search(`Planning-to-Shipping-${name}`); 
})




