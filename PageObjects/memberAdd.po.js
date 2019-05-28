import { Selector, t } from "testcafe";

export default class MemberAdd {
  constructor() {
    this.plusBtn = Selector('.fas.fa-plus.m-t-3-4');
    this.memberName = Selector('.vuetable-component').find('.input');
    this.email = Selector('.vuetable-component').nth(1).find('.input');
    this.admin = Selector('.has-text-centered.check-box');
    this.role = Selector('.multiselect__single');
    this.phoneNumber = Selector('.vuetable-component').nth(4).find('.input');
    this.saveBtn = Selector('.icon').nth(18).find('.fas.fa-check');
    this.memberAddConfirm = Selector('button').withText('Yes');
    this.isAdmin = Selector('.has-text-centered.icon').find('.fas.fa-check');
    this.notAdmin = Selector('.has-text-centered.icon').find('.fas.fa-times');
  }
  async globalMemberAdd(mData) {
    await t
      .wait(2000)
      .click(this.plusBtn)
      .typeText(this.memberName, mData.name)
      .typeText(this.email, mData.email);
    if (mData.admin) {
      await t.click(this.admin);
    }
    await t
      .click(this.role)
      .click(Selector('li').withText(mData.role).find('.multiselect__option'))
      .typeText(this.phoneNumber, mData.phNo)
      .click(this.saveBtn);
    if (mData.admin) {
      await t.click(this.memberAddConfirm);
    }
  }
}