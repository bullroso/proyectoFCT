import { Component, OnInit } from '@angular/core';
import {  Http, Response, Headers } from '@angular/http';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';

// Servicios
import { NoticiasService, NoticiasRules } from '../../services/noticias/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: []
})
export class NoticiasComponent implements OnInit {

  noticias: any[] = [];
  itemResource;
  items = [];
  itemCount = 0;
  params = {offset: 0, limit: 10}; // Static can be changed as per your need
  formFlag = 'add';

  constructor(private _noticias: NoticiasService) {
    // DB service function called
    _noticias.getNoticiasPHP().subscribe(
      (response: Response) => {
        this.noticias = response.json();
        this.reloadItems(this.params);
      } ,
      (error) => {console.log(error); }
  );
  }

    reloadItems(params) {
    this.itemResource = new DataTableResource(this.noticias);
    this.itemResource.count().then(count => this.itemCount = count);
      this.itemResource.query(params).then(items => this.items = items);
    }

    ngOnInit() {
       // this.noticias = this._noticias.getNoticias();
    }
}
