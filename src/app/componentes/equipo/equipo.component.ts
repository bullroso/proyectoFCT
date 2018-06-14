import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  noPause = true;
  myInterval = 10000;
  activeSlideIndex = 0;

  slides = [
    {image: 'assets/img/slider/001.jpg'},
    {image: 'assets/img/slider/002.jpg'},
    {image: 'assets/img/slider/003.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
