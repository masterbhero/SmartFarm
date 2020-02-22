import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McDataDeleteComponent } from './mc-data-delete.component';

describe('McDataDeleteComponent', () => {
  let component: McDataDeleteComponent;
  let fixture: ComponentFixture<McDataDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McDataDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McDataDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
