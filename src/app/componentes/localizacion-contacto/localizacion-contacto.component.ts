import { Component, OnInit } from '@angular/core';
// componentes de form
import {FormControl, Validators} from '@angular/forms';
// libreria rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// material desing de angular
import { MatSnackBar } from '@angular/material';
// services en angular
import { SendEmailService } from '../../services/send-email/send-email.service';
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

constructor(private sendServices: SendEmailService) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    this.getSentServices(this.Contact, f);
}

// metodo de services
getSentServices(body: ContactModel, f: NgForm) {
  this.sendServices.sendEmail(body).subscribe(
      data => {
          if (data) {
              console.log('Su mensaje ha sido enviado correctamente', 'OK', {
                  duration: 2000,
                });
                f.reset();
          } else {
              console.log('Algo fallo, lo siento, pruebe a contactarnos desde su proveedor de correo', 'Error', {
                  duration: 2000,
                });
          }
      }
    );

}

}
