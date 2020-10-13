import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirClienteComponent } from './inserir-cliente/inserir-cliente.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [InserirClienteComponent, ListarClienteComponent],
  exports: [
    InserirClienteComponent,
    ListarClienteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ]
})
export class UsuarioClienteModule { }
