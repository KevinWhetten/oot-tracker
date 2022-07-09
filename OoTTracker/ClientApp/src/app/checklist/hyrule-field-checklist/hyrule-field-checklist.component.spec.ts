import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyruleFieldChecklistComponent } from './hyrule-field-checklist.component';

describe('RanchChecklistComponent', () => {
  let component: HyruleFieldChecklistComponent;
  let fixture: ComponentFixture<HyruleFieldChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyruleFieldChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyruleFieldChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
