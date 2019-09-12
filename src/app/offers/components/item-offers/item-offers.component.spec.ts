import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOffersComponent } from './item-offers.component';

describe('ItemOffersComponent', () => {
  let component: ItemOffersComponent;
  let fixture: ComponentFixture<ItemOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
