export class Promotion {
    id: string;
    title:string;
    limit: number;
    sale: number;
    saving: string;
    guarantee: string;
    ship: string;
    code: string;
    constructor() {
        this.id='';
        this.title = '';
        this.limit = 0;
        this.sale = 0;
        this.saving = '';
        this.guarantee = '';
        this.ship = '';
        this.code = '';
    }
}
