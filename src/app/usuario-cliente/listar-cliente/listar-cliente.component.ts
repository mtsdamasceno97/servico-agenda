import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {CLIENTES} from '../../shared/model/CLIENTES';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent implements OnInit {

  clientes = CLIENTES;

  constructor() {
  }

  ngOnInit(): void {
  }

  editar(cliente: Cliente): void {
    cliente.nome += ' Alterado';
  }

  remover(cliente: Cliente): void {
    const indxUsuarioARemover = this.clientes.findIndex(u => u.cpf === cliente.cpf);
    if (indxUsuarioARemover > -1) {
      this.clientes.splice(indxUsuarioARemover, 1);
    }
  }



}
