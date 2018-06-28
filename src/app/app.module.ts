import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StylesComponent } from './components/styles/styles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { APP_ROUTING } from './routes';
import { UsuariosInfoComponent } from './components/usuarios/usuarios-info.component';
import { UsuariosEditComponent } from './components/usuarios/usuarios-edit.component';
import { UsuariosOrdersComponent } from './components/usuarios/usuarios-orders.component';
import { DirectiveDirective } from './directive/directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    StylesComponent,
    NavbarComponent,
    AboutComponent,
    UsuariosComponent,
    UsuariosInfoComponent,
    UsuariosEditComponent,
    UsuariosOrdersComponent,
    DirectiveDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
