import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteFirestoreService} from '../../shared/services/cliente-firestore.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.scss']
})
export class InserirClienteComponent implements OnInit {

  cliente: Cliente;

  operacaoCadastro = true;

  constructor(private clienteFirestoreService: ClienteFirestoreService, private rotalAtual: ActivatedRoute, private roteador: Router) {
    this.cliente = new Cliente();
    if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = this.rotalAtual.snapshot.paramMap.get('id');
      // pegar do banco usuario id=idParaEdicao
      this.clienteFirestoreService.pesquisarPorId(idParaEdicao).subscribe(
        clienteRetornado => this.cliente = clienteRetornado
      );
    }
  }

  ngOnInit(): void {
  }
  inserirCliente(): void{

    if (this.cliente.id) {
      this.clienteFirestoreService.atualizar(this.cliente).subscribe(
        clienteAlterado => {
          console.log(clienteAlterado);
          this.roteador.navigate(['listarcliente']);
        }
      );
    } else {
      this.clienteFirestoreService.inserir(this.cliente).subscribe(
        clienteInserido => {
          console.log(clienteInserido);
          this.roteador.navigate(['listarcliente']);
        }
      );
    }
  }
}
