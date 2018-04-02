import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {DecimalPipe} from '@angular/common';
import {DialogSolicitudComponent} from '../dialog-solicitud/dialog-solicitud.component';
import {MatDialog} from '@angular/material';
import {DialogCalificacionComponent} from '../dialog-calificacion/dialog-calificacion.component';

@Component({
  selector: 'app-solicitudes-enviadas',
  templateUrl: './solicitudes-enviadas.component.html',
  styleUrls: ['./solicitudes-enviadas.component.css']
})
export class SolicitudesEnviadasComponent implements OnInit {
  solicitudes: any = [];
  cantidad: any = 0;

  constructor(private api: ApiService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.api.solicitudesEnviadas(localStorage.getItem('user_id')).subscribe(
      (data) => {
        this.solicitudes = data['solicitudes'];
        this.cantidad = data['cantidad'];
      }
    );
  }

  getCurrentClass(solicitud) {
    return {
      'bg-warning': !solicitud.aprobada && !solicitud.cancelada && !solicitud.rechazada && !solicitud.finalizada,
      'bg-danger': solicitud.cancelada || solicitud.rechazada,
      'bg-info': solicitud.finalizada,
      'bg-success': solicitud.aprobada && !solicitud.cancelada && !solicitud.rechazada && !solicitud.finalizada
    };
  }

  getTitle(solicitud) {
    let mensaje = null;
    if (!solicitud.aprobada && !solicitud.cancelada && !solicitud.rechazada && !solicitud.finalizada) {
      mensaje = 'Pendiente de revision';
    }
    if (solicitud.cancelada) {
      mensaje = 'Solicitud cancelada';
    }
    if (solicitud.finalizada) {
      mensaje = 'Solicitud Finalizada';
    }
    if (solicitud.aprobada) {
      mensaje = 'Solicitud aprobada';
    }
    if (solicitud.rechazada) {
      mensaje = 'Solicitud Rechazada';
    }
    return mensaje;
  }

  archivar(id) {
    this.api.solicitudAction(id, '/archivar/').subscribe(
      data => {
        this.fetchData();
      }
    );
  }

  cancelar(id) {
    this.api.solicitudAction(id, '/cancelar/').subscribe(
      data => {
        this.fetchData();
      }
    );
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(DialogCalificacionComponent, {
      width: '450px',
      data: {
        'id': id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fetchData();
    });
  }

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}
