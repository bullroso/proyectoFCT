import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noPause = true;
  myInterval = 10000;
  activeSlideIndex = 0;

  slides = [
    {image: 'assets/img/slider/1.jpg'},
    {image: 'assets/img/slider/2.jpg'},
    {image: 'assets/img/slider/3.jpg'}
  ];

  activar = 'tab-pane fade active show';
  seleccionado = 'nav-link';
  desactivar = 'tab-pane fade';
  deseleccionado = 'nav-link active link';
  tab1 =  this.activar;
  sel1 = this.seleccionado;
  tab2 =  this.desactivar;
  sel2 = this.deseleccionado;
  tab3 =  this.desactivar;
  sel3 = this.deseleccionado;
  tab4 =  this.desactivar;
  sel4 = this.deseleccionado;
  tab5 =  this.desactivar;
  sel5 = this.deseleccionado;
  tab6 =  this.desactivar;
  sel6 = this.deseleccionado;
  tab1Activo = true;
  tab2Activo = true;
  tab3Activo = true;
  tab4Activo = true;
  tab5Activo = true;
  tab6Activo = true;

  constructor() { }

  ngOnInit() {
    localStorage.removeItem('email');
  }

  activarTab1() {
    this.reset();
    this.tab1Activo = true;
    this.mostrar();
  }

  activarTab2() {
    this.reset();
    this.tab2Activo = true;
    this.mostrar();
  }

  activarTab3() {
    this.reset();
    this.tab3Activo = true;
    this.mostrar();
  }

  activarTab4() {
    this.reset();
    this.tab4Activo = true;
    this.mostrar();
  }

  activarTab5() {
    this.reset();
    this.tab5Activo = true;
    this.mostrar();
  }

  activarTab6() {
    this.reset();
    this.tab6Activo = true;
    this.mostrar();
  }

  reset() {
    this.tab1Activo = false;
    this.tab2Activo = false;
    this.tab3Activo = false;
    this.tab4Activo = false;
    this.tab5Activo = false;
    this.tab6Activo = false;
  }

  mostrar() {
    this.tab1 = (this.tab1Activo) ?  this.activar : this.desactivar;
    this.tab2 = (this.tab2Activo) ?  this.activar : this.desactivar;
    this.tab3 = (this.tab3Activo) ?  this.activar : this.desactivar;
    this.tab4 = (this.tab4Activo) ?  this.activar : this.desactivar;
    this.tab5 = (this.tab5Activo) ?  this.activar : this.desactivar;
    this.tab6 = (this.tab6Activo) ?  this.activar : this.desactivar;
    this.sel1 = (this.tab1Activo) ?  this.seleccionado : this.deseleccionado;
    this.sel2 = (this.tab2Activo) ?  this.seleccionado : this.deseleccionado;
    this.sel3 = (this.tab3Activo) ?  this.seleccionado : this.deseleccionado;
    this.sel4 = (this.tab4Activo) ?  this.seleccionado : this.deseleccionado;
    this.sel5 = (this.tab5Activo) ?  this.seleccionado : this.deseleccionado;
    this.sel6 = (this.tab6Activo) ?  this.seleccionado : this.deseleccionado;
  }
}
