import { Component, OnInit } from '@angular/core';
import { NewInfo } from '../../objectClass/newInfo';
import { ISubscription } from 'rxjs/Subscription';
import { AdminService } from '../../administrator/admin.service';
import { ImageInfo } from '../../objectClass/imageInfo';
import { NewDetail } from '../../objectClass/newDetail';

@Component({
  selector: 'tuyendung',
  templateUrl: './tuyendung.component.html',
  styleUrls: ['./tuyendung.component.scss']
})
export class TuyendungComponent implements OnInit {

  new: NewInfo;
  subscriptionConfig :ISubscription;
  ngOnDestroy(): void {
    this.subscriptionConfig.unsubscribe();
  }

  constructor(private service: AdminService) { 
    this.new = new NewInfo();
    this.new.imageInfo.push(new ImageInfo());
    this.new.newDetail.push(new NewDetail());

    const id = 'tuyen-dung';
    this.subscriptionConfig =  this.service.getTuyenDungById(id).subscribe((response) => {
      if(response.length > 0 )
        this.new = response[0];
    });
  }

  ngOnInit() {
  }

}
