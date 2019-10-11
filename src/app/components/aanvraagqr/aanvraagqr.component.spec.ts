import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AanvraagqrComponent } from './aanvraagqr.component';

describe('AanvraagqrComponent', () => {
  let component: AanvraagqrComponent;
  let fixture: ComponentFixture<AanvraagqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AanvraagqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AanvraagqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
