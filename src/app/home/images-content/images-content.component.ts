import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../../administrator/admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ISubscription } from 'rxjs/Subscription';
import { ConfigInfo } from '../../objectClass/configInfo';

@Component({
  selector: 'images-content',
  templateUrl: './images-content.component.html',
  styleUrls: ['./images-content.component.scss']
})
export class ImagesContentComponent implements OnInit,OnDestroy {

  subscriptionConfig :ISubscription;
  config : ConfigInfo;
  ngOnDestroy(): void {
    this.subscriptionConfig.unsubscribe();
  }
  
  constructor(private service: AdminService, private orderPipe: OrderPipe) {
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
    });
   }

  ngOnInit() {
  }

}
