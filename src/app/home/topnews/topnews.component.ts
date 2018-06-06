import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewInfo } from '../../objectClass/newInfo';
import { ISubscription } from 'rxjs/Subscription';
import { AdminService } from '../../administrator/admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { Promotion } from '../../objectClass/promotion';

@Component({
  selector: 'topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.scss']
})
export class TopnewsComponent implements OnInit,OnDestroy {
  
  subscriptionConfig :ISubscription;
  subscriptionPromotion :ISubscription;
  news: NewInfo[];
  promotion: Promotion[];
  constructor(private service: AdminService,private orderPipe: OrderPipe) { }

  ngOnInit() {
    this.news = [];
    this.subscriptionConfig = this.service.getAllNews().subscribe(response => {
      this.news = this.orderPipe.transform(response, 'showTop');
      this.news = this.news.filter((item) => item.showTop == true);
    });
    this.promotion = [];
    this.subscriptionPromotion = this.service.getAllPromotion().subscribe(response => {
      this.promotion = this.orderPipe.transform(response);
    });
  }
  ngOnDestroy(): void {
    this.subscriptionConfig.unsubscribe();
    this.subscriptionPromotion.unsubscribe();
  }


}
