/*
Routes
*/
import { RouterModule, Routes } from '@angular/router';
import { StylesComponent } from './components/styles/styles.component';
import { AboutComponent } from './components/about/about.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CHILDREN_ROUTES } from './components/usuarios/usuarios.routes';
const APP_ROUTES: Routes = [
  { path: 'home', component: StylesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id',
    component: UsuariosComponent,
    children: CHILDREN_ROUTES
 },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
// SI QUEREMOS TRABAJAR CON PARAMETROS
//APP_ROUTES, {useHash:true}
