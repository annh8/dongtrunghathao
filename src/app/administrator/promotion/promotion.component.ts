import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Promotion } from '../../objectClass/promotion';
import { ISubscription } from 'rxjs/Subscription';
import { AdminService } from '../admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  promotion : Promotion;
  subscriptionConfig :ISubscription;
  settings = {
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: false,
      position: 'left',
    },
    columns: {
      title: {
        title: 'Tên danh mục',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  @ViewChild('proFocus') proFocusElement: ElementRef;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.subscriptionConfig = this.service.getAllPromotion().subscribe((response) => {
      this.source = this.orderPipe.transform(response);
    });
    this.promotion = new Promotion();
  }
  ngAfterViewInit(): void {
    this.proFocusElement.nativeElement.focus();
    this.onClear();
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.deletePromotion(event.data.id);
      this.proFocusElement.nativeElement.focus();
    } else {
      event.confirm.reject();
      this.proFocusElement.nativeElement.focus();
    }
  }
  onSelectedRow(event): void {
    this.promotion.id = event.data.id;
    this.promotion.title = event.data.title;
    this.promotion.code = event.data.code;
    this.promotion.limit = event.data.limit;
    this.promotion.sale = event.data.sale;
    this.promotion.saving = event.data.saving;
    this.promotion.ship = event.data.ship;
    this.promotion.guarantee = event.data.guarantee;
    this.proFocusElement.nativeElement.focus();
  }
  onSave(event) {
    if (window.confirm('Are you sure you want to save?')) {
      this.service.savePromotion(this.promotion);
      
      this.onClear();
    } else {
      this.proFocusElement.nativeElement.focus();
    }

  }
  onClear() {
    this.promotion= new Promotion();
    this.proFocusElement.nativeElement.focus();
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }

}
