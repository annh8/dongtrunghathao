import { Component, OnInit, OnDestroy } from '@angular/core';
import { runLazyload } from '../../../assets/javascript/custom'; 
import { ConfigInfo } from '../../objectClass/configInfo';
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { AdminService } from '../../administrator/admin.service';
@Component({
  selector: 'trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})
export class TrangchuComponent implements OnInit,OnDestroy  {

  config = new ConfigInfo;
  
  constructor(private router: Router,private service: AdminService) { }
  subscriptionConfig :ISubscription;
  ngOnInit() {
    this.config = new ConfigInfo();
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
    });
    runLazyload();
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }

}
