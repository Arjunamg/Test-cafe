import { Selector,ClientFunction, Role } from "testcafe";
import createMaterial from '../Tests/MaterialManager/createMaterial';
import edit from '../Tests/MaterialManager/editCard'
import common from '../Tests/common.test'
import Feeder from '../Helpers/Feeder';
import GC_Role from '../Helpers/Roles';
import Navi from '../Helpers/Navigator'
import invrntoryImport from '../Tests/InventoryManager/importInventoryItems.tests'


// const urlNav = ClientFunction(url => {
//   location.href = url;
//   location.reload(true);
// });
// const url = "https://stage.manufacton.com/#/materials/preparation";
// const GC_Role = new Role(
//   BasicParams.url,
//   async t => {
//     await t
//       .typeText(Selector('input[type="email"]'), BasicParams.email)
//       .typeText(Selector('input[type="password"]'), BasicParams.password)
//       .pressKey("enter");
//     await urlNav(url);
//   },
//   { preserveUrl: true }
// );

fixture`Material to Shipping`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
      .wait(500).useRole(GC_Role());
  });

test('Material to Shipping', async t => {
  /*Material Card creation with:
    1. Order Level Dates and Level and zone
    2. 5 items, each with FM required and item notes
    3. Checklist for order*/
  await Navi.navigator('preparation')
  await createMaterial.createMaterial(Feeder.materialOrderName);
  await common.search(Feeder.materialOrderName);
  //Function for splitting the order
  await common.split(`Split-of-${Feeder.materialOrderName}`);
  await common.clearSearch();
  await common.search(Feeder.materialOrderName);
  //Function for Cloning the Order
  await common.clone();
  await common.search(`Clone Of ${Feeder.materialOrderName}`);
  await common.clearSearch();
  //Function for Combining Order
  await common.combine(`${Feeder.materialOrderName}`,`Split-of-${Feeder.materialOrderName}`);
  await common.search(`Clone Of ${Feeder.materialOrderName}`);
  //Function For Removing the material order
  await common.remove('material');
  await common.clearSearch();
  await common.search(Feeder.materialOrderName);
  //Function for Moving the order To FM
  await common.move('forward','FM');
  await common.clearSearch();
  await Navi.navigator('fm') 
  await common.search(Feeder.materialOrderName);
  await t.wait(1000);
  //Function for Editing the order in FM
  await edit.editCard(Feeder.materialOrderName);
  await common.search(Feeder.materialOrderName);
  //Function for Moving the order To Ordering
  await common.move('forward','Ordering');
  await Navi.navigator('ordering')
  await common.search(Feeder.materialOrderName);
  //Function for Create Shipping 
  await common.ship('material');
  await Navi.navigator('ship-order')
  await common.search(Feeder.materialOrderName);
})




