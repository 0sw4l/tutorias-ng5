import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesRecibidasComponent } from './solicitudes-recibidas.component';

describe('SolicitudesRecibidasComponent', () => {
  let component: SolicitudesRecibidasComponent;
  let fixture: ComponentFixture<SolicitudesRecibidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesRecibidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
