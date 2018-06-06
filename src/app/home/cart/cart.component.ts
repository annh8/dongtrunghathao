import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../objectClass/product';
import { AdminService } from '../../administrator/admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  product: Product;
  productList: Product[];
  id: string;
  subscriptionProduct: ISubscription;
  total: number = 0;
  constructor(
    private service: AdminService,
    private orderPipe: OrderPipe,
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.productList = this.getProductInLS();
    console.log(this.productList);
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != null || this.id === 'detail'){
      this.subscriptionProduct = this.service.getProductById(this.id).subscribe((response) => {
        this.product = response[0];
        let data = this.productList.filter(item=>item.id === this.id);
        if(data.length == 0){
          this.product.amount = 1;
          if(this.product.price == null){
            this.product.total = 0;
          } else {
            this.product.total = this.product.price;
          }
          this.productList.push(this.product);
          this.setProductInLS();
        }
      });
     
    }
    this.sum();
  }
  ngOnDestroy() {
    this.subscriptionProduct.unsubscribe();
  }
  getProductInLS(){
    if(localStorage.getItem('cart')!=null){
      return JSON.parse(localStorage.getItem('cart')).cart;
    }
    return [];
  }
  setProductInLS(){
    localStorage.setItem('cart',JSON.stringify({cart: this.productList}));
  }
  sum():void{
    this.total = 0;
    this.productList.forEach(item => {
      this.total += item.total;
    });
  }
  plus(id){
    let updateItem = this.productList.find(this.findIndexToUpdate, id);
    let index = this.productList.indexOf(updateItem);
    this.productList[index].amount +=1;
    this.productList[index].total =  this.productList[index].price * this.productList[index].amount;
    this.sum();
    this.setProductInLS();
  }
  remove(id){
    let updateItem = this.productList.find(this.findIndexToUpdate, id);
    let index = this.productList.indexOf(updateItem);
    this.productList.splice(index, 1);
    this.sum();
    this.setProductInLS();
  }
  subtract(id){
    let updateItem = this.productList.find(this.findIndexToUpdate, id);
    let index = this.productList.indexOf(updateItem);
    if(this.productList[index].amount==1){
      return;
    }
    this.productList[index].amount -=1;
    this.productList[index].total = this.productList[index].price * this.productList[index].amount;
    this.sum();
    this.setProductInLS();
  }

  findIndexToUpdate(newItem) { 
        return newItem.id === this;
  }

}
