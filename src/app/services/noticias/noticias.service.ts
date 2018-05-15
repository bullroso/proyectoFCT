import { Injectable } from '@angular/core';
import { ConnectionOptions } from 'mysql';
import { Noticia } from '../../models/noticia';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class NoticiasService {
  type: any;
  constructor( private http: Http) { }

  noticia: Noticia[] = [
    {
      'id' : 1,
      'titulo' : 'noticia1',
      'cabecera' : 'Lorem ipsum dolor sit am consectetur adipiscing elitsi uariatur. E qui officia deserunt mollit anim id est laborum.',
      'texto' : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
      'fecha' : '01.01.2000,'
    },
    {
      'id' : 2,
      'titulo' : 'noticia2',
      'cabecera' : 'Lorem ipsum dolor sit am consectetur adipiscing elitsi uariatur. E qui officia deserunt mollit anim id est laborum.',
      'texto' : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
      'fecha' : '01.01.2000,'
    },
    {
      'id' : 3,
      'titulo' : 'noticia3',
      'cabecera' : 'Lorem ipsum dolor sit am consectetur adipiscing elitsi uariatur. E qui officia deserunt mollit anim id est laborum.',
      'texto' : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
      'fecha' : '01.01.2000,'
    },
  ];

  getNoticiasPHP(): Observable<Noticia[]> {
    return this.http.get('http://www.2660323-1.web-hosting.es/listarNoticias.php')
      .do(console.log)
      // tslint:disable
      .map((res: Response) => res.json().then) // tslint:disable-line
      // tslint:enable
      .do(console.log);
  }

  getNoticias() {
    return this.noticia;
  }

  getNoticia(id: number) {
    return this.getNoticias().find( noticia => noticia.id === id);
  }
}
