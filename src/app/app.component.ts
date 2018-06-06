/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
//import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    //this.analytics.trackPageViews();
  }
}