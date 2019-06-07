import { Selector, t } from "testcafe";
import VueSelector from 'testcafe-vue-selectors';

export default class MfDateEntry {
    async fill(label, val) {
        let dateSelector;
        if(typeof(label) === 'object'){
            for(let key in label){
                dateSelector = VueSelector('BField').withText(key)
                await t
                    .click(dateSelector)
                    .click(dateSelector.find('a.datepicker-cell').withText(label[key]))
            }
        }
        else {
            dateSelector = VueSelector('BField').withText(label);
            await t
                .click(dateSelector)
                .click(dateSelector.find('a.datepicker-cell').withText(val))
        }
    }
}