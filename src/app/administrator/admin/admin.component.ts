import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../admin-menu';

@Component({
  selector: 'ngx-app',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
