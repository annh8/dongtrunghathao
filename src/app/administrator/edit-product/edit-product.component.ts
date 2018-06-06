import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Category } from '../../objectClass/category';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';
import { Product } from '../../objectClass/product';
import { ProductDetail } from '../../objectClass/productDetail';
import { ImageInfo } from '../../objectClass/imageInfo';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnDestroy {

  pathFolder = 'product';
  product: Product;
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
  subscriptionProduct: ISubscription;
  subscriptioncategory: ISubscription;
  @ViewChild('proFocus') proFocusElement: ElementRef;
  @ViewChild(UploadFormComponent) uploadForm;
  constructor(private service: AdminService, private orderPipe: OrderPipe, private route: ActivatedRoute, ) {

  }
  ngOnInit() {
    this.product = new Product();
    this.product.imageInfo.push(new ImageInfo());
    this.product.productDetail.push(new ProductDetail());
    this.category = new Category();

    const id = this.route.snapshot.paramMap.get('id');
    this.subscriptionProduct = this.service.getProductById(id).subscribe((response) => {
      this.product = response[0];
      this.subscriptioncategory = this.service.getCategoryById(this.product.categoryId).subscribe((response) => {
        this.category = response[0];
      });
    });

    this.service.getAllCategory().subscribe((response) => {
      this.source = this.orderPipe.transform(response, 'order');
    });

  }
  ngAfterViewInit(): void {
    this.proFocusElement.nativeElement.focus();
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
      alert('Save success');
    } else {
      this.proFocusElement.nativeElement.focus();
    }

  }
  receiveUrl(event, index) {
    this.product.imageInfo[index].image = event.url;
    this.product.imageInfo[index].path = event.path;
  }
  receiveDetailUrl(event, index) {
    this.product.productDetail[index].image = event.url;
    this.product.productDetail[index].path = event.path;
  }
  getContent(event, index) {
    this.product.productDetail[index].content = event;
  }
  onPlus() {
    this.product.productDetail.push(new ProductDetail());
  }
  onRemove() {
    if (this.product.productDetail.length > 1) {
      this.product.productDetail.splice(-1, 1);
    }

  }
  onPlusImage() {
    this.product.imageInfo.push(new ImageInfo());
  }
  onRemoveImage() {
    if (this.product.imageInfo.length > 1) {
      this.product.imageInfo.splice(-1, 1);
    }
  }
  ngOnDestroy() {
    this.subscriptionProduct.unsubscribe();
    this.subscriptioncategory.unsubscribe();
  }
}
