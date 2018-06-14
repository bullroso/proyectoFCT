import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// servicios
import { NoticiasService } from './services/noticias/noticias.service';
import { SendEmailService } from './services/send-email/send-email.service';
import { LoginService } from './services/login/login.service';
import { UsuariosService } from './services/usuarios/usuarios.service';

// rutas
import { WEB_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { AgmCoreModule } from '@agm/core';
import {HashLocationStrategy, PathLocationStrategy, LocationStrategy }  from '@angular/common';
import { MatSnackBarModule } from '@angular/material';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
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
import { FooterComponent } from './componentes/footer/footer.component';
import { AvisoLegalComponent } from './componentes/aviso-legal/aviso-legal.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';

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
    NuevaNoticiaComponent,
    FooterComponent,
    AvisoLegalComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    WEB_ROUTING,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDvIg4lI55V1r4QwbRFSc8_tQg9vW8tIeE' })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    NoticiasService,
    SendEmailService,
    LoginService,
    UsuariosService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
