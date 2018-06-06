import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NewInfo } from '../../objectClass/newInfo';
import { ImageInfo } from '../../objectClass/imageInfo';
import { NewDetail } from '../../objectClass/newDetail';
import { ISubscription } from 'rxjs/Subscription';
import { AdminService } from '../../administrator/admin.service';

@Component({
  selector: 'gioithieu',
  templateUrl: './gioithieu.component.html',
  styleUrls: ['./gioithieu.component.scss']
})
export class GioithieuComponent implements OnInit,OnDestroy {

  ngOnDestroy(): void {
    this.subscriptionConfig.unsubscribe();
  }
  new: NewInfo;
  subscriptionConfig :ISubscription;
  constructor(private service: AdminService) {
    this.new = new NewInfo();
    this.new.imageInfo.push(new ImageInfo());
    this.new.newDetail.push(new NewDetail());

    const id = 'gioi-thieu';
    this.subscriptionConfig =  this.service.getGioiThieuById(id).subscribe((response) => {
      if(response.length > 0 )
        this.new = response[0];
    });
   }

  ngOnInit() {

  }

}
