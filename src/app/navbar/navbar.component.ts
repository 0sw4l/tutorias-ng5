import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() login: boolean;
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();
  user = null;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.setUserName();
  }

  signOut(): void {
    this.api.signOut().subscribe(
      data => {
        console.log(data);
      }
    );
    localStorage.clear();
    this.logout.emit(false);
  }

  setUserName(): void {
    this.api.getDataUser().subscribe(data => {
      this.user = data['username'];
      localStorage.setItem('user_id', data['pk']);
    });
  }

}
