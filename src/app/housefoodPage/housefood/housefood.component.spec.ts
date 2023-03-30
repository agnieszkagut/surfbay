import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousefoodComponent } from './housefood.component';

describe('HousefoodComponent', () => {
  let component: HousefoodComponent;
  let fixture: ComponentFixture<HousefoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousefoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
