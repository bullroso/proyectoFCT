import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// servicios
import { NoticiasService } from './services/noticias.service';
import { SendEmailService } from './services/send-email.service';

// rutas
import { WEB_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { MatSnackBarModule } from '@angular/material';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
// importar el modulo de form
import { FormsModule } from '@angular/forms';
import { LocalizacionContactoComponent } from './componentes/localizacion-contacto/localizacion-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NoticiasComponent,
    LocalizacionContactoComponent
  ],
  imports: [
    BrowserModule,
    WEB_ROUTING,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDvIg4lI55V1r4QwbRFSc8_tQg9vW8tIeE' })
  ],
  providers: [
    NoticiasService,
    SendEmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
