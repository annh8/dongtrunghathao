import { Component, OnInit, Input } from '@angular/core';
import { ConfigInfo } from '../../objectClass/configInfo';

@Component({
  selector: 'nkt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() menu: any;
  @Input() menuMobile: any;
  @Input() config: ConfigInfo;
  constructor() { }

  ngOnInit() {
  }

}
