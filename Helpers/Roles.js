import { Selector, ClientFunction, Role } from 'testcafe'; 
import BasicParams from './BasicParams';
const urlNav = ClientFunction(url => {location.href = url; location.reload(true)});
const url = 'https://app.manufacton.com/#/';

export default function(){
  const GC_Role = new Role(BasicParams.url, async t => {
      await t
          .typeText(Selector('input[type="email"]'), BasicParams.email)
          .typeText(Selector('input[type="password"]'), BasicParams.password)
          .pressKey('enter')
      await urlNav(url);
  }, {preserveUrl: true});
  return GC_Role;
}