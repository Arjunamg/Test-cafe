import { Selector, t } from "testcafe";
import Search from "../PageObjects/GlobalSearch.po";
const search = new Search();

export default class projectSelectors {
    constructor() {
        this.addNewPMCL = Selector('.fas.fa-plus.m-t-3-4')
        this.projectName = Selector('.control.m-b-15.is-clearfix').find('.input')
        this.locName = Selector('.control.m-b-15.is-clearfix').nth(1).find('.input')
        this.streetName = Selector('.control.m-b-15.is-clearfix').nth(2).find('.input')
        this.cityName = Selector('.control.m-b-15.is-clearfix').nth(3).find('.input')
        this.stateName = Selector('.control.m-b-15.is-clearfix').nth(4).find('.input')
        this.zipField = Selector('.control.m-b-15.is-clearfix').nth(5).find('.input')
        this.levelField = Selector('.input').nth(7)
        this.zoneField = Selector('.input').nth(8)
        this.projSettingsTab = Selector('span').withText('COMPANY PROJECT SETTINGS')
        this.projIdField = Selector('.control.is-spaced.m-b-15.is-clearfix').find('.input')
        this.saveProj = Selector('.fa.fa-check.fa-lg')
        this.editProj = Selector('.fa.fa-pen.fa-lg')
        this.projMembersTab = Selector('.tabs.is-medium').nth(1).find('a').withText('MEMBERS')
        this.memberModalSearch = Selector('div').withText('Select Users').nth(8).find('.input.p-r-25')
        this.memberCheckbox = Selector('#checkbox')
        this.mlImportButton = Selector('button').withText('Import')
        this.memberAddAssert = Selector('td').withText('Check member 1')
        this.projCompsTab = Selector('.tabs.is-medium').nth(1).find('span').withText('COMPANIES')
        this.compModalSearch = Selector('div').withText('Invite Existing Companies').nth(8).find('.input.p-r-25')
        this.compCheckbox = Selector('.checkbox').find('input')
        this.compInvitButton = Selector('button').withText('Invite')
        this.compAddAssert = Selector('td').withText('App14')
        this.projLocTab = Selector('span').withText('DELIVERY LOCATIONS')
        this.locNameField = Selector('.vuetable-component').find('.input')
        this.locOwnerField = Selector('.vuetable-component').nth(1).find('.input')
        this.locStreetField = Selector('.vuetable-component').nth(2).find('.input')
        this.locCityField = Selector('.vuetable-component').nth(3).find('.input')
        this.locStateField = Selector('.vuetable-component').nth(4).find('.input')
        this.locZipField = Selector('.vuetable-component').nth(5).find('.input')
        this.projLocSave = Selector('.fas.fa-check')
        this.importLoc = Selector('i').withAttribute('class', /fas fas fa\-copy\s+m\-t\-3\-4/)
        // this.importLocMocdalSearch = Selector('div').withText('Import Company Locations').nth(8).find('.input.p-r-25')
        this.importLocModalCheckbox = Selector('#checkbox').nth(0)
        // this.importLocButton = Selector('button').withText('Import')


        this.openProject = Selector('.icon').nth(19).find('.fas.fa-external-link-alt')
        this.aProjName = Selector('h1')
        this.aLscsz = Selector('li')
        this.aLvlField = Selector('.tag').find('span')
        this.aZoneField = Selector('.tag').nth(5).find('span')
        this.aProjId = Selector('p')
        this.aLocFields = Selector('.vuetable-body').find('td')

    }
    async create(pData) {
        await t
            .click(this.addNewPMCL)

            .click(this.projectName)
            .typeText(this.projectName, pData.projName)
            
            .click(this.locName)
            .typeText(this.locName, pData.locName)

            .click(this.streetName)
            .typeText(this.streetName, pData.streetName)     
            
            .click(this.cityName)
            .typeText(this.cityName, pData.cityName)
            
            .click(this.stateName)
            .typeText(this.stateName, pData.stateName)
            
            .click(this.zipField)
            .typeText(this.zipField, pData.zip)

            .click(this.levelField)
            .typeText(this.levelField, pData.lvl)
            .pressKey('enter')

            .click(this.zoneField)
            .typeText(this.zoneField, pData.zone)
            .pressKey('enter')

            .click(this.projSettingsTab)
            .click(this.projIdField)
            .typeText(this.projIdField, pData.projId)

            .click(this.saveProj)

            .click(this.projMembersTab)
            .click(this.addNewPMCL)
        await search.search(pData.memName);
        await t
            .click(this.memberCheckbox)
            .click(this.mlImportButton)

            .click(this.projCompsTab)
            .click(this.addNewPMCL)
        await search.search(pData.compName);
        await t 
            .click(this.compCheckbox)
            .click(this.compInvitButton)

            .click(this.projLocTab)
            .click(this.addNewPMCL)
            .click(this.locNameField)
            .typeText(this.locNameField,pData.dLocName)
            .click(this.locOwnerField)
            .typeText(this.locOwnerField,pData.dOwnerName)
            .click(this.locStreetField)
            .typeText(this.locStreetField,pData.dStreetName)
            .click(this.locCityField)
            .typeText(this.locCityField,pData.dCityName)
            .click(this.locStateField)
            .typeText(this.locStateField,pData.dStateName)
            .click(this.locZipField)
            .typeText(this.locZipField,pData.dZipName)
            .click(this.projLocSave)

            .click(this.importLoc);
        await search.search(pData.dImportName)
        await t
            .click(this.importLocModalCheckbox)
            .click(mlImportButton)
                   
    }
}