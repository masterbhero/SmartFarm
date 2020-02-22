import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDataDeleteComponent } from './plant-data-delete.component';

describe('PlantDataDeleteComponent', () => {
  let component: PlantDataDeleteComponent;
  let fixture: ComponentFixture<PlantDataDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantDataDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDataDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
