import{Selector,t} from "testcafe";

export default class MasterCatalogIdAdd{
   constructor(){
       this.masterPlusBtn = Selector('.fas.fa-plus.m-t-3-4');
       this.masterCatId = Selector('.vuetable-component').find('.input');
       this.masterCatName = Selector('.vuetable-component').nth(1).find('.input');
       this.masterCatalogIds = Selector('.vuetable-component').nth(2).find('.input');
       this.masterCatMeas = Selector('.multiselect__single');
       this.save=Selector('.fas.fa-check');
   }

   async CatalogIdAdd(lData){
       await t
       .wait(500)
       .click(this.masterPlusBtn)
       .typeText(this.masterCatId,lData.CatId)
       .typeText(this.masterCatName,lData.CatName)
       .typeText(this.masterCatalogIds,lData.CatalogId)
       .click(this.masterCatMeas).click(Selector('li').withText(lData.CatMeas).find('.multiselect__option'))
       .click(this.save)
   }
}