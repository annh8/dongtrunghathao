import { Product } from "./product";
import { Promotion } from "./promotion";
import { Customer } from "./customer";
import { DatePipe } from "@angular/common";

export class Cart {
    id:string;
    customer:Customer;
    note:string;
    payment:boolean;
    productList:Product[];
    promotion:Promotion;
    total:number;
    date:string;
    constructor(){
        var pipe = new DatePipe('en-US');
        const now = Date.now();
        this.customer = new Customer();
        this.note = '';
        this.id ='';
        this.payment = true;
        this.productList = [];
        this.total = 0;
        this.date = pipe.transform(now, 'yyyy-MM-dd HH:mm:ss');
        this.promotion = new Promotion();
    }
}
