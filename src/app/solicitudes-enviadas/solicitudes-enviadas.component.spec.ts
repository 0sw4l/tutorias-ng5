import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesEnviadasComponent } from './solicitudes-enviadas.component';

describe('SolicitudesEnviadasComponent', () => {
  let component: SolicitudesEnviadasComponent;
  let fixture: ComponentFixture<SolicitudesEnviadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesEnviadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesEnviadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
