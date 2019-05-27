import { Selector, t } from "testcafe";
import Search from "../PageObjects/GlobalSearch.po";
const search = new Search();

//The commented out lines are for sending member,company,DeliveyLoc name after those tests run first, for now it is hard coded.
export default class projectSelectors {
    constructor() {
        Object.assign(this, {
        addNewPMCL : Selector('.fas.fa-plus.m-t-3-4'),
        projectName : Selector('.control.m-b-15.is-clearfix').find('.input'),
        locName : Selector('.control.m-b-15.is-clearfix').nth(1).find('.input'),
        streetName : Selector('.control.m-b-15.is-clearfix').nth(2).find('.input'),
        cityName : Selector('.control.m-b-15.is-clearfix').nth(3).find('.input'),
        stateName : Selector('.control.m-b-15.is-clearfix').nth(4).find('.input'),
        zipField : Selector('.control.m-b-15.is-clearfix').nth(5).find('.input'),
        levelField : Selector('.input').nth(7),
        zoneField : Selector('.input').nth(8),
        projSettingsTab : Selector('span').withText('COMPANY PROJECT SETTINGS'),
        projIdField : Selector('.control.is-spaced.m-b-15.is-clearfix').find('.input'),
        saveProj : Selector('.fa.fa-check.fa-lg'),
        editProj : Selector('.fa.fa-pen.fa-lg'),
        projMembersTab : Selector('.tabs.is-medium').nth(1).find('a').withText('MEMBERS'),
        memberModalSearch : Selector('div').withText('Select Users').nth(8).find('.input.p-r-25'),
        memberCheckbox : Selector('#checkbox'),
        mlImportButton : Selector('button').withText('Import'),
        memberAddAssert : Selector('td').withText('Check member 1'),
        projCompsTab : Selector('.tabs.is-medium').nth(1).find('span').withText('COMPANIES'),
        compModalSearch : Selector('div').withText('Invite Existing Companies').nth(8).find('.input.p-r-25'),
        compCheckbox : Selector('.checkbox').find('input'),
        compInvitButton : Selector('button').withText('Invite'),
        compAddAssert : Selector('td').withText('App14'),
        projLocTab : Selector('span').withText('DELIVERY LOCATIONS'),
        locNameField : Selector('.vuetable-component').find('.input'),
        locOwnerField : Selector('.vuetable-component').nth(1).find('.input'),
        locStreetField : Selector('.vuetable-component').nth(2).find('.input'),
        locCityField : Selector('.vuetable-component').nth(3).find('.input'),
        locStateField : Selector('.vuetable-component').nth(4).find('.input'),
        locZipField : Selector('.vuetable-component').nth(5).find('.input'),
        projLocSave : Selector('.fas.fa-check'),
        importLoc : Selector('i').withAttribute('class', /fas fas fa\-copy\s+m\-t\-3\-4/),
        // importLocMocdalSearch : Selector('div').withText('Import Company Locations').nth(8).find('.input.p-r-25'),
        importLocModalCheckbox : Selector('#checkbox').nth(0),
        // importLocButton : Selector('button').withText('Import'),


        openProject : Selector('.icon').nth(19).find('.fas.fa-external-link-alt'),
        aProjName : Selector('h1'),
        aLscsz : Selector('li'),
        aLvlField : Selector('.tag').find('span'),
        aZoneField : Selector('.tag').nth(1).find('span'),
        aProjId : Selector('p'),
        aLocFields : Selector('.vuetable-body').find('td'),
        });
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
        // await search.memberModalSearch(pData.memName);
        await search.memberModalSearch('Name');
        await t
            .click(this.memberCheckbox)
            .click(this.mlImportButton)

            .click(this.projCompsTab)
            .click(this.addNewPMCL)
        //await search.search(pData.compName);
        await search.compModalSearch('Comp 1');
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
        //await search.search(pData.dImportName)
        await search.locModalSearch('Loc Name')
        await t
            .click(this.importLocModalCheckbox)
            .click(this.mlImportButton)
                   
    }
}