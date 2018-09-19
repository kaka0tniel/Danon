import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelengkapanDataPendanaComponent } from './pelengkapan-data-pendana.component';

describe('PelengkapanDataPendanaComponent', () => {
  let component: PelengkapanDataPendanaComponent;
  let fixture: ComponentFixture<PelengkapanDataPendanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelengkapanDataPendanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelengkapanDataPendanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
