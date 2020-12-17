import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirServicoComponent } from './inserir-servico/inserir-servico.component';
import { ListarServicoComponent } from './listar-servico/listar-servico.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {InserirClienteComponent} from "../usuario-cliente/inserir-cliente/inserir-cliente.component";
import {ListarClienteComponent} from "../usuario-cliente/listar-cliente/listar-cliente.component";
import {ListarClienteTabelaComponent} from "../usuario-cliente/listar-cliente-tabela/listar-cliente-tabela.component";




@NgModule({
  declarations: [InserirServicoComponent, ListarServicoComponent],
  exports: [
    InserirServicoComponent,
    ListarServicoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ]
})
export class UsuarioPrestadorModule { }
