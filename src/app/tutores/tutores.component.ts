import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
})
export class TutoresComponent implements OnInit {
  tutores: any = [];
  tutores_copy: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.fetchTutores();
  }

  fetchTutores() {
    this.api.getTutores().subscribe(data => {
      this.tutores = data;
      this.tutores_copy = this.tutores;
    });
  }

  filterTutores(event) {
    this.tutores = this.tutores_copy;
    let val = event.target.value;
    if (val && val.trim() !== '') {
      this.tutores = this.tutores.filter((item) => {
        return (
          (item.nombre_completo.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (item.username.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}
