import { Injectable } from '@angular/core';
import { ConnectionOptions } from 'mysql';

export interface NoticiasRules {
  id: number;
  titulo: string;
  descripcion: string;
  contenido: string;
}

@Injectable()
export class NoticiasService {

  noticia: NoticiasRules[] = [
    {
      'id' : 1,
      'titulo' : 'noticia1',
      'descripcion' : 'Lorem ipsum dolor sit am consectetur adipiscing elitsi uariatur. E qui officia deserunt mollit anim id est laborum.',
      'contenido' : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,'
    },
    {
      'id' : 2,
      'titulo' : 'noticia2',
      'descripcion' : 'Lorem ipsum dolor sit am consectetur adipiscing elitsi uariatur. E qui officia deserunt mollit anim id est laborum.',
      'contenido' : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,'
    },
    {
      'id' : 3,
      'titulo' : 'noticia3',
      'descripcion' : 'Lorem ipsum dolor sit am consectetur adipiscing elitsi uariatur. E qui officia deserunt mollit anim id est laborum.',
      'contenido' : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,'
    }
  ];

  getNoticias() {
    return this.noticia;
  }

  getNoticia(id: number) {
    return this.getNoticias().find( noticia => noticia.id === id);
  }
  constructor() { }

}
