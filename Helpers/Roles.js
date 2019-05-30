import { Selector, ClientFunction, Role } from 'testcafe'; 
import Feeder from './Feeder';
const urlNav = ClientFunction(url => {location.href = url; location.reload(true)});
const url = 'https://stage.manufacton.com/#/';

export default function(){
  const GC_Role = new Role(Feeder.url, async t => {
      await t
          .typeText(Selector('input[type="email"]'), Feeder.email)
          .typeText(Selector('input[type="password"]'), Feeder.password)
          .pressKey('enter')
      await urlNav(url);
  }, {preserveUrl: true});
  return GC_Role;
}