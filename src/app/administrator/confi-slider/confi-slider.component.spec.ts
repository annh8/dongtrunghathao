import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiSliderComponent } from './confi-slider.component';

describe('ConfiSliderComponent', () => {
  let component: ConfiSliderComponent;
  let fixture: ComponentFixture<ConfiSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
