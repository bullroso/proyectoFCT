import { Component, OnInit } from '@angular/core';
// componentes de form
import {FormControl, Validators} from '@angular/forms';
// libreria rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// material desing de angular
import { MatSnackBar } from '@angular/material';
// services en angular
import { SendEmailService } from '../../services/send-email.service';
// modelo creado
import { ContactModel } from '../../models/ContactModel';
// Esta linea fue agregada automaticamente pueden borrarlo
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-localizacion-contacto',
  templateUrl: './localizacion-contacto.component.html',
  styleUrls: ['./localizacion-contacto.component.css']
})
export class LocalizacionContactoComponent implements OnInit {
// creacion de variable contact
Contact = new ContactModel();
private emailResponse;
private truefalse = false;

constructor(private sendServices: SendEmailService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(this.Contact.name);
    // this.getSentServices(this.Contact, f);
}

// metodo de services
getSentServices(body: ContactModel, f: NgForm) {
  this.sendServices.getResponseEmail(body).subscribe(
      data => {
          if (data) {
              this.snackBar.open('Gracias por el mensaje', 'Correcto', {
                  duration: 2000,
                });
                f.reset();
          } else {
              this.snackBar.open(':(', 'Error', {
                  duration: 2000,
                });
          }
      },
      err => { this.snackBar.open('Algo fallo :/, correo: cesar@unprogramador.com', 'ups', {
          duration: 5000,
        }); }
    );

}

}
