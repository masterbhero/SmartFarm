import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupMcComponent } from './backup-mc.component';

describe('BackupMcComponent', () => {
  let component: BackupMcComponent;
  let fixture: ComponentFixture<BackupMcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupMcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupMcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
