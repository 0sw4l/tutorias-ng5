import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-solicitudes-recibidas',
  templateUrl: './solicitudes-recibidas.component.html',
  styleUrls: ['./solicitudes-recibidas.component.css']
})
export class SolicitudesRecibidasComponent implements OnInit {
  solicitudes: any = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.api.solicitudesRecibidas(localStorage.getItem('user_id')).subscribe(
      data => {
        this.solicitudes = data['solicitudes'];
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
      mensaje = 'Sin Revisar';
    }
    if (solicitud.cancelada) {
      mensaje = 'El estudiante ha cancelado la solicitud';
    }
    if (solicitud.finalizada) {
      mensaje = 'Has finalizado esta solicitud';
    }
    if (solicitud.aprobada) {
      mensaje = 'Has aprobado esta solicitud';
    }
    if (solicitud.rechazada) {
      mensaje = 'Has rechazado esta solicitud';
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

  rechazar(id) {
    this.api.solicitudAction(id, '/rechazar/').subscribe(
      data => {
        this.fetchData();
      }
    );
  }

  aceptar(id) {
    this.api.solicitudAction(id, '/aceptar/').subscribe(
      data => {
        this.fetchData();
      }
    );
  }

  finalizar(id) {
    this.api.solicitudAction(id, '/finalizar/').subscribe(
      data => {
        this.fetchData();
      }
    );
  }

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}
