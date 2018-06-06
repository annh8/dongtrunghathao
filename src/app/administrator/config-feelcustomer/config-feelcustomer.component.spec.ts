import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFeelcustomerComponent } from './config-feelcustomer.component';

describe('ConfigFeelcustomerComponent', () => {
  let component: ConfigFeelcustomerComponent;
  let fixture: ComponentFixture<ConfigFeelcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFeelcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFeelcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
