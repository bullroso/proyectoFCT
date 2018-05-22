import { Component, OnInit } from '@angular/core';
import {  Http, Response, Headers } from '@angular/http';
import { Noticia } from '../../models/noticia';

// Servicios
import { NoticiasService } from '../../services/noticias/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: []
})
export class NoticiasComponent implements OnInit {

  listado;

  constructor(private _noticias: NoticiasService) {
  }

    ngOnInit() {
       // this.noticias = this._noticias.getNoticias();
       this._noticias.getNoticiasPHP()
      .subscribe(
       noticias => (this.listado = noticias)
    );       // Asignamos nuestros datos mapeados a una variable
    }
}
