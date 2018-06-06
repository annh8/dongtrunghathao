import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../../administrator/admin.service';
import { ISubscription } from 'rxjs/Subscription';
import { Product } from '../../objectClass/product';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'topproduct',
  templateUrl: './topproduct.component.html',
  styleUrls: ['./topproduct.component.scss']
})
export class TopproductComponent implements OnInit,OnDestroy {

  subscriptionConfig :ISubscription;
  productList: Product[];
  constructor(private service: AdminService,private orderPipe: OrderPipe) { }
  
  ngOnInit() {
    this.productList = [];
    this.subscriptionConfig = this.service.getAllProduct().subscribe(response => {
      this.productList = this.orderPipe.transform(response, 'order');
      this.productList = this.productList.slice(0,8);
    });
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }

}
