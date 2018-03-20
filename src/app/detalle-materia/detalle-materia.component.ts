import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../services/api.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {
  materia: null;
  descripcion: null;
  tutores: any = [];
  usuarios: any = [];
  request_user: any = null;

  constructor(private route: ActivatedRoute,
              private api: ApiService) {
  }

  ngOnInit() {
    this.request_user = localStorage.getItem('user_id');
    this.route.params.subscribe(
      params => {
        this.api.getTutoresMateria(params['id']).subscribe(
          data => {
            this.bindDataDom(data);
          }
        );
      }
    );
  }

  bindDataDom(data) {
    this.materia = data['materia'];
    this.descripcion = data['descripcion'];
    this.usuarios = data['usuarios'];
    this.tutores = data['tutores'];
  }

  compareUser(id) {
    console.log(id);
    return this.request_user === id;
  }

}
