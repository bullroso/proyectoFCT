import { Injectable } from '@angular/core';
import { ConnectionOptions } from 'mysql';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Injectable()
export class LoginService {

  result: string;

  constructor(private http: Http) { }

  getUsers(user: string, password: string) {
    // tslint:disable-next-line:label-position
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new URLSearchParams();
    params.append('password', password);
    params.append('correo', user);
    const promise = new Promise((resolve, reject) => {
      this.http.post('http://www.2660323-1.web-hosting.es/login.php', params)
          .toPromise()
          .then(
            res => { // Success
              this.result = res.json();
              resolve();
            }
          );
      });
    return this.result;
  }

}
