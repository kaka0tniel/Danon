import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifikasiSmsComponent } from './verifikasi-sms.component';

describe('VerifikasiSmsComponent', () => {
  let component: VerifikasiSmsComponent;
  let fixture: ComponentFixture<VerifikasiSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifikasiSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifikasiSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
