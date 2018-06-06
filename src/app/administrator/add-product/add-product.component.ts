import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Category } from '../../objectClass/category';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';
import { Product } from '../../objectClass/product';
import { ProductDetail } from '../../objectClass/productDetail';
import { ImageInfo } from '../../objectClass/imageInfo';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  pathFolder = 'product';
  product : Product;
  category: Category;
  settings = {
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

  source: LocalDataSource = new LocalDataSource();

  @ViewChild('proFocus') proFocusElement: ElementRef;
  @ViewChild(UploadFormComponent) uploadForm;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.service.getAllCategory().subscribe((response) => {
      this.source = this.orderPipe.transform(response, 'order');
    });
    this.product = new Product();
    this.product.productDetail = [];
    this.product.productDetail.push(new ProductDetail());
    this.category = new Category();
  }
  ngAfterViewInit(): void {
    this.proFocusElement.nativeElement.focus();
    this.onClear();
  }

  onSelectedRow(event): void {
    this.product.categoryId = event.data.id;
    this.category.id = event.data.id;
    this.category.name = event.data.name;
    this.proFocusElement.nativeElement.focus();
  }
  onSave(event) {
    if (window.confirm('Are you sure you want to save?')) {
      this.product.link = this.service.change_alias(this.product.name+'-'+this.product.code);
      this.service.saveProduct(this.product);
      this.onClear();
      alert('Save success');
    } else {
      this.proFocusElement.nativeElement.focus();
    }

  }
  onClear() {
    this.product= new Product();
    this.category = new Category();
    this.product.productDetail.push(new ProductDetail());
    this.product.imageInfo.push(new ImageInfo());
    this.uploadForm.clean();
    this.proFocusElement.nativeElement.focus();
  }
  receiveUrl(event,index) {
    this.product.imageInfo[index].image = event.url;
    this.product.imageInfo[index].path = event.path;
  }
  receiveDetailUrl(event,index) {
    this.product.productDetail[index].image = event.url;
    this.product.productDetail[index].path = event.path;
  }
  getContent(event,index) {
    this.product.productDetail[index].content = event;
  }
  onPlus(){
    this.product.productDetail.push(new ProductDetail());
  }
  onRemove(){
    if(this.product.productDetail.length > 1){
      this.product.productDetail.splice(-1,1);
    }
  }
  onPlusImage(){
    this.product.imageInfo.push(new ImageInfo());
  }
  onRemoveImage(){
    if(this.product.imageInfo.length > 1){
      this.product.imageInfo.splice(-1,1);
    }
  }

}
