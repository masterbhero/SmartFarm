import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McaddComponent } from './mcadd.component';

describe('McaddComponent', () => {
  let component: McaddComponent;
  let fixture: ComponentFixture<McaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
