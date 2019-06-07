import { Selector, t } from "testcafe";

export default class Toast {
    constructor() {
        this.toast = Selector('.toast');
    }
    async toastCheck(type, msg){
        await t
            .expect(this.toast.withAttribute('class',type))
    }
}