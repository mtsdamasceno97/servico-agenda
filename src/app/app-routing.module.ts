import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InserirClienteComponent} from './usuario-cliente/inserir-cliente/inserir-cliente.component';
import {ListarClienteComponent} from './usuario-cliente/listar-cliente/listar-cliente.component';
import {ListarClienteTabelaComponent} from './usuario-cliente/listar-cliente-tabela/listar-cliente-tabela.component';
import {GerarCalendarioComponent} from './calendario/gerar-calendario/gerar-calendario.component';
import {InserirPrestadorComponent} from './usuario-prestador/inserir-prestador/inserir-prestador.component';



const routes: Routes = [
  {
    path: 'inserircliente',
    component: InserirClienteComponent
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
  },

  {
    path: 'inserirprestador',
    component: InserirPrestadorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
