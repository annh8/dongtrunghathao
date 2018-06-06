import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigInfo } from '../../objectClass/configInfo';
import { ISubscription } from 'rxjs/Subscription';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';
import { AdminService } from '../admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ImageInfo } from '../../objectClass/imageInfo';

@Component({
  selector: 'config-partner',
  templateUrl: './config-partner.component.html',
  styleUrls: ['./config-partner.component.scss']
})
export class ConfigPartnerComponent implements OnInit {

  pathFolder = 'partner';
  config : ConfigInfo;
  subscriptionConfig :ISubscription;
  @ViewChild(UploadFormComponent) uploadForm;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.config = new ConfigInfo();
    this.config.partner.push(new ImageInfo());
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
      if(this.config.partner == null || this.config.partner.length  == 0){
        this.config.partner = [];
        this.config.partner.push(new ImageInfo());
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
    this.config.partner[index].image = event.url;
    this.config.partner[index].path = event.path;
  }
  onPlusImage(){
    this.config.partner.push(new ImageInfo());
  }
  onRemoveImage(){
    if(this.config.partner.length > 1){
      this.config.partner.splice(-1,1);
    }
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }
}
