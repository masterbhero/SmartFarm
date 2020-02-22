import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MceditComponent } from './mcedit.component';

describe('MceditComponent', () => {
  let component: MceditComponent;
  let fixture: ComponentFixture<MceditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MceditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MceditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
