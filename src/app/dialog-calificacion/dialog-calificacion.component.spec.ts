import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCalificacionComponent } from './dialog-calificacion.component';

describe('DialogCalificacionComponent', () => {
  let component: DialogCalificacionComponent;
  let fixture: ComponentFixture<DialogCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
