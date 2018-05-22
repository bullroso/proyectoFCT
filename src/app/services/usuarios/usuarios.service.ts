import { Injectable } from '@angular/core';
import { usuario } from '../../models/usuario';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }

  insertUser(user: usuario): Observable<usuario>{
    return this.http.post('http://www.2660323-1.web-hosting.es/insertarUsuario.php', user)
      .map(response => {
        console.log('usuario añadido', response);
        return response;
      })
      .catch(error => {
        console.log('error al insertar', error);
        return Observable.throw(error);
      });
  }
}
