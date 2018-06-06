import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigInfo } from '../../objectClass/configInfo';
import { ISubscription } from 'rxjs/Subscription';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';
import { AdminService } from '../admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ImageInfo } from '../../objectClass/imageInfo';
import { SupportInfo } from '../../objectClass/supportInfo';

@Component({
  selector: 'config-support',
  templateUrl: './config-support.component.html',
  styleUrls: ['./config-support.component.scss']
})
export class ConfigSupportComponent implements OnInit {
  pathFolder = 'support';
  config : ConfigInfo;
  subscriptionConfig :ISubscription;
  @ViewChild(UploadFormComponent) uploadForm;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.config = new ConfigInfo();
    this.config.support.push(new SupportInfo());
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
      if(this.config.support == null || this.config.support.length  == 0){
        this.config.support = [];
        this.config.support.push(new SupportInfo());
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
  receiveUrl(event,index) {
    this.config.support[index].image.image = event.url;
    this.config.support[index].image.path = event.path;
  }
  onPlus(){
    this.config.support.push(new SupportInfo());
  }
  onRemove(){
    if(this.config.support.length > 1){
      this.config.support.splice(-1,1);
    }
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }

}
