import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTuristaComponent } from './editar-turista.component';

describe('EditarTuristaComponent', () => {
  let component: EditarTuristaComponent;
  let fixture: ComponentFixture<EditarTuristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTuristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTuristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
