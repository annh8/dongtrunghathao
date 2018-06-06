import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Category } from '../../objectClass/category';
import { UploadFormComponent } from '../uploads/upload-form/upload-form.component';
import { ImageInfo } from '../../objectClass/imageInfo';
import { NewInfo } from '../../objectClass/newInfo';
import { NewDetail } from '../../objectClass/newDetail';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-gioithieu',
  templateUrl: './page-gioithieu.component.html',
  styleUrls: ['./page-gioithieu.component.scss']
})
export class PageGioithieuComponent implements OnInit,OnDestroy {

  ngOnDestroy(): void {
    this.subscriptionConfig.unsubscribe();
  }
  pathFolder = 'new';
  new : NewInfo;
  subscriptionConfig :ISubscription;
  @ViewChild('proFocus') proFocusElement: ElementRef;
  @ViewChild(UploadFormComponent) uploadForm;
  
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    
  }
  ngOnInit() {
   
    this.new = new NewInfo();
    this.new.imageInfo.push(new ImageInfo());
    this.new.newDetail.push(new NewDetail());

    const id = 'gioi-thieu';
    this.subscriptionConfig =  this.service.getGioiThieuById(id).subscribe((response) => {
      if(response.length > 0 )
        this.new = response[0];
    });

  }
  ngAfterViewInit(): void {
    this.proFocusElement.nativeElement.focus();
    this.onClear();
  }
  onSave(event) {
    if (window.confirm('Are you sure you want to save?')) {
      this.new.link = this.service.change_alias(this.new.name);
      this.service.saveGioiThieu(this.new);
      this.onClear();
      alert('Save success');
    } else {
      this.proFocusElement.nativeElement.focus();
    }

  }
  onClear() {
    this.new= new NewInfo();
    this.new.newDetail.push(new NewDetail());
    this.new.imageInfo.push(new ImageInfo());
    this.uploadForm.clean();
    this.proFocusElement.nativeElement.focus();
  }
  receiveUrl(event,index) {
    this.new.imageInfo[index].image = event.url;
    this.new.imageInfo[index].path = event.path;
  }
  receiveDetailUrl(event,index) {
    this.new.newDetail[index].image = event.url;
    this.new.newDetail[index].path = event.path;
  }
  getContent(event,index) {
    this.new.newDetail[index].content = event;
  }
  onPlus(){
    this.new.newDetail.push(new NewDetail());
  }
  onRemove(){
    if(this.new.newDetail.length > 1){
      this.new.newDetail.splice(-1,1);
    }
  }
  onPlusImage(){
    this.new.imageInfo.push(new ImageInfo());
  }
  onRemoveImage(){
    if(this.new.imageInfo.length > 1){
      this.new.imageInfo.splice(-1,1);
    }
  }
}
