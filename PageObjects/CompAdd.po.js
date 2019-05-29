import { Selector, t } from "testcafe";

export default class MemberAdd {
  constructor() {
    this.plusBtn = Selector('.fas.fa-plus.m-t-3-4');
    this.compName = Selector('.vuetable-component').find('.input');
    this.compTypeField = Selector('.multiselect__single');
    this.compContact = Selector('.vuetable-component').nth(2).find('.input');
    this.compEmail = Selector('.vuetable-component').nth(3).find('.input');
    this.compNumber = Selector('.vuetable-component').nth(4).find('.input');
    this.saveBtn = Selector('.fas.fa-check')
  }
  async globalCompAdd(cData) {
    await t
      .wait(2000)
      .click(this.plusBtn)
      .typeText(this.compName, cData.compName)
      .click(this.compTypeField)
      .click(Selector('li').withText(cData.compType).find('.multiselect__option'))
      .typeText(this.compContact, cData.compContact)
      .typeText(this.compEmail, cData.compEmail)
      .typeText(this.compNumber, cData.compPhNo)
      .click(this.saveBtn);
  }
}