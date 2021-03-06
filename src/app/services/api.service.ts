import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ApiService {
  BASE_URL = 'http://188.166.252.214:8000';

  constructor(private http: HttpClient) {
  }

  getHeaders(): any {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + localStorage.getItem('token')
    });
  }

  getSimpleHeaders(): any {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getDataUser() {
    return this.http.get(this.BASE_URL + '/rest-auth/user/', {headers: this.getHeaders()});
  }

  signOut() {
    return this.http.post(this.BASE_URL + '/rest-auth/logout/', null, {headers: this.getHeaders()});
  }

  getMaterias() {
    return this.http.get(this.BASE_URL + '/api/app/viewsets/materias/', {headers: this.getHeaders()});
  }

  getTutores() {
    return this.http.get(this.BASE_URL + '/api/app/viewsets/usuarios/', {headers: this.getHeaders()});
  }

  getTutoresMateria(id) {
    return this.http.get(this.BASE_URL + '/api/app/viewsets/materias/' + id + '/tutores/', {headers: this.getHeaders()});
  }

  getPerfilTutor(id) {
    return this.http.get(this.BASE_URL + '/api/app/viewsets/usuarios/' + id + '/', {headers: this.getHeaders()});
  }

  getMateriasTutor(id) {
    return this.http.get(this.BASE_URL + '/api/app/viewsets/usuarios/' + id + '/materias/', {headers: this.getHeaders()});
  }

  getMateriasUsuario() {
    return this.http.get(this.BASE_URL + '/api/app/materias-usuario/', {headers: this.getHeaders()});
  }

  addMateriaUsuario(id) {
    return this.http.post(this.BASE_URL + '/api/app/materias-usuario/', {
      'materia': id
    }, {headers: this.getHeaders()});
  }

  putMateriaUsuario(id, precio) {
    return this.http.put(this.BASE_URL + '/api/app/materia-usuario/' + id + '/', {
      'precio': precio
    }, {headers: this.getHeaders()});
  }

  deleteMateriaUsuario(id) {
    return this.http.delete(this.BASE_URL + '/api/app/materia-usuario/' + id + '/', {headers: this.getHeaders()});
  }

  postNewUser(data) {
    return this.http.post(this.BASE_URL + '/api/app/crear_usuario/', data, this.getSimpleHeaders());
  }

  enviarSolicitud(data) {
    return this.http.post(this.BASE_URL + '/api/app/viewsets/solicitudes/', data, this.getHeaders());
  }

  calificarTutoria(id, data) {
    return this.http.put(this.BASE_URL + '/api/app/viewsets/solicitudes/' + id + '/calificar/', data, this.getHeaders());
  }

  solicitudesEnviadas(id) {
    return this.http.get(this.BASE_URL + '/api/app/viewsets/solicitudes/' + id + '/enviadas/', {headers: this.getHeaders()});
  }

  solicitudesRecibidas(id) {
    return this.http.get(this.BASE_URL + '/api/app/viewsets/solicitudes/' + id + '/recibidas/', {headers: this.getHeaders()});
  }

  solicitudAction(id, action) {
    return this.http.get(this.BASE_URL + '/api/app/viewsets/solicitudes/' + id + action, {headers: this.getHeaders()});
  }

  getOpinionesUsuario(id) {
    return this.http.get(this.BASE_URL + '/api/app/viewsets/usuarios/' + id + '/solicitudes/', {headers: this.getHeaders()});
  }

}
