import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteditComponent } from './plantedit.component';

describe('PlanteditComponent', () => {
  let component: PlanteditComponent;
  let fixture: ComponentFixture<PlanteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
