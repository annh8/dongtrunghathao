import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigYoutubeComponent } from './config-youtube.component';

describe('ConfigYoutubeComponent', () => {
  let component: ConfigYoutubeComponent;
  let fixture: ComponentFixture<ConfigYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
