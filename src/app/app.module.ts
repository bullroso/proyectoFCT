import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// servicios
import { NoticiasService } from './services/noticias.service';

// rutas
import { WEB_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
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
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDvIg4lI55V1r4QwbRFSc8_tQg9vW8tIeE' })
  ],
  providers: [
    NoticiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
