import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  BASE_URL = 'http://localhost:8000/rest-auth/login/';
  @Input() login: boolean;
  @Output() setLoginValue: EventEmitter<any> = new EventEmitter<any>();
  error_fields = false;
  error_user = false;
  error_user_msg = null;
  error_register_fields = false;
  error_register_msg = null;
  registro = false;

  constructor(private http: HttpClient,
              private router: Router,
              private api: ApiService) {
  }

  ngOnInit() {
    this.showNotify('Bienvenido a Tutorias App!', 'success');
  }

  public validateLogin(user: string, password: string): void {
    if (user.length > 0 && password.length > 0) {
      this.http.post(this.BASE_URL, {
        'username': user,
        'password': password
      }).subscribe(
        res => this.setTokenUser(res),
        error => this.handleError(error)
      );
    } else {
      this.error_user = false;
      this.error_fields = true;
    }
  }

  public setTokenUser(response): void {
    if (response['key']) {
      localStorage.setItem('token', response['key']);
      this.setLoginValue.emit(true);
    }
  }

  public handleError = (error: Response) => {
    this.error_fields = false;
    this.error_user = true;
    this.error_user_msg = error['error']['non_field_errors'][0];
  };

  public raiseRegisterError() {
    this.error_register_fields = true;
    this.error_register_msg = 'Debe completar todos los campos';
  }

  showRegistroForm() {
    this.registro = !this.registro;
  }

  public validateRegister(form: NgForm) {
    console.log(form.value);
    console.log(form.valid);
    if (form.valid) {
      const user = form.value;
      if (user['password_1'] === user['password_2']) {
        user['password'] = user['password_1'];
        console.log(user);
        this.api.postNewUser(user).subscribe(
          (data) => {
            console.log(data);
            if (data['id']) {
              this.showNotify('Registro Enviado con exito!', 'success');
              this.validateLogin(
                user['username'],
                user['password']);
            }
          },
          error => this.handleErrorRegister(error)
        );
      } else {
        this.showNotify('Error, Las contraseñas no coinciden', 'warning');
      }
    } else {
      this.showNotify('Error al enviar los datos, revise los campos y vuelva a intentarlo', 'danger');
    }
  }

  public handleErrorRegister(response: Response): void {
    console.log(response['error']);
    const data = response['error'];
    for (const key in data) {
      console.log(key);
      data[key].forEach(item => {
        this.showNotify(key + ': ' + item, 'danger');
      });
    }
  }

  public showNotify(text: string, type: string): void {
    $.bootstrapGrowl(text, {
      type: type,
      delay: 6000,
      width: 400
    });
  }

}
