import { Injectable } from '@angular/core';
import { ConnectionOptions } from 'mysql';
import { HttpParams, HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpModule, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { promise } from 'protractor';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  result: string;

  async getUsers(user: string, password: string) {
    // tslint:disable-next-line:label-position
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new HttpParams();
    params.append('password', password);
    params.append('correo', user);
    await this.http.post('https://www.2660323-1.web-hosting.es/login.php?correo=' + user + '&password=' + password,
    {headers: headers, search: params})
    .toPromise().then(res => {this.result = res.valueOf().toString();
    });
    return this.result;
  }
}
