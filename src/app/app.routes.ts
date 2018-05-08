import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NoticiaComponent } from './componentes/noticia/noticia.component';
import { LocalizacionContactoComponent } from './componentes/localizacion-contacto/localizacion-contacto.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { NuevaNoticiaComponent } from './componentes/nueva-noticia/nueva-noticia.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'services', component: ServiciosComponent},
    {path: 'noticias', component: NoticiasComponent},
    {path: 'noticias/:id', component: NoticiaComponent},
    {path: 'nuevaNoticia', component: NuevaNoticiaComponent, canActivate: [LoginGuard]},
    {path: 'localizacion', component: LocalizacionContactoComponent},
    {path: 'login', component: LogInComponent},
    {path: '**', redirectTo: 'home'}
];

export const WEB_ROUTING = RouterModule.forRoot(routes);
