import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { async } from 'q';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private log: LoginService) { }

  valor: string;

  ngOnInit() {
  }

  async login(form: NgForm) {
    // console.log(form.valid);

    await this.log.getUsers(form.value.email, form.value.password).then(r => this.valor = r );

    console.log(this.valor);
    // this.comprobar();

    if (this.valor == '1') {
      localStorage.setItem('email', form.value.email);
      console.log('sesion iniciada');
      this.router.navigate(['/nuevaNoticia']);
    }
  }

  comprobar() {
    console.log('el resultado es: ', this.valor);
  }

}
