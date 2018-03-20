import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
})
export class TutoresComponent implements OnInit {
  tutores: any = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.fetchTutores();
  }

  fetchTutores() {
    this.api.getTutores().subscribe(data => this.tutores = data);
  }

}
