import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzoekTonenQrComponent } from './verzoek-tonen-qr.component';

describe('VerzoekTonenQrComponent', () => {
  let component: VerzoekTonenQrComponent;
  let fixture: ComponentFixture<VerzoekTonenQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerzoekTonenQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerzoekTonenQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
