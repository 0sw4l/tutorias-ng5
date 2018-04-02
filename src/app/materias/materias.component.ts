import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  materias: any = [];
  materias_copy: any = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.fetchMaterias();
  }

  fetchMaterias() {
    this.api.getMaterias().subscribe(data => {
      this.materias = data;
      this.materias_copy = this.materias;
    });
  }

  filterMaterias(event) {
    this.materias = this.materias_copy;
    let val = event.target.value;
    if (val && val.trim() !== '') {
      this.materias = this.materias.filter((item) => {
        return (
          (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (item.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

}
