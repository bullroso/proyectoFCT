import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { LocalizacionContactoComponent } from './componentes/localizacion-contacto/localizacion-contacto.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'noticias', component: NoticiasComponent},
    {path: 'localizacion', component: LocalizacionContactoComponent},
    {path: '**', redirectTo: 'home'}
];

export const WEB_ROUTING = RouterModule.forRoot(routes);
