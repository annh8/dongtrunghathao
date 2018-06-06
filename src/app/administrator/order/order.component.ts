import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Cart } from '../../objectClass/cart';
import { LocalDataSource } from 'ng2-smart-table';
import { AdminService } from '../admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { Customer } from '../../objectClass/customer';
import { Product } from '../../objectClass/product';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cart : Cart;
  settings = {
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: false,
      position: 'left',
    },
    columns: {
      customer: {
        title: 'Tên khách hàng',
        type: 'html',
        valuePrepareFunction: (customer: Customer) => { return `<span>${customer.name}</span>`; },
      },
      date: {
        title: 'Ngày đặt hàng',
        type: 'string',
      }
    },
  };
  settingsProduct = {
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: false,
      position: 'left',
    },
    columns: {
      name: {
        title: 'Tên sản phẩm',
        type: 'string',
      },
      amount: {
        title: 'Số lượng',
        type: 'number',
      },
      total: {
        title: 'Tổng tiền',
        type: 'number',
      }

    },
  };

  source: LocalDataSource = new LocalDataSource();
  sourceProduct: Product[];
  @ViewChild('cateName') categoryNameElement: ElementRef;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.service.getAllCart().subscribe((response) => {
      this.source = this.orderPipe.transform(response, 'order');
    });
    this.cart = new Cart();
  }
  onSelectedRow(event): void {
    this.cart = event.data;
    this.sourceProduct = this.cart.productList;
  }
}
