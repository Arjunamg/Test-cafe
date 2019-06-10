import { Selector, t } from "testcafe";
import Search from "../PageObjects/GlobalSearch.po";
import Clear from "../Helpers/ClearField"
import CatID from "../PageObjects/CatlogIdAdd.po"

const catId = new CatID();
const clear = new Clear();
const search = new Search();

export default class CompanyProfile {
    constructor() {
        this.compEdit = Selector('.fa.fa-pen.fa-lg')
        this.compName = Selector('.control.m-b-15.is-clearfix').nth(3).find('.input')

        this.a1Street = Selector('.control.m-b-15.is-clearfix').nth(4).find('.input')
        this.a1City = Selector('.control.m-b-15.is-clearfix').nth(5).find('.input')
        this.a1State = Selector('.control.m-b-15.is-clearfix').nth(6).find('.input')
        this.a1Country = Selector('.control.m-b-15.is-clearfix').nth(7).find('.input')
        this.a1Phone = Selector('.control.is-clearfix').nth(8).find('.input')

        this.a2Street = Selector('.control.m-b-15.is-clearfix').nth(8).find('.input')
        this.a2City = Selector('.control.m-b-15.is-clearfix').nth(9).find('.input')
        this.a2State = Selector('.control.m-b-15.is-clearfix').nth(10).find('.input')
        this.a2Country = Selector('.control.m-b-15.is-clearfix').nth(11).find('.input')
        this.a2Phone = Selector('.control.is-clearfix').nth(13).find('.input')

        this.billingName = Selector('.control.m-b-15.is-clearfix').find('.input')
        this.billingEmail = Selector('.control.m-b-15.is-clearfix').nth(2).find('.input')

        this.manufRuns = Selector('div').withText('Default Manufacturing Runs').nth(7).find('.input')

        this.save = Selector('.fa.fa-check.fa-lg')

        this.locTab = Selector('span').withText('LOCATIONS')
        this.locAdd = Selector('th').withText('ACTIONS').find('.icon')
        this.locName = Selector('.vuetable-component').find('.input')
        this.locOwnerName = Selector('.vuetable-component').nth(1).find('.input')
        this.locStreetName = Selector('.vuetable-component').nth(2).find('.input')
        this.locCityName = Selector('.vuetable-component').nth(3).find('.input')
        this.locStateName = Selector('.vuetable-component').nth(4).find('.input')
        this.locZip = Selector('.vuetable-component').nth(5).find('.input')
        this.locSave = Selector('.fas.fa-check')

        this.giTab = Selector('a').withText('GENERAL INVENTORY')
        this.giFlyout = Selector('i').withAttribute('class', /fas\s+fa\-angle\-down has\-tooltip/)
        this.giLocAdd = Selector('.fas.fa-plus.m-t-3-4')
        this.giLocName = Selector('.vuetable-component').nth(3).find('.input')
        this.giOwnerName = Selector('.vuetable-component').nth(4).find('.input')
        this.giStreetName = Selector('.vuetable-component').nth(5).find('.input')
        this.giCityName = Selector('.vuetable-component').nth(6).find('.input')
        this.giStateName = Selector('.vuetable-component').nth(7).find('.input')
        this.giLocZip = Selector('.vuetable-component').nth(8).find('.input')
        this.giLocSave = Selector('div').withText('Rental').nth(10).find('.fas.fa-check')

        this.catIdTab = Selector('span').withText('CATALOG IDS')
    }
    async companyEdit(compEditData,catIdData) {
        await t
            .click(this.compEdit)
            

            .click(this.compName)
        await clear.clearField(this.compName)
        await t
            .typeText(this.compName, compEditData.compName)


            .click(this.a1Street)
        await clear.clearField(this.a1Street)
        await t
            .typeText(this.a1Street, compEditData.a1Street)

            .click(this.a1City)
        await clear.clearField(this.a1City)
        await t
            .typeText(this.a1City, compEditData.a1City)

            .click(this.a1State)
        await clear.clearField(this.a1State)
        await t
            .typeText(this.a1State, compEditData.a1State)

            .click(this.a1Country)
        await clear.clearField(this.a1Country)
        await t
            .typeText(this.a1Country, compEditData.a1Country)

            .click(this.a1Phone)
        await clear.clearField(this.a1Phone)
        await t
            .typeText(this.a1Phone, compEditData.a1Phone)

            
            .click(this.billingName)
        await clear.clearField(this.billingName)
        await t
            .typeText(this.billingName, compEditData.billingName)

            .click(this.billingEmail)
        await clear.clearField(this.billingEmail)
        await t
            .typeText(this.billingEmail, compEditData.billingEmail)

        
            .click(this.a2Street)
        await clear.clearField(this.a2Street)
        await t
            .typeText(this.a2Street, compEditData.a2Street)

            .click(this.a2City)
        await clear.clearField(this.a2City)
        await t
            .typeText(this.a2City, compEditData.a2City)

            .click(this.a2State)
        await clear.clearField(this.a2State)
        await t
            .typeText(this.a2State, compEditData.a2State)

            .click(this.a2Country)
        await clear.clearField(this.a2Country)
        await t
            .typeText(this.a2Country, compEditData.a2Country)

            .click(this.a2Phone)
        await clear.clearField(this.a2Phone)
        await t
            .typeText(this.a2Phone, compEditData.a2Phone)


            .click(this.manufRuns)
        await clear.clearField(this.manufRuns)
        await t
            .typeText(this.manufRuns, compEditData.manufRuns)
            .pressKey('enter')

            .click(this.save)


            .click(this.locTab)
            .click(this.locAdd)
            .typeText(this.locName, compEditData.locName)
            .typeText(this.locOwnerName, compEditData.locOwnerName)
            .typeText(this.locStreetName, compEditData.locStreetName)
            .typeText(this.locCityName, compEditData.locCityName)
            .typeText(this.locStateName, compEditData.locStateName)
            .typeText(this.locZip, compEditData.locZip)
            .click(this.locSave)


            .click(this.giTab)
            .click(this.giFlyout)
            .click(this.giLocAdd)
            .typeText( this.giLocName, compEditData.giLocName)
            .typeText(this.giOwnerName, compEditData.giOwnerName)
            .typeText(this.giStreetName, compEditData.giStreetName)
            .typeText(this.giCityName, compEditData.giCityName)
            .typeText(this.giStateName, compEditData.giStateName)
            .typeText(this.giLocZip, compEditData.giLocZip)
            .click(this.giLocSave)

        await t.click(this.catIdTab)
        await catId.CatalogIdAdd(catIdData)


    }
}