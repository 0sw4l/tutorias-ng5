import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  materias: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.fetchMaterias();
  }

  fetchMaterias() {
    this.api.getMaterias().subscribe(data => this.materias = data);
  }

}
