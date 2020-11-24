import {NgModule} from '@angular/core';
import {InserirClienteComponent} from './inserir-cliente/inserir-cliente.component';
import {ListarClienteComponent} from './listar-cliente/listar-cliente.component';
import {ListarClienteTabelaComponent} from './listar-cliente-tabela/listar-cliente-tabela.component';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [InserirClienteComponent, ListarClienteComponent, ListarClienteTabelaComponent],
  exports: [
    InserirClienteComponent,
    ListarClienteComponent,
    ListarClienteTabelaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule
  ]
})
export class UsuarioClienteModule { }
