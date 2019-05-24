import { Selector, t } from 'testcafe';
import Project from '../../PageObjects/ProjectCreation.po'
import Search from '../../PageObjects/GlobalSearch.po'
const project = new Project();
const search = new Search();

export default {
    ProjectAdd:async(pData)=>{
        await t.navigateTo('https://stage.manufacton.com/#/settings/projects');
        await project.create(pData)
        await search.search(pData.projName)
        await t 
            .click(project.projectSelectors.openProject)

            .expect(project.projectSelectors.projName.withText(pData.projName).textContent).ok()
            .expect(project.projectSelectors.lscsz.withText(pData.locName).textContent).ok()
            .expect(project.projectSelectors.lscsz.withText(pData.streetName).textContent).ok()
            .expect(project.projectSelectors.lscsz.withText(pData.cityName).textContent).ok()
            .expect(project.projectSelectors.lscsz.withText(pData.stateName).textContent).ok()
            .expect(project.projectSelectors.lscsz.withText(pData.zip).textContent).ok()
            .expect(project.projectSelectors.lvlField.withText(pData.lvl).textContent).ok()
            .expect(project.projectSelectors.zoneField.withText(pData.zone).textContent).ok()


            .click(project.projectSelectors.projSettingsTab)
            .expect(project.projectSelectors.aProjId.withText(pData.projId).textContent).ok()

            .click(project.projectSelectors.projMembersTab)
        await search.search(pData.memName)
        await t
            .expect(Selector('td').withText(pData.memName).nth(0)()).ok()

            .click(project.projectSelectors.projCompsTab)
        await search.search(pData.compName)
        await t
            .expect(Selector('td').withText(pData.compName).textContent).ok()

            .click(project.projectSelectors.projLocTab)
        await search.search(pData.dLocName)
        await t
            .expect(project.projectSelectors.aLocFields.withText(pData.dLocName)()).ok()
            .expect(project.projectSelectors.aLocFields.withText(pData.dOwnerName)()).ok()
            .expect(project.projectSelectors.aLocFields.withText(pData.dStreetName)()).ok()
            .expect(project.projectSelectors.aLocFields.withText(pData.dCityName)()).ok()
            .expect(project.projectSelectors.aLocFields.withText(pData.dStateName)()).ok()
            .expect(project.projectSelectors.aLocFields.withText(pData.dZipName)()).ok()
        await search.search(pData.dImportName)
        await t
            .expect(project.projectSelectors.aLocFields.withText(pData.dImportName)()).ok()
    },
}