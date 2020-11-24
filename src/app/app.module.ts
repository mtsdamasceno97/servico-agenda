import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalendarioModule} from './calendario/calendario.module';
import {UsuarioClienteModule} from './usuario-cliente/usuario-cliente.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UsuarioPrestadorModule} from "./usuario-prestador/usuario-prestador.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarioModule,
    UsuarioClienteModule,
    UsuarioPrestadorModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
