import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelcustomerComponent } from './feelcustomer.component';

describe('FeelcustomerComponent', () => {
  let component: FeelcustomerComponent;
  let fixture: ComponentFixture<FeelcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
