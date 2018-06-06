import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGioithieuComponent } from './page-gioithieu.component';

describe('PageGioithieuComponent', () => {
  let component: PageGioithieuComponent;
  let fixture: ComponentFixture<PageGioithieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGioithieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGioithieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
