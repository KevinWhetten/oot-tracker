import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSelectionComponent } from './location-selection.component';

describe('SometimesSelectionComponent', () => {
  let component: LocationSelectionComponent;
  let fixture: ComponentFixture<LocationSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
