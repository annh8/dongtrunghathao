import { ImageInfo } from "./imageInfo";

export class SupportInfo {
    chucdanh: string;
    phone:string;
    skype:string;
    zalo:string;
    image: ImageInfo;
    constructor(){
        this.chucdanh = '';
        this.phone= '';
        this.skype= '';
        this.zalo= '';
        this.image = new ImageInfo();
    }
    
}
