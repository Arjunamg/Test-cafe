import { Selector, t } from "testcafe";

export default class Hamburger {
    constructor() {
        this.hamburger = Selector('[data-target="navbarBasicExample"].navbar-burger')
        this.home = Selector('a').withText('HOME')
        this.checklist = Selector('.heading-border').nth(1).find('span').withText('CHECKLIST')
        this.materialManager = Selector('a').withText('MATERIAL MANAGER').find('span')
        this.preparation = Selector('span').withText('Preparation')
        this.fieldMeasurement = Selector('span').withText('Measurement')
        this.ordering = Selector('span').withText('Ordering')
        this.prefabPlanner = Selector('a').withText('PREFAB PLANNER').find('span')
        this.prefabPackage = Selector('a').withText('Prefab Package')
        this.productionOrder = Selector('a').withText('Production Order')
        this.productionManager = Selector('a').withText('PRODUCTION MANAGER').find('span')
        this.detailing = Selector('a').withText('Detailing')
        this.manufacturing = Selector('a').withText('Manufacturing')
        this.qualityAssurance = Selector('span').withText('Quality Assurance')
        this.inventoryManager = Selector('a').withText('INVENTORY MANAGER').find('span')
        this.inventory = Selector('a').withText('Inventory')
        this.supplyChainManager = Selector('a').withText('SUPPLY CHAIN MANAGER').find('span')
        this.productionStatus = Selector('a').withText('Production Status')
        this.materialStatus = Selector('a').withText('Material Status')
        this.shippingOrders = Selector('a').withText('Shipping Orders')
        this.appAndProject = Selector('a').withText('APP').find('[class^="is-size-6 has-text-primary has-text-weight-bold is"]')
        this.help = Selector('a').withText('HELP')
    }
    async materialManagerFunc(stage){
        await t.click(this.materialManager)
        if(stage==='preparation') await t.click(this.preparation)  
        else if(stage==='fieldMeasurement') await t.click(this.fieldMeasurement)
        else if(stage ==='ordering') await t.click(this.ordering)
        await t
            .click(this.materialManager)
            .click(this.hamburger)   
    }
    async prefabPlannerFunc(stage){
        await t.click(this.prefabPlanner)
        if(stage==='prefabPackage') await t.click(this.prefabPackage)  
        else if(stage==='productionOrder') await t.click(this.productionOrder)
        await t
            .click(this.prefabPlanner)
            .click(this.hamburger)   
    }
    async productionManagerFunc(stage){
        await t.click(this.productionManager)
        if(stage==='detailing') await t.click(this.detailing)  
        else if(stage==='manufacturing') await t.click(this.manufacturing)
        else if(stage ==='qualityAssurance') await t.click(this.qualityAssurance)
        await t
            .click(this.productionManager)
            .click(this.hamburger)   
    }
    async scmFunc(stage){
        await t.click(this.supplyChainManager)
        if(stage==='productionStatus') await t.click(this.productionStatus)  
        else if(stage==='materialStatus') await t.click(this.materialStatus)
        else if(stage ==='shippingOrders') await t.click(this.shippingOrders)
        await t
            .click(this.supplyChainManager)
            .click(this.hamburger)   
    }

    async hamburgerNav(stage) {
        await t
            .click(this.hamburger)
        switch (stage){
            case "home" : await t.click(this.home)
            break;
            case "checklist" : await t.click(this.checklist)
            break;
            case "preparation" : await materialManagerFunc('preparation')
            break;
            case "fieldMeasurement" : await materialManagerFunc('fieldMeasurement')
            break;
            case "ordering" : await materialManagerFunc('ordering')
            break;
            case "prefabPackage" : await prefabPlannerFunc('prefabPackage')
            break;
            case "productionOrder" : await prefabPlannerFunc('productionOrder')
            break;
            case "detailing" : await productionManagerFunc('detailing')
            break;
            case "manufacturing" : await productionManagerFunc('manufacturing')
            break;
            case "qualityAssurance" : await productionManagerFunc('qualityAssurance')
            break;
            case "inventory" : await t.click(this.inventoryManager)
                                      .click(this.inventory)
                                      .click(this.inventoryManager)
                                      .click(this.hamburger)
            break;
            case "productionStatus" : await scmFunc('productionStatus')
            break;
            case "materialStatus" : await scmFunc('materialStatus')
            break;
            case "shippingOrders" : await scmFunc('shippingOrders')
            break;
            case "appAndProject" : await t.click(this.appAndProject)
            break;
            case "help" : await t.click(this.help)
            break;
            default : return; 
        }
    }
}