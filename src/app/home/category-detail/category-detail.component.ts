import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../objectClass/category';
import { Product } from '../../objectClass/product';
import { AdminService } from '../../administrator/admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  @Input() category:Category;
  data: Product[];
  productList: Product[];
  constructor(
    private service: AdminService,
    private orderPipe: OrderPipe,
    private titleService: Title,) {
        
   }

  ngOnInit() {
    this.service.getAllProduct().subscribe((response) => {
      this.data = this.orderPipe.transform(response, 'order');
      this.data = this.data.filter(item => item.categoryId == this.category.id);
      this.productList = this.data.filter(item => item.categoryId == this.category.id);
    });
  }
  onChange(event) {
    var t = event.target.value.split('&');
    switch (t[0]) {
      case 'name':
        if (t[1] === 'ASC')
          this.productList = this.data.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        else
          this.productList = this.data.sort(function (a, b) { return (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0); });
        break;
      case 'code':
      if (t[1] === 'ASC')
          this.productList = this.data.sort(function (a, b) { return (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0); });
        else
          this.productList = this.data.sort(function (a, b) { return (a.code < b.code) ? 1 : ((b.code < a.code) ? -1 : 0); });
        break;
      case 'price': 
      if (t[1] === 'ASC')
          this.productList = this.data.sort(function (a, b) { return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0); });
        else
          this.productList = this.data.sort(function (a, b) { return (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0); });
        break;
      case 'order':
      if (t[1] === 'ASC')
          this.productList = this.data.sort(function (a, b) { return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0); });
        else
          this.productList = this.data.sort(function (a, b) { return (a.order < b.order) ? 1 : ((b.order < a.order) ? -1 : 0); });
        break;
      default: break;
    }
  }
}
