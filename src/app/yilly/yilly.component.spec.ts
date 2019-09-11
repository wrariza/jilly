import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YillyComponent } from './yilly.component';

describe('YillyComponent', () => {
  let component: YillyComponent;
  let fixture: ComponentFixture<YillyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YillyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YillyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
