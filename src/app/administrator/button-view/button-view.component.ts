import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.scss']
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {  }
  ngOnInit() {
    this.renderValue = 'Edit';
  }

  onClick() {
    this.router.navigate([this.value+`/${this.rowData.id}`]);
  }
}