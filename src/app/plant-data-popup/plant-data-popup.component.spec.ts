import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDataPopupComponent } from './plant-data-popup.component';

describe('PlantDataPopupComponent', () => {
  let component: PlantDataPopupComponent;
  let fixture: ComponentFixture<PlantDataPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantDataPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDataPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
