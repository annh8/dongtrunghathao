import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NewInfo } from '../../objectClass/newInfo';
import { OrderPipe } from 'ngx-order-pipe';
import { AdminService } from '../../administrator/admin.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.scss']
})
export class TintucComponent implements OnInit {

  data: NewInfo[];
  news: NewInfo[];
  @ViewChild('proFocus') proFocusElement: ElementRef;
  constructor(private service: AdminService, private orderPipe: OrderPipe,private titleService: Title) { 
    
  }

  ngOnInit() {
    this.service.getAllNews().subscribe((response) => {
      this.data = this.orderPipe.transform(response, 'order');
      this.news = this.data;
    });
    this.proFocusElement.nativeElement.focus();
  }
  onChange(event) {
    var t = event.target.value.split('&');
    switch (t[0]) {
      case 'name':
        if (t[1] === 'ASC')
          this.news = this.data.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        else
          this.news = this.data.sort(function (a, b) { return (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0); });
        break;
      default: break;
    }
  }
}
