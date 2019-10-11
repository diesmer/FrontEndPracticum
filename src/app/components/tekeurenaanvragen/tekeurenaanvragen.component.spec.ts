import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekeurenaanvragenComponent } from './tekeurenaanvragen.component';

describe('TekeurenaanvragenComponent', () => {
  let component: TekeurenaanvragenComponent;
  let fixture: ComponentFixture<TekeurenaanvragenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekeurenaanvragenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekeurenaanvragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
