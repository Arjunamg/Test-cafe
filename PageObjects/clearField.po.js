import { Selector, t } from "testcafe";

export default class ClearField {
    async clearField(selector) {
        await t
            .click(selector)
            .pressKey('ctrl+a')
            .pressKey('backspace')
    }      
}
      