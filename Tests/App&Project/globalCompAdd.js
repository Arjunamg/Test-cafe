import { Selector, t } from "testcafe";
import CompAdd from "../../PageObjects/CompAdd.po";
import Search from "../../PageObjects/GlobalSearch.po";
import Navi from "../../Helpers/Navigator";

const compAdd = new CompAdd();
const search = new Search();

export default {
    GlobalCompAdd: async cData => {
    await Navi.navigator('companies')
    await t.wait(2000);
    await compAdd.globalCompAdd(cData);
    await search.search(cData.compName);
    await t
        .expect(Selector('td').withText(cData.compName).textContent).ok()
        .expect(Selector('td').withText(cData.compType).textContent).ok()
        .expect(Selector('td').withText(cData.compContact).textContent).ok()
        .expect(Selector('td').withText(cData.compEmail).textContent).ok()
        .expect(Selector('td').withText(cData.compPhNo).textContent).ok()
        .expect(Selector('td').withText('inactive').textContent).ok()
  }
};
