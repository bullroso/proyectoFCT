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
    return this.http.get('https://www.2660323-1.web-hosting.es/listarNoticias.php')
      .do(console.log)
      .map((res: Response) => res.json().then)
      .do(console.log);
  }

  insertNoticia(noticia: Noticia) {
    return this.http.post('https://www.2660323-1.web-hosting.es/insertarNoticias.php', noticia)
      .map(response => {
        console.log('noticia añadida', response);
        return response;
      })
      .catch(error => {
        console.log('error al insertar', error);
        return Observable.throw(error);
      });
  }

  DeleteNoticia(noticia: Noticia) {
    return this.http.post('https://www.2660323-1.web-hosting.es/EliminarNoticia.php', noticia)
      .map(response => {
        console.log('noticia eliminada', response);
        return response;
      })
      .catch(error => {
        console.log('error al eliminar', error);
        return Observable.throw(error);
      });
  }

  getNoticias() {
    return this.noticia;
  }

  async getNoticia(id: number): Promise<Noticia>{
    let not;
    await this.getNoticiasPHP().toPromise().then( noticia => noticia.forEach(function (value){
      if(value.id == id){
        not = value;
      }
    }));
    console.log('resultado...');
    console.log(not.titulo);
    return not;
  }
}
