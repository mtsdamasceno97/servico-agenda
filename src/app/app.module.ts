import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalendarioModule} from './calendario/calendario.module';
import {UsuarioClienteModule} from './usuario-cliente/usuario-cliente.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import { FirestoreModule } from './firestore/firestore.module';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {UsuarioPrestadorModule} from './usuario-prestador/usuario-prestador.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    UsuarioPrestadorModule,
    BrowserModule,
    AppRoutingModule,
    CalendarioModule,
    UsuarioClienteModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FirestoreModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
