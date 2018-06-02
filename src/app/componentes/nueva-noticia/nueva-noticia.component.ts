import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { Noticia } from '../../models/noticia';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { NoticiasService } from '../../services/noticias/noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-noticia',
  templateUrl: './nueva-noticia.component.html',
  styleUrls: ['./nueva-noticia.component.css']
})
export class NuevaNoticiaComponent implements OnInit {
    listado;
    listadoUsuarios;
    cabecera: string;
    texto: string;
  constructor(private usuarioNuevo: UsuariosService, private noticiaNueva: NoticiasService, private router: Router) { }
  ngOnInit() {
    this.RecargarNoticias();
    this.RecargarUsuarios();
  }

  RecargarNoticias(){
    this.noticiaNueva.getNoticiasPHP()
    .subscribe(
        noticias => (this.listado = noticias)
    ); 
  }

  RecargarUsuarios(){
    this.usuarioNuevo.getUsuariosPHP()
    .subscribe(
        usuarios => (this.listadoUsuarios = usuarios)
    ); 
  }

  EliminarNoticia(id: number){
    const noticia: Noticia = new Noticia(id,null,null,null,null);
    this.noticiaNueva.DeleteNoticia(noticia).subscribe(
        data => {
            if (data) {
                console.log('Noticia eliminada correctamente', 'OK', {
                    duration: 2000,
                });
            };
            location.reload();
        });
  }

  EliminarUsuario(id: number){
    console.log(id);
    const user: Usuario = new Usuario();
    user.id = id;
    this.usuarioNuevo.DeleteUsuario(user).subscribe(
        data => {
            if (data) {
                console.log('Noticia eliminada correctamente', 'OK', {
                    duration: 2000,
                });
            };
            location.reload();
        });
  }

  Insertnueva(form: NgForm) {
    console.log(form.value.titulo);
    console.log(this.cabecera);
    console.log(this.texto);
    const noticia: Noticia = new Noticia(0, form.value.titulo, form.value.cabecera, form.value.texto, '00/00/0000');
    this.noticiaNueva.insertNoticia(noticia).subscribe(
      data => {
          if (data) {
             console.log('Noticia insertada correctamente', 'OK', {
                  duration: 2000,
              });
          };
          location.reload();
      });
    }

  user(form: NgForm) {
    // console.log(form.valid);
    const user: Usuario = new Usuario();
    user.nombre = form.value.nombre;
    user.email = form.value.email;
    user.password = form.value.password;

    if(user.nombre.length>0 && user.email.length > 0 && user.password.length > 0){
    this.usuarioNuevo.insertUser(user).subscribe(
        data => {
            if (data) {
                console.log('Su mensaje ha sido enviado correctamente', 'OK', {
                    duration: 2000,
                });
            };
            location.reload();
        });
        }
    }
}
