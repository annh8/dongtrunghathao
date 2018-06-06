import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';
import { LocalDataSource } from 'ng2-smart-table';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';
import { Product } from '../../objectClass/product';
import { ButtonViewComponent } from '../button-view/button-view.component';
import { ImageInfo } from '../../objectClass/imageInfo';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  pathFolder = 'product';
  product: Product;
  settingsCategory = {
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: false,
      position: 'left',
    },
    columns: {
      name: {
        title: 'Tên danh mục',
        type: 'string',
      }
    },
  };
  settings = {
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: true,
      position: 'left',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      code: {
        title: 'Mã',
        type: 'string',
      },
      name: {
        title: 'Tên',
        type: 'string',
      },
      order: {
        title: 'Thứ tự',
        type: 'number',
      },
      status: {
        title: 'Trạng thái',
        type: 'string',
      },
      price: {
        title: 'Giá',
        type: 'number',
      },
      button: {
        title: 'Edit',
        type: 'custom',
        defaultValue: 'administrator/edit-product',
        renderComponent: ButtonViewComponent
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  data:any;
  sourceCategory: LocalDataSource = new LocalDataSource();
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.service.getAllProduct().subscribe((response) => {
      this.data = this.orderPipe.transform(response, 'order');
      this.source = this.data;
    });
    this.service.getAllCategory().subscribe((response) => {
      this.sourceCategory = this.orderPipe.transform(response, 'order');
    });
    this.product = new Product();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.deleteProduct(event.data.id);
    } else {
      event.confirm.reject();
    }
  }

  onSelectedRow(event): void {
    this.source = this.data.filter(
      book => book.categoryId === event.data.id);
  }
}
