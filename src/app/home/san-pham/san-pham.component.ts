import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../administrator/admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { Product } from '../../objectClass/product';
import { Category } from '../../objectClass/category';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.scss']
})
export class SanPhamComponent implements OnInit {

  data: Product[];
  productList: Product[];
  constructor(private service: AdminService, 
    private orderPipe: OrderPipe,
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router) { 
    
  }

  ngOnInit() {
    this.service.getAllProduct().subscribe((response) => {
      this.data = this.orderPipe.transform(response, 'order');
      this.productList = this.data;
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
