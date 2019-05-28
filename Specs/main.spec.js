import { Selector,ClientFunction, Role } from "testcafe";
import createMaterial from './../Tests/MaterialManager/createMaterial';
import createPrefab from './../Tests/PrefabPlanner/createPrefab.test';
import edit from './../Tests/MaterialManager/editCard'
import common from './../Tests/common.test'
import orderName from './../Helpers/RandomNames';
import BasicParams from './../Helpers/BasicParams';
import GC_Role from './../Helpers/Roles';
import editMfCard from '../Tests/ProductionManager/editManufacturingCard.tests';





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

const name = orderName.name();


fixture`Material Manager`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
      .wait(500).useRole(GC_Role());
  });

test('Material', async t => {
  /*Material Card creation with:
    1. Order Level Dates and Level and zone
    2. 5 items, each with FM required and item notes
    3. Checklist for order*/
  await t.navigateTo('https://stage.manufacton.com/#/materials/preparation')
  await createMaterial.createMaterial(name);
  await common.search(name);
  //Function for splitting the order
  await common.split(`Split-of-${name}`);
  await common.clearSearch();
  await common.search(name);
  //Function for Cloning the Order
  await common.clone();
  await common.search(`Clone Of ${name}`);
  await common.clearSearch();
  //Function for Combining Order
  await common.combine(`${name}`,`Split-of-${name}`);
  await common.search(`Clone Of ${name}`);
  //Function For Removing the material order
  await common.remove();
  await common.clearSearch();
  await common.search(name);
  //Function for Moving the order To FM
  await common.move('forward','FM');
  await common.clearSearch();
  await t.navigateTo('https://stage.manufacton.com/#/materials/qa');
  await common.search(name);
  //Function for Editing the order in FM
  await edit.editCard(name);
  await common.search(name);
  //Function for Moving the order To Ordering
  await common.move('forward','Ordering');
  await t.navigateTo('https://stage.manufacton.com/#/materials/ordering');
  await common.search(name);
  //Function for Create Shipping 
  await common.ship();
  await t.navigateTo('https://stage.manufacton.com/#/scm/shipping/order-view');
  await common.search(name);
})




