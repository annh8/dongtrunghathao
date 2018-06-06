import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from '../../objectClass/customer';
import { Cart } from '../../objectClass/cart';
import { Promotion } from '../../objectClass/promotion';
import { ISubscription } from 'rxjs/Subscription';
import { AdminService } from '../../administrator/admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestMethod } from '@angular/http';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit, OnDestroy {

  subscriptionPromotion: ISubscription;
  cart: Cart;
  promotion: Promotion[];
  constructor(private http: HttpClient, private service: AdminService, private orderPipe: OrderPipe, private router: Router) {
    this.cart = new Cart();
    this.cart.productList = this.getProductInLS();

  }

  ngOnInit() {
    this.promotion = [];
    this.subscriptionPromotion = this.service.getAllPromotion().subscribe(response => {
      this.promotion = this.orderPipe.transform(response);
      this.sum();
    });
  }
  getProductInLS() {
    if (localStorage.getItem('cart') != null) {
      return JSON.parse(localStorage.getItem('cart')).cart;
    }
    return [];
  }
  setProductInLS() {
    localStorage.setItem('cart', JSON.stringify({ cart: [] }));
  }
  sum(): void {
    this.cart.total = 0;
    this.cart.productList.forEach(item => {
      this.cart.total += item.total;
    });
    let t = this.cart.total;
    let k;
    this.promotion.forEach(item => {
      if (this.cart.total > item.limit) {
        k = t - t * item.sale / 100;
        this.cart.promotion = item;
      }
    });
    this.cart.total = k;
  }
  ngOnDestroy(): void {
    this.subscriptionPromotion.unsubscribe();
  }
  save() {
    if (window.confirm('Are you sure you want to save?')) {
      this.service.saveCart(this.cart);
      this.setProductInLS();
      this.router.navigate(['/']);
    } else {

    }
  }
  
}
