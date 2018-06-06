import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ImageInfo } from '../../objectClass/imageInfo';
import { AdminService } from '../admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ISubscription } from 'rxjs/Subscription';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';
import { ConfigInfo } from '../../objectClass/configInfo';

@Component({
  selector: 'image-manager',
  templateUrl: './image-manager.component.html',
  styleUrls: ['./image-manager.component.scss']
})
export class ImageManagerComponent implements OnInit,OnDestroy {

  pathFolder = 'image';
  config : ConfigInfo;
  subscriptionConfig :ISubscription;
  @ViewChild(UploadFormComponent) uploadForm;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.config = new ConfigInfo();
    this.config.images.push(new ImageInfo());
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
      if(this.config.images == null || this.config.images.length  == 0){
        this.config.images = [];
        this.config.images.push(new ImageInfo());
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
    this.config.images[index].image = event.url;
    this.config.images[index].path = event.path;
  }
  onPlusImage(){
    this.config.images.push(new ImageInfo());
  }
  onRemoveImage(){
    if(this.config.images.length > 1){
      this.config.images.splice(-1,1);
    }
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }

}
