import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// servicios
import { NoticiasService } from './services/noticias.service';
import { SendEmailService } from './services/send-email.service';

// rutas
import { WEB_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { MatSnackBarModule } from '@angular/material';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// importar el modulo de form
import { FormsModule } from '@angular/forms';
import { LocalizacionContactoComponent } from './componentes/localizacion-contacto/localizacion-contacto.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { NoticiaComponent } from './componentes/noticia/noticia.component';
import { NuevaNoticiaComponent } from './componentes/nueva-noticia/nueva-noticia.component';
import { LoginGuard } from './login.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NoticiasComponent,
    LocalizacionContactoComponent,
    ServiciosComponent,
    UsuariosComponent,
    LogInComponent,
    NoticiaComponent,
    NuevaNoticiaComponent
  ],
  imports: [
    BrowserModule,
    WEB_ROUTING,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDvIg4lI55V1r4QwbRFSc8_tQg9vW8tIeE' })
  ],
  providers: [
    NoticiasService,
    SendEmailService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
