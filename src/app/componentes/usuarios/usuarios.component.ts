import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = [
    {id: 1, nombre: 'ejemplo', password: 'ejemplo'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
