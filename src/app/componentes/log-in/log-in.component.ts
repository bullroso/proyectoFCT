import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private log: LoginService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    // console.log(form.valid);

    let valor: string;
    const hola = this.log.getUsers(form.value.email, form.value.password);
    console.log('el resultado es: ', hola);

    if (valor = '1') {
      localStorage.setItem('email', form.value.email);
      // this.router.navigate(['/nuevaNoticia']);
    }

    if (form.value.email === 'ejemplo@ejemplo.com' && form.value.password === '1234' ) {
    }
  }

}
