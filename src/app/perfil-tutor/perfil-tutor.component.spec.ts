import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTutorComponent } from './perfil-tutor.component';

describe('PerfilTutorComponent', () => {
  let component: PerfilTutorComponent;
  let fixture: ComponentFixture<PerfilTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
