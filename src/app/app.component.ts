import { Component, Input, Output } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() public login: boolean;

  constructor(private router: Router) {
    this.login = !!localStorage.getItem('token');
  }

  setLoginValue(value): void {
    console.log(value);
    this.login = value;
    this.router.navigate(['inicio']);
  }

  logout(value): void {
    console.log(value);
    this.login = value;
    this.router.navigate(['']);
  }



}
