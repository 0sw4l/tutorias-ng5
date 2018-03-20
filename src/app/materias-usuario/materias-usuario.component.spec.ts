import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasUsuarioComponent } from './materias-usuario.component';

describe('MateriasUsuarioComponent', () => {
  let component: MateriasUsuarioComponent;
  let fixture: ComponentFixture<MateriasUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
