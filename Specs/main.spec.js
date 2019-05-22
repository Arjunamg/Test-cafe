import { Selector,ClientFunction, Role } from "testcafe";
import createMaterial from './../Tests/MaterialManager/createMaterial';
import common from './../Tests/common.test'
import orderName from './../Helpers/RandomNames';
import BasicParams from './../Helpers/BasicParams';
import GC_Role from './../Helpers/Roles';

// const urlNav = ClientFunction(url => {
//   location.href = url;
//   location.reload(true);
// });
// const url = "https://app.manufacton.com/#/materials/preparation";
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
    await t.wait(500).useRole(GC_Role());
  });

test('Material', async t => {
  await createMaterial.createMaterial(name);
  await common.search(name);
  await common.split(`Split-of-${name}`);
  await common.clearSearch();
  await common.search(name);
  await common.clone();
  await common.search(`Clone-Of-${name}`);
  await common.clearSearch();
  await common.combine(`Split-of-${name}`,`Clone-Of-${name}`);
  await common.split(`Split-of-${name}`);
  await common.remove();
})



