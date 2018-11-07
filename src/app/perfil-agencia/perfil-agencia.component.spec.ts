import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAgenciaComponent } from './perfil-agencia.component';

describe('PerfilAgenciaComponent', () => {
  let component: PerfilAgenciaComponent;
  let fixture: ComponentFixture<PerfilAgenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAgenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
