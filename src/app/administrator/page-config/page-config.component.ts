import { Component, OnInit, ViewChild, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';
import { ISubscription } from 'rxjs/Subscription';
import { ConfigInfo } from '../../objectClass/configInfo';
import { TinyMCEComponent } from '../../@theme/components/tiny-mce/tiny-mce.component';

@Component({
  selector: 'page-config',
  templateUrl: './page-config.component.html',
  styleUrls: ['./page-config.component.scss']
})
export class PageConfigComponent implements OnInit,OnDestroy {

  config : ConfigInfo;
  subscriptionConfig :ISubscription;
  constructor(private service: AdminService,private orderPipe: OrderPipe) { 
    
  }
  @ViewChildren(TinyMCEComponent) tinymces: QueryList<TinyMCEComponent>; 

  ngOnInit() {
    
    this.config = new ConfigInfo();
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
        this.config = response;
        let tinymce: TinyMCEComponent[] = this.tinymces.toArray();
        tinymce[0].setContent(this.config.homepageConfig.content);
        tinymce[1].setContent(this.config.homepageConfig.contentDetail);
        tinymce[2].setContent(this.config.homepageConfig.productInfo);
        tinymce[3].setContent(this.config.homepageConfig.productInfoDetail);
    });
  }
  getContent(event) {
    this.config.homepageConfig.content = event;
  }
  getContentDetail(event) {
    this.config.homepageConfig.contentDetail = event;
  }
  getContentProductInfo(event) {
    this.config.homepageConfig.productInfo = event;
  }
  getContentproductInfoDetail(event) {
    this.config.homepageConfig.productInfoDetail = event;
  }
  onSave(event) {
    if (window.confirm('Are you sure you want to save?')) {
      this.service.saveConfig(this.config);
      alert('Save success');
    } else {
    }

  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }
}
