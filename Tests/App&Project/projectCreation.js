/**
 * Created by Dinesh on 24/05/19.
 */

import { Selector, t } from 'testcafe';
import Project from '../../PageObjects/ProjectCreation.po'
import Search from '../../PageObjects/GlobalSearch.po'
import ClearSearch from '../../PageObjects/ClearSearch.po'
const project = new Project();
const search = new Search();
const clearSearch = new ClearSearch();


//The commented out lines are for sending member,company,DeliveyLoc name after those tests run first, for now it is hard coded.
export default {
    ProjectAdd : async(pData) => {
        await t.navigateTo('https://stage.manufacton.com/#/settings/projects');
        await project.create(pData)
        await t .wait(1000);
        await t.navigateTo('https://stage.manufacton.com/#/settings/projects');
        await search.search(pData.projName)
        await t 
            .click(project.openProject)

            .expect(project.aProjName.withText(pData.projName).textContent).ok()
            .expect(project.aLscsz.withText(pData.locName).textContent).ok()
            .expect(project.aLscsz.withText(pData.streetName).textContent).ok()
            .expect(project.aLscsz.withText(pData.cityName).textContent).ok()
            .expect(project.aLscsz.withText(pData.stateName).textContent).ok()
            .expect(project.aLscsz.withText(pData.zip).textContent).ok()
            .expect(project.aLvlField.withText(pData.lvl).textContent).ok()
            .expect(project.aZoneField.withText(pData.zone).textContent).ok()


            .click(project.projSettingsTab)
            .expect(project.aProjId.withText(pData.projId).textContent).ok()

            .click(project.projMembersTab)
        //await search.search(pData.memName)
        await search.search('Name')
        await t
            //.expect(Selector('td').withText(pData.memName).nth(0)()).ok()
            .expect(Selector('td').withText('Name').nth(0)()).ok()
        await clearSearch.clearSearch()

        await t.click(project.projCompsTab)
        //await search.search(pData.compName)
        await search.search('Comp 1')
        await t
            //.expect(Selector('td').withText(pData.compName).textContent).ok()
            .expect(Selector('td').withText('Comp 1').textContent).ok();
        await clearSearch.clearSearch();

        await t   
            .click(project.projLocTab)
        await search.search(pData.dLocName)
        await t
            .expect(project.aLocFields.withText(pData.dLocName)()).ok()
            .expect(project.aLocFields.withText(pData.dOwnerName)()).ok()
            .expect(project.aLocFields.withText(pData.dStreetName)()).ok()
            .expect(project.aLocFields.withText(pData.dCityName)()).ok()
            .expect(project.aLocFields.withText(pData.dStateName)()).ok()
            .expect(project.aLocFields.withText(pData.dZipName)()).ok();
        await clearSearch.clearSearch();
        //await search.search(pData.dImportName)
        await search.search('Loc Name')
        await t
            //.expect(project.aLocFields.withText(pData.dImportName)()).ok()
            .expect(project.aLocFields.withText('Loc Name')()).ok();
        await clearSearch.clearSearch();    
    },
}