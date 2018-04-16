import { Component, OnInit } from '@angular/core';

// Servicios
import { NoticiasService, NoticiasRules } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: []
})
export class NoticiasComponent implements OnInit {

  noticias: NoticiasRules[] = [];
  constructor(private _noticias: NoticiasService) { }

  ngOnInit() {
    this.noticias = this._noticias.getNoticias();
  }

}
