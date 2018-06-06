import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPartnerComponent } from './config-partner.component';

describe('ConfigPartnerComponent', () => {
  let component: ConfigPartnerComponent;
  let fixture: ComponentFixture<ConfigPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
