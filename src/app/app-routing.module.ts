import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InserirClienteComponent} from './usuario-cliente/inserir-cliente/inserir-cliente.component';
import {ListarClienteComponent} from './usuario-cliente/listar-cliente/listar-cliente.component';

const routes: Routes = [
  {
    path: 'inserircliente',
    component: InserirClienteComponent
  },
  {
    path: 'listarcliente',
    component: ListarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
