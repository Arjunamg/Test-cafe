import { Selector, t } from "testcafe";

export default class Toast {
    constructor() {
        this.toast = Selector('.toast');
    }
}
