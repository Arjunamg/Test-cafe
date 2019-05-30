import { Selector, t } from "testcafe";
import MemberAdd from "../../PageObjects/memberAdd.po";
import Search from "../../PageObjects/GlobalSearch.po";
import Navi from "../../Helpers/Navigator"

const memAdd = new MemberAdd();
const search = new Search();

export default {
  GlobalMemberAdd: async mData => {
    await Navi.navigator('members')
    await t.wait(2000);
    await memAdd.globalMemberAdd(mData);
    await search.search(mData.name);
    await t
      .expect(Selector('td').withText(mData.name).nth(0).textContent).ok()
      .expect(Selector('td').withText(mData.email).nth(0).textContent).ok();
    if (mData.admin) {
      await t
        .expect(memAdd.isAdmin.classNames).ok();
    } else {
        await t
        .expect(memAdd.notAdmin.classNames).ok();
    }
    await t
      .expect(Selector('td').withText(mData.email).nth(0).textContent).ok()
      .expect(Selector('td').withText(mData.phNo).nth(0).textContent).ok();
  }
};