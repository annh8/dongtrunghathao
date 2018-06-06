import { ProductDetail } from "./productDetail";
import { ImageInfo } from "./imageInfo";

export class Product {
    id: string;
    code: string;
    name: string;
    categoryId: string;
    type:string;
    order: number;
    status: string;
    price: number;
    productDetail: ProductDetail[];
    imageInfo: ImageInfo[];
    tag:string;
    amount: number;
    total:number;
    link:string;
    constructor() {
        this.id = '';
        this.code = '';
        this.name = '';
        this.categoryId = '';
        this.type = '';
        this.order = 0;
        this.status = 'Hàng có sẵn';
        this.price = 0;
        this.tag = '';
        this.amount = 1;
        this.total = 0;
        this.productDetail = [];
        this.imageInfo = [];
    }
}
