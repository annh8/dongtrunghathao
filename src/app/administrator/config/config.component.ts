import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';
import { ImageInfo } from '../../objectClass/imageInfo';
import { ConfigInfo } from '../../objectClass/configInfo';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit,OnDestroy {

  pathFolder = 'config';
  config : ConfigInfo;
  subscriptionConfig :ISubscription;
  @ViewChild('proFocus') proFocusElement: ElementRef;
  @ViewChild(UploadFormComponent) uploadForm;
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
    this.config = new ConfigInfo();
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
    });
    
  }
  ngAfterViewInit(): void {
    this.proFocusElement.nativeElement.focus();
    this.onClear();
  }

  onSave(event) {
    if (window.confirm('Are you sure you want to save?')) {
      this.service.saveConfig(this.config);
      alert('Save success');
    } else {
      this.proFocusElement.nativeElement.focus();
    }

  }
  onClear() {
    this.config= new ConfigInfo();
    this.uploadForm.clean();
    this.proFocusElement.nativeElement.focus();
  }
  receiveUrl(event) {
    this.config.logo = event.url;
    this.config.pathlogo = event.path;
  }
  receiveUrl2(event) {
    this.config.logoSmall = event.url;
    this.config.pathlogoSmall = event.path;
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }
}
