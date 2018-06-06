import { ImageInfo } from "./imageInfo";

export class Feelcustomer {
    info:string;
    feel:string;
    image:ImageInfo;
    constructor(){
        this.info = '';
        this.feel = '';
        this.image = new ImageInfo();
    }
}
