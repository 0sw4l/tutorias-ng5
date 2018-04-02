import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComentariosTutorComponent } from './dialog-comentarios-tutor.component';

describe('DialogComentariosTutorComponent', () => {
  let component: DialogComentariosTutorComponent;
  let fixture: ComponentFixture<DialogComentariosTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComentariosTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComentariosTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
