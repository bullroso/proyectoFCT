import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usuario } from '../../models/usuario';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-nueva-noticia',
  templateUrl: './nueva-noticia.component.html',
  styleUrls: ['./nueva-noticia.component.css']
})
export class NuevaNoticiaComponent implements OnInit {

  constructor(private nuevo: UsuariosService) { }
  
  ngOnInit() {
  }

  user(form: NgForm) {
    // console.log(form.valid);
    let user: usuario = new usuario();
    user.nombre = form.value.nombre;
    user.email = form.value.email;
    user.password = form.value.password;
    
    this.nuevo.insertUser(user).subscribe(
      data => {
          if (data) {
              console.log('Su mensaje ha sido enviado correctamente', 'OK', {
                  duration: 2000,
              });
          }
      })
    }
}
