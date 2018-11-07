import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTuristaComponent } from './registro-turista.component';

describe('RegistroTuristaComponent', () => {
  let component: RegistroTuristaComponent;
  let fixture: ComponentFixture<RegistroTuristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTuristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTuristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
