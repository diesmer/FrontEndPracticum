import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AanvraagTonenComponent } from './aanvraag-tonen.component';

describe('AanvraagTonenComponent', () => {
  let component: AanvraagTonenComponent;
  let fixture: ComponentFixture<AanvraagTonenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AanvraagTonenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AanvraagTonenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
