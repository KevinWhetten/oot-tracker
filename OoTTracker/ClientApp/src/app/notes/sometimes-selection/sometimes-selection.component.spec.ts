import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SometimesSelectionComponent } from './sometimes-selection.component';

describe('SometimesSelectionComponent', () => {
  let component: SometimesSelectionComponent;
  let fixture: ComponentFixture<SometimesSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SometimesSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SometimesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
