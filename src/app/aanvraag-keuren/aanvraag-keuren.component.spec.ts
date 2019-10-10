import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AanvraagKeurenComponent } from './aanvraag-keuren.component';

describe('AanvraagKeurenComponent', () => {
  let component: AanvraagKeurenComponent;
  let fixture: ComponentFixture<AanvraagKeurenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AanvraagKeurenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AanvraagKeurenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
