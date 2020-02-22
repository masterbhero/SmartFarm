import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupPlantComponent } from './backup-plant.component';

describe('BackupPlantComponent', () => {
  let component: BackupPlantComponent;
  let fixture: ComponentFixture<BackupPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
