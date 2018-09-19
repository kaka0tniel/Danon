import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbyComponent } from './registerby.component';

describe('RegisterbyComponent', () => {
  let component: RegisterbyComponent;
  let fixture: ComponentFixture<RegisterbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
