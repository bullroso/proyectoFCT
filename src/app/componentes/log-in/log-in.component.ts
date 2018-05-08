import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    console.log(form.valid);

    if (form.value.email === 'ejemplo@ejemplo.com' && form.value.password === '1234' ) {
      localStorage.setItem('email', form.value.email);
      this.router.navigate(['/nuevaNoticia']);
    }
  }

}
