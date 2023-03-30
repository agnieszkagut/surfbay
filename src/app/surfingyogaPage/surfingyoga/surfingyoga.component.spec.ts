import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfingyogaComponent } from './surfingyoga.component';

describe('SurfingyogaComponent', () => {
  let component: SurfingyogaComponent;
  let fixture: ComponentFixture<SurfingyogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfingyogaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurfingyogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
