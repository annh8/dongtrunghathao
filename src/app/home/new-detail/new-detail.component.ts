import { Component, OnInit, Input } from '@angular/core';
import { NewInfo } from '../../objectClass/newInfo';

@Component({
  selector: 'new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewDetailComponent implements OnInit {

  @Input() new: NewInfo;
  constructor() { }

  ngOnInit() {
  }

}
