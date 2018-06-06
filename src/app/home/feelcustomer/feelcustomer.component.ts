import { Component, OnInit, Input } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ConfigInfo } from '../../objectClass/configInfo';
@Component({
  selector: 'feelcustomer',
  templateUrl: './feelcustomer.component.html',
  styleUrls: ['./feelcustomer.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: false } }
  ]
})
export class FeelcustomerComponent implements OnInit {

  @Input() config: ConfigInfo
  constructor() { }

  ngOnInit() {
    
  }

}
