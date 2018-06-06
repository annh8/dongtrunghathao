import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigInfo } from '../../objectClass/configInfo';
import { ISubscription } from 'rxjs/Subscription';
import { AdminService } from '../admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { VideoInfo } from '../../objectClass/videoInfo';

@Component({
  selector: 'config-youtube',
  templateUrl: './config-youtube.component.html',
  styleUrls: ['./config-youtube.component.scss']
})
export class ConfigYoutubeComponent implements OnInit {

  pathFolder = 'slider';
  config : ConfigInfo;
  subscriptionConfig :ISubscription;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.config = new ConfigInfo();
    this.config.video.push(new VideoInfo());
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
      if(this.config.video == null || this.config.video.length  == 0){
        this.config.video = [];
        this.config.video.push(new VideoInfo());
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
  receiveData(event,index) {
    this.config.video[index].key = event.target.value;
  }
  receiveDataTitle(event,index) {
    this.config.video[index].title = event.target.value;
  }
  onPlusVideo(){
    this.config.video.push(new VideoInfo());
  }
  onRemoveVideo(){
    if(this.config.video.length > 1){
      this.config.video.splice(-1,1);
    }
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }

}
