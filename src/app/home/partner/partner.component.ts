import { Component, OnInit, Input } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ConfigInfo } from '../../objectClass/configInfo';
@Component({
  selector: 'partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: false } }
  ]
})
export class PartnerComponent implements OnInit {
  @Input() config: ConfigInfo;
  constructor() { }

  ngOnInit() {
  }

}
