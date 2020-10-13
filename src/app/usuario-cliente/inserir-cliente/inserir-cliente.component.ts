import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {CLIENTES} from '../../shared/model/CLIENTES';

@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.scss']
})
export class InserirClienteComponent implements OnInit {

  cliente: Cliente;
  clientes: Array<Cliente>;


  constructor() {
    this.cliente = new Cliente();
    this.clientes = CLIENTES;
  }

  ngOnInit(): void {
  }
  inserirCliente(): void{
    this.clientes.push(this.cliente);
    console.log(this.cliente);
    console.log(this.clientes);
    this.cliente = new Cliente();
  }



}
