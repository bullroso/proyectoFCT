import { Injectable } from '@angular/core';
import { ContactModel } from '../../models/ContactModel';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SendEmailService {
  type: any;
  constructor( private http: HttpClient) { }
  getResponseEmail(_body: ContactModel): Observable<any> {
    // this.http.post('/send.php',_body).subscribe(data =>{
    //   console.log(data);
    //   this.type = JSON.stringify(data);
    // });
    return this.http.post('http://www.2660323-1.web-hosting.es/send.php', _body);
  }
  sendEmail(message: ContactModel): Observable<ContactModel> | any {
    return this.http.post('http://www.2660323-1.web-hosting.es/enviar2.php', message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      });
  }
}
