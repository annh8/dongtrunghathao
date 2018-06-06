import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Category } from '../../objectClass/category';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit {
  pathFolder = 'category';
  category : Category;
  isUpload = false;
  pathOld='';
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
      name: {
        title: 'Tên',
        type: 'string',
      },
      order: {
        title: 'Thứ tự',
        type: 'number',
      },
      image: {
        title: 'Ảnh',
        type: 'html',
        valuePrepareFunction: (image: string) => { return `<img width="100px" src="${image}" />`; },
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  @ViewChild('cateName') categoryNameElement: ElementRef;
  @ViewChild(UploadFormComponent) uploadForm;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.service.getAllCategory().subscribe((response) => {
      this.source = this.orderPipe.transform(response, 'order');
    });
    this.category = new Category();
  }
  ngAfterViewInit(): void {
    this.categoryNameElement.nativeElement.focus();
    this.onClear();
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.deleteCategory(event.data.id);
      this.service.deleteFileStore(event.data.path);
      this.categoryNameElement.nativeElement.focus();
    } else {
      event.confirm.reject();
      this.categoryNameElement.nativeElement.focus();
    }
  }
  onSelectedRow(event): void {
    this.category.id = event.data.id;
    this.category.name = event.data.name;
    this.category.order = event.data.order;
    this.category.image = event.data.image;
    this.category.path = event.data.path;
    this.pathOld = event.data.path;
    this.isUpload = false;
    this.categoryNameElement.nativeElement.focus();
  }
  onSave(event) {
    if (window.confirm('Are you sure you want to save?')) {
      this.category.link = this.service.change_alias(this.category.name);
      this.service.saveCategory(this.category);
      
      this.onClear();
    } else {
      this.categoryNameElement.nativeElement.focus();
    }

  }
  onClear() {
    this.category.id = '';
    this.category.name = '';
    this.category.order = 0;
    this.category.image = '';
    this.category.path = '';
    this.uploadForm.clean();
    this.categoryNameElement.nativeElement.focus();
  }
  receiveUrl(event) {
    this.category.image = event.url;
    this.category.path = event.path;
    this.isUpload = true;
  }
}
