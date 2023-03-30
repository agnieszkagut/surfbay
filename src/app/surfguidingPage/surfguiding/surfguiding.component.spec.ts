import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfguidingComponent } from './surfguiding.component';

describe('SurfguidingComponent', () => {
  let component: SurfguidingComponent;
  let fixture: ComponentFixture<SurfguidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfguidingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurfguidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
