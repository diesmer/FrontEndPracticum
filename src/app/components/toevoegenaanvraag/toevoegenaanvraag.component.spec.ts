import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToevoegenaanvraagComponent } from './toevoegenaanvraag.component';

describe('ToevoegenaanvraagComponent', () => {
  let component: ToevoegenaanvraagComponent;
  let fixture: ComponentFixture<ToevoegenaanvraagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToevoegenaanvraagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToevoegenaanvraagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
