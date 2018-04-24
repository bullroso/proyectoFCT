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
    {image: 'assets/img/slider/001.jpg'},
    {image: 'assets/img/slider/002.jpg'},
    {image: 'assets/img/slider/003.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
