import { Selector, t } from 'testcafe';
import Search from '../../PageObjects/GlobalSearch.po'
import ClearSearch from '../../PageObjects/ClearSearch.po'
import CompProfile from '../../PageObjects/CompanyProfile.po'
import Navi from '../../Helpers/Navigator'
const profile = new CompProfile();
const search = new Search();
const clearSearch = new ClearSearch();


//The commented out lines are for sending member,company,DeliveyLoc name after those tests run first, for now it is hard coded.
export default {
    CompanyProfileEdit : async(compEditData) => {
        await Navi.navigator('company-profile')
        await profile.companyEdit(compEditData)
        await t
            .click(Selector('span').withText('COMPANY INFO'))
            .expect(Selector('span').withText(compEditData.compName).textContent).ok()
            .expect(Selector('.is-pulled-left').nth(12).find('p').withText(compEditData.a1Street).textContent).ok()
            .expect(Selector('.is-pulled-left').nth(12).find('p').withText(compEditData.a1City).textContent).ok()
            .expect(Selector('.is-pulled-left').nth(12).find('p').withText(compEditData.a1State).textContent).ok()
            .expect(Selector('.is-pulled-left').nth(12).find('p').withText(compEditData.a1Country).textContent).ok()
            .expect(Selector('.is-clearfix.m-b-15.m-r-10').nth(1).find('span').withText(compEditData.a1Phone).textContent).ok()
            .expect(Selector('.is-pulled-left').nth(15).find('p').withText(compEditData.a2Street).textContent).ok()
            .expect(Selector('.is-pulled-left').nth(15).find('p').withText(compEditData.a2City).textContent).ok()
            .expect(Selector('.is-pulled-left').nth(15).find('p').withText(compEditData.a2State).textContent).ok()
            .expect(Selector('.is-pulled-left').nth(15).find('p').withText(compEditData.a2Country).textContent).ok()
            .expect(Selector('.column').nth(8).find('span').withText(compEditData.a2Phone).nth(2).textContent).ok()
            .expect(Selector('span').withText(compEditData.billingName).textContent).ok()
            .expect(Selector('span').withText(compEditData.billingEmail).textContent).ok()
            .expect(Selector('span').withText(compEditData.manufRuns).nth(0).textContent).ok()
            .click(profile.locTab)
        await search.search(compEditData.locName);
        await t
            .expect(Selector('td').withText(compEditData.locName).nth(0).textContent).ok()
            .expect(Selector('td').withText(compEditData.locOwnerName).nth(0).textContent).ok()
            .expect(Selector('td').withText(compEditData.locStreetName).nth(0).textContent).ok()
            .expect(Selector('td').withText(compEditData.locCityName).nth(0).textContent).ok()
            .expect(Selector('td').withText(compEditData.locStateName).nth(0).textContent).ok()
            .expect(Selector('td').withText(compEditData.locZip).nth(5).textContent).ok()
            .click(profile.giTab)
            .click(profile.giFlyout)
            .expect(Selector('.vuetable-body').nth(1).find('td').withText(compEditData.giLocName).textContent).ok()
    },
}