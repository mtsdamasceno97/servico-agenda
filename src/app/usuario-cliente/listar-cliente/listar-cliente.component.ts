import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteService} from '../../shared/services/cliente.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent implements OnInit {

  clientes: Array<Cliente>;

  // para injetar o serviço, inicia ele dentro do parâmetro do construtor
  constructor(private clienteService: ClienteService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(
      clientes => this.clientes = clientes
    );
  }

  editar(cliente: Cliente): void {
    this.roteador.navigate(['inserircliente', cliente.id]);
  }

  remover(cliente: Cliente): void {
    this.clienteService.remover(cliente.id).subscribe(
      resposta => {
        const indxUsuarioARemover = this.clientes.findIndex(u => u.cpf === cliente.cpf);
        if (indxUsuarioARemover > -1) {
          this.clientes.splice(indxUsuarioARemover, 1);
        }
      }
    );
  }



}
