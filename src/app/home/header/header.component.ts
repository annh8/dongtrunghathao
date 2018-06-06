import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { customInit } from '../../../assets/javascript/custom'; 
import { ConfigInfo } from '../../objectClass/configInfo';
import { ISubscription } from 'rxjs/Subscription';
import { AdminService } from '../../administrator/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nkt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
  subscriptionConfig :ISubscription;
  @Input() menu: any;
  @Input() menuMobile: any;
  @Input() config: ConfigInfo;
  filter_keyword:string;
  constructor(private service: AdminService,private router: Router) {
    
    
  }

  ngOnInit() {
    customInit();
  }
  ngOnDestroy(){
    
  }
  search(){
    this.router.navigate(['tim-kiem/'+this.filter_keyword]);
  }
  // changeRoute(url) {
  //   this.router.navigateByUrl(url, { skipLocationChange: true });
  //   setTimeout(() => this.router.navigate(url));
  // }
}
