import{Selector,t} from "testcafe";
import Toast from "../toast.po";

const toast = new Toast();

export default class Export{
    constructor() {
        this.excel=Selector('.fas.fa-fas.fa-print.fa-lg');
        this.excelOption=Selector('#excel');
        this.icsOption=Selector('#ics');
    }   
    async export(type){
        await t.click(this.excel)
        if(type === 'excel'){
            await t.click(this.excelOption);
               await  t.wait(2000);
        }
        else {
            await t.click(this.icsOption);
            await  t.wait(2000);
        }
        await toast.toastCheck('is-success')

    }
}