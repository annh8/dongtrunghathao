import { Component, OnInit, Input } from '@angular/core';
import { ConfigInfo } from '../../objectClass/configInfo';

@Component({
  selector: 'consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {

  @Input() config: ConfigInfo
  constructor() { }

  ngOnInit() {
  }

}
