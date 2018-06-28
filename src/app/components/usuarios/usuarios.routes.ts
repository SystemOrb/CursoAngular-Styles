/*
Routes for users
*/
import { RouterModule, Routes } from '@angular/router';
import { UsuariosEditComponent } from './usuarios-edit.component';
import { UsuariosInfoComponent } from './usuarios-info.component';
import { UsuariosOrdersComponent } from './usuarios-orders.component';
export const CHILDREN_ROUTES: Routes = [
  { path: 'user-edit', component: UsuariosEditComponent },
  { path: 'orders', component: UsuariosOrdersComponent },
  { path: 'user-profile', component: UsuariosInfoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'user' }
];
