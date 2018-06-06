import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigInfo } from '../../objectClass/configInfo';
import { ISubscription } from 'rxjs/Subscription';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';
import { AdminService } from '../admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ImageInfo } from '../../objectClass/imageInfo';

@Component({
  selector: 'confi-slider',
  templateUrl: './confi-slider.component.html',
  styleUrls: ['./confi-slider.component.scss']
})
export class ConfiSliderComponent implements OnInit {
  
  pathFolder = 'slider';
  config : ConfigInfo;
  subscriptionConfig :ISubscription;
  @ViewChild(UploadFormComponent) uploadForm;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.config = new ConfigInfo();
    this.config.sliders.push(new ImageInfo());
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
      if(this.config.sliders == null || this.config.sliders.length  == 0){
        this.config.sliders = [];
        this.config.sliders.push(new ImageInfo());
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
    this.config.sliders[index].image = event.url;
    this.config.sliders[index].path = event.path;
  }
  onPlusImage(){
    this.config.sliders.push(new ImageInfo());
  }
  onRemoveImage(){
    if(this.config.sliders.length > 1){
      this.config.sliders.splice(-1,1);
    }
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }
}
