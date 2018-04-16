import { Injectable } from '@angular/core';

export interface NoticiasRules {
  titulo: string;
  descripcion: string;
  contenido: string;
}

@Injectable()
export class NoticiasService {

  noticia: NoticiasRules[] = [
    {
      'titulo' : 'noticia1',
      'descripcion' : 'Lorem ipsum dolor sit am consectetur adipiscing elitsi uariatur. E qui officia deserunt mollit anim id est laborum.',
      'contenido' : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,'
    },
    {
      'titulo' : 'noticia2',
      'descripcion' : 'Lorem ipsum dolor sit am consectetur adipiscing elitsi uariatur. E qui officia deserunt mollit anim id est laborum.',
      'contenido' : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,'
    },
    {
      'titulo' : 'noticia3',
      'descripcion' : 'Lorem ipsum dolor sit am consectetur adipiscing elitsi uariatur. E qui officia deserunt mollit anim id est laborum.',
      'contenido' : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,'
    }
  ];

  getNoticias() {
    return this.noticia;
  }
  constructor() { }

}
