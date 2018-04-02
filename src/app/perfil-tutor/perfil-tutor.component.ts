import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';
import { DecimalPipe } from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogSolicitudComponent} from '../dialog-solicitud/dialog-solicitud.component';
import {DialogCalificacionComponent} from '../dialog-calificacion/dialog-calificacion.component';
import {DialogComentariosTutorComponent} from '../dialog-comentarios-tutor/dialog-comentarios-tutor.component';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-perfil-tutor',
  templateUrl: './perfil-tutor.component.html',
  styleUrls: ['./perfil-tutor.component.css']
})
export class PerfilTutorComponent implements OnInit {
  tutor: any = {};
  materias: any = [];
  position = 'before';
  constructor(private route: ActivatedRoute,
              private api: ApiService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.bindDataDom(params['id']);
      }
    );
  }

  bindDataDom(id): void {
    this.api.getMateriasTutor(id).subscribe(
      data => {
        this.materias = data['materias'];
      });
    this.api.getPerfilTutor(id).subscribe(
      data => {
        this.tutor = data;
      }
    );
  }

  openDialog(materia_tutor_id , materia, precio, tutor_id): void {
    const dialogRef = this.dialog.open(DialogSolicitudComponent, {
      width: '850px',
      data: {
        'materia': materia,
        'materia_tutor_id': materia_tutor_id,
        'precio': precio,
        'tutor_id': tutor_id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  openDialogComentarios(id): void {
    const dialogRef = this.dialog.open(DialogComentariosTutorComponent, {
      width: '950px',
      data: {
        'id': id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


