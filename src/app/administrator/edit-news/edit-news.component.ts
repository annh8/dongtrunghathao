import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit,OnDestroy  {

  pathFolder = 'new';
  new : NewInfo;
  settings = {
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: false,
      position: 'left',
    },
    columns: {
      name: {
        title: 'Tên danh mục',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  subscriptionConfig :ISubscription;
  @ViewChild('proFocus') proFocusElement: ElementRef;
  @ViewChild(UploadFormComponent) uploadForm;
  constructor(private service: AdminService, private orderPipe: OrderPipe,private route: ActivatedRoute) {
    
  }
  ngOnInit() {
    this.new = new NewInfo();
    this.new.imageInfo.push(new ImageInfo());
    this.new.newDetail.push(new NewDetail());

    const id = this.route.snapshot.paramMap.get('id');
    this.subscriptionConfig =  this.service.getNewsById(id).subscribe((response) => {
      this.new = response[0];
    });
  }
  ngAfterViewInit(): void {
    this.proFocusElement.nativeElement.focus();
  }
  onSave(event) {
    if (window.confirm('Are you sure you want to save?')) {
      this.new.link = this.service.change_alias(this.new.name);
      this.service.saveNews(this.new);
      alert('Save success');
    } else {
      this.proFocusElement.nativeElement.focus();
    }

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
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }
}
