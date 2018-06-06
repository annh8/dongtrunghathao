import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTuyendungComponent } from './page-tuyendung.component';

describe('PageTuyendungComponent', () => {
  let component: PageTuyendungComponent;
  let fixture: ComponentFixture<PageTuyendungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTuyendungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTuyendungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
