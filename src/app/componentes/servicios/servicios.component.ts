import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor() { }
  activar = 'tab-pane fade active show';
  desactivar = 'tab-pane fade';
  tab1 =  this.activar;
  tab2 =  this.desactivar;
  tab3 =  this.desactivar;
  tab4 =  this.desactivar;
  tab1Activo = true;
  tab2Activo = true;
  tab3Activo = true;
  tab4Activo = true;

  ngOnInit() {
  }


  activarTab1() {
    this.tab1Activo = true;
    this.tab2Activo = false;
    this.tab3Activo = false;
    this.tab4Activo = false;
    this.mostrar();
  }

  activarTab2() {
    this.tab1Activo = false;
    this.tab2Activo = true;
    this.tab3Activo = false;
    this.tab4Activo = false;
    this.mostrar();
  }

  activarTab3() {
    this.tab1Activo = false;
    this.tab2Activo = false;
    this.tab3Activo = true;
    this.tab4Activo = false;
    this.mostrar();
  }

  activarTab4() {
    this.tab1Activo = false;
    this.tab2Activo = false;
    this.tab3Activo = false;
    this.tab4Activo = true;
    this.mostrar();
  }

  mostrar() {
    this.tab1 = (this.tab1Activo) ?  this.activar : this.desactivar;
    this.tab2 = (this.tab2Activo) ?  this.activar : this.desactivar;
    this.tab3 = (this.tab3Activo) ?  this.activar : this.desactivar;
    this.tab4 = (this.tab4Activo) ?  this.activar : this.desactivar;
  }
}
