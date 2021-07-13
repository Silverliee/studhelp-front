import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDealComponent } from './goodDeal.component';

describe('GoodDealComponent', () => {
  let component: GoodDealComponent;
  let fixture: ComponentFixture<GoodDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodDealComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
