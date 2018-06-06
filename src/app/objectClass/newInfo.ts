import { NewDetail } from "./newDetail";
import { ImageInfo } from "./imageInfo";

export class NewInfo {
    id: string;
    name: string;
    categoryId: string;
    description: string;
    newDetail: NewDetail[];
    imageInfo: ImageInfo[];
    showTop: boolean;
    link:string;
    constructor() {
        this.id = '';
        this.name = '';
        this.categoryId = '';
        this.newDetail = [];
        this.imageInfo = [];
    }
}
