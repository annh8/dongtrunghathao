import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ConfigInfo } from '../../objectClass/configInfo';
 
@Component({
  selector: 'nkt-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 15000, noPause: true, showIndicators: true } }
  ]
})
export class SliderComponent implements OnInit {
  
  @Input() config: ConfigInfo
  constructor() {
    
   }

  ngOnInit() {
  }

}
