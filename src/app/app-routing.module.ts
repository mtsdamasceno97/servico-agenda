import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InserirClienteComponent} from './usuario-cliente/inserir-cliente/inserir-cliente.component';
import {ListarClienteComponent} from './usuario-cliente/listar-cliente/listar-cliente.component';
import {ListarClienteTabelaComponent} from './usuario-cliente/listar-cliente-tabela/listar-cliente-tabela.component';
import {GerarCalendarioComponent} from './calendario/gerar-calendario/gerar-calendario.component';
import {HomeComponent} from './home/home.component';
import {InserirServicoComponent} from "./usuario-prestador/inserir-servico/inserir-servico.component";
import {ListarServicoComponent} from "./usuario-prestador/listar-servico/listar-servico.component";





const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'inserircliente',
    component: InserirClienteComponent
  },
  {
    path: 'inserirservico',
    component: InserirServicoComponent
  },
  {
    path: 'listarservico',
    component: ListarServicoComponent
  },

  {
    path: 'inserircliente/:id',
    component: InserirClienteComponent
  },
  {
    path: 'listarclientestabela',
    component: ListarClienteTabelaComponent
  },
  {
    path: 'listarcliente',
    component: ListarClienteComponent
  },
  {
    path: 'agendarservico',
    component: GerarCalendarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
