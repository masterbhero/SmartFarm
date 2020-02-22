import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCancelComponent } from './register-cancel.component';

describe('RegisterCancelComponent', () => {
  let component: RegisterCancelComponent;
  let fixture: ComponentFixture<RegisterCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
