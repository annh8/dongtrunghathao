import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../../objectClass/product';
import { AdminService } from '../../administrator/admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ConfigInfo } from '../../objectClass/configInfo';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  @Input() product: Product;
  data: Product[];
  source: Product[];
  config: ConfigInfo;
  href: string;
  productList: Product[];
  @ViewChild('img') imgElement: ElementRef;
  subscriptionConfig: ISubscription;
  constructor(private service: AdminService, private orderPipe: OrderPipe, private router: Router) {
    this.config = new ConfigInfo();
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
    });
  }
  ngOnInit() {
    this.href = window.location.href;
    this.source = [];

    var categoryId = this.product.categoryId;
    this.service.getProductByCategory(categoryId).subscribe(response => {
      this.data = this.orderPipe.transform(response, 'order');
      this.source = this.data.filter(item => item.id !== this.product.id);
    });

  }
  ngAfterViewInit() {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.0&appId=711423459018142&autoLogAppEvents=1";

      if (d.getElementById(id)) {
        //if <script id="facebook-jssdk"> exists
        delete (<any>window).FB;
        fjs.parentNode.replaceChild(js, fjs);
      } else {
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));
    //gapi.plusone.go("content");
  }
  ngOnDestroy() {
    this.subscriptionConfig.unsubscribe();
  }
  getProductInLS() {
    if (localStorage.getItem('cart') != null) {
      return JSON.parse(localStorage.getItem('cart')).cart;
    }
    return [];
  }
  setProductInLS() {
    localStorage.setItem('cart', JSON.stringify({ cart: this.productList }));
  }
  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }
  plus() {
    this.productList = this.getProductInLS();
    let data = this.productList.filter(item => item.id === this.product.id);
    if (data.length == 0) {
      if (this.product.price == null || this.product.price == 0) {
        this.product.total = 0;
      } else {
        this.product.total = this.product.amount * this.product.price;
      }
      this.productList.push(this.product);
      this.setProductInLS();
    } else {
      let updateItem = this.productList.find(this.findIndexToUpdate, this.product.id);
      let index = this.productList.indexOf(updateItem);
      this.productList[index].amount = this.product.amount;
      this.productList[index].total = this.productList[index].price * this.productList[index].amount;
      this.setProductInLS();
    }
    this.router.navigate(['gio-hang/detail']);
  }
  mouseEnter(t){
    this.imgElement.nativeElement.src=t;
  }
}
