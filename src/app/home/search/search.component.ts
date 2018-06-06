import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../administrator/admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { Product } from '../../objectClass/product';
import { Category } from '../../objectClass/category';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  data: Product[];
  productList: Product[];
  navigationSubscription;
  constructor(private service: AdminService, 
    private orderPipe: OrderPipe,
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router) { 
    this.titleService.setTitle( 'Sản phẩm' );
    
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
      window.scrollTo(0, 0);
    });
  }
  initialiseInvites() {
    this.ngOnInit();
  }
  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getAllProduct().subscribe((response) => {
      this.data = this.orderPipe.transform(response, 'order');
      if(id=== null){
        this.productList = this.data;
      }else{
        this.productList = this.data.filter(item=>item.name.search(id)>-1);
      }
      
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
