/**
 * Created by Dinesh on 13/05/19.
 */

import { Selector, t } from "testcafe";

export default class Toast {
    constructor() {
        this.toast = Selector('.toast');
    }
}
