import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigInfo } from '../../objectClass/configInfo';
import { ISubscription } from 'rxjs/Subscription';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';
import { AdminService } from '../admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { Feelcustomer } from '../../objectClass/feelcustomer';

@Component({
  selector: 'config-feelcustomer',
  templateUrl: './config-feelcustomer.component.html',
  styleUrls: ['./config-feelcustomer.component.scss']
})
export class ConfigFeelcustomerComponent implements OnInit {

  pathFolder = 'partner';
  config : ConfigInfo;
  subscriptionConfig :ISubscription;
  @ViewChild(UploadFormComponent) uploadForm;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.config = new ConfigInfo();
    this.config.feelcustomer.push(new Feelcustomer());
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
      if(this.config.feelcustomer == null || this.config.feelcustomer.length  == 0){
        this.config.feelcustomer = [];
        this.config.feelcustomer.push(new Feelcustomer());
      }
    });
    
  }
  onSave(event) {
    if (window.confirm('Are you sure you want to save?')) {
      this.service.saveConfig(this.config);
      alert('Save success');
    } else {
     
    }
  }
  getContent(event,index) {
    this.config.feelcustomer[index].feel = event;
  }
  receiveUrl(event,index) {
    this.config.feelcustomer[index].image.image = event.url;
    this.config.feelcustomer[index].image.path = event.path;
  }
  onPlus(){
    this.config.feelcustomer.push(new Feelcustomer());
  }
  onRemove(){
    if(this.config.feelcustomer.length > 1){
      this.config.feelcustomer.splice(-1,1);
    }
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }

}
