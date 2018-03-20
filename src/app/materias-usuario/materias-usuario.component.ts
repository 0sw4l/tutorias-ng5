import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {DecimalPipe} from '@angular/common';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-materias-usuario',
  templateUrl: './materias-usuario.component.html',
  styleUrls: ['./materias-usuario.component.css']
})
export class MateriasUsuarioComponent implements OnInit {
  materias: any = [];
  materias_usuario: any = [];
  position = 'above';

  constructor(private api: ApiService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.fetchMateriasUsuario();
    this.api.getMaterias().subscribe(
      data => {
        this.materias = data;
      }
    );
  }

  fetchMateriasUsuario(): void {
    this.api.getMateriasUsuario().subscribe(
      data => {
        console.log(data);
        this.materias_usuario = data['materias'];
      }
    );
  }

  addMateriaUser(id) {
    this.api.addMateriaUsuario(id).subscribe(data => {
      console.log(data);
      this.refreshMateriasUsuarios(data, 'Materia Agregada', null);
    });
  }

  deleteMateriaUser(id): void {
    this.api.deleteMateriaUsuario(id).subscribe(
      data => {
        this.refreshMateriasUsuarios(data, 'Materia Eliminada', null);
      }
    );
  }

  refreshMateriasUsuarios(data, message, action): void {
    if (data['success'] === true) {
      this.showSnackBar(message, action);
      this.fetchMateriasUsuario();
    } else {
      this.showSnackBar('Ha ocurrido un error', null);
    }
  }

  updatePricingMateriaUser(id): void {
    let precio = (<HTMLInputElement>document.getElementById('input_' + id)).value;
    this.api.putMateriaUsuario(id, precio).subscribe(
      data => {
        this.refreshMateriasUsuarios(data, 'Materia Actualizada con exito', null);
      }
    );
  }

  showSnackBar(message, action): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
