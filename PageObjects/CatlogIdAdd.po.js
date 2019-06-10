import{Selector,t} from "testcafe";

export default class MasterCatalogIdAdd{
   constructor(){
       this.plusBtn = Selector('.fas.fa-plus.m-t-3-4');
       this.id = Selector('.vuetable-component').find('.input');
       this.name = Selector('.vuetable-component').nth(1).find('.input');
       this.catalogId = Selector('.vuetable-component').nth(2).find('.input');
       this.measUnits = Selector('.multiselect__single');
       this.save=Selector('.fas.fa-check');
   }

   async CatalogIdAdd(catIdData){
       await t       
       .wait(500)
       .click(this.plusBtn)
       .typeText(this.id,catIdData.id)
       .typeText(this.name,catIdData.name)
       .typeText(this.catalogId,catIdData.catalogId)
       .click(this.measUnits)
       .click(Selector('li').withText(catIdData.measUnits).find('.multiselect__option'))
       .click(this.save)
   }
}