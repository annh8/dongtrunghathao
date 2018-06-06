import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ButtonViewComponent } from '../button-view/button-view.component';
import { NewInfo } from '../../objectClass/newInfo';
import { ImageInfo } from '../../objectClass/imageInfo';


@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  product: NewInfo;
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
      showTop: {
        title: 'Hiển thị trang chủ',
        type: 'boolean',
      },
      button: {
        title: 'Edit',
        type: 'custom',
        defaultValue: 'administrator/edit-news',
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
    this.service.getAllNews().subscribe((response) => {
      this.data = this.orderPipe.transform(response, 'id');
      this.source = this.data;
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.deleteNews(event.data.id);
    } else {
      event.confirm.reject();
    }
  }
}
