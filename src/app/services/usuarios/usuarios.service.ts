import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuariosService {

  constructor(private http: Http) { }

  getUsuariosPHP(): Observable<Usuario[]> {
    return this.http.get('http://www.2660323-1.web-hosting.es/listarUsuarios.php')
      .do(console.log)
      .map((res: Response) => res.json().then)
      .do(console.log);
  }

  DeleteUsuario(usuario: Usuario) {
    return this.http.post('http://www.2660323-1.web-hosting.es/EliminarUsuario.php', usuario)
      .map(response => {
        console.log('usuario eliminada', response);
        return response;
      })
      .catch(error => {
        console.log('error al eliminar', error);
        return Observable.throw(error);
      });
  }

  insertUser(user: Usuario): Observable<Usuario> {
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
