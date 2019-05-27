import { t } from "testcafe";

export default class clearFields  {
    async clearField(selector){
        await t
            .click(selector)
            .pressKey('ctrl+a')
            .pressKey('backspace')
    }
}