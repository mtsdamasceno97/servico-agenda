import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteService} from '../../shared/services/cliente.service';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listar-cliente-tabela',
  templateUrl: './listar-cliente-tabela.component.html',
  styleUrls: ['./listar-cliente-tabela.component.scss']
})
export class ListarClienteTabelaComponent implements OnInit {

  dataSource: MatTableDataSource<Cliente>;
  mostrarColunas = ['nome', 'cpf', 'email', 'acoes'];

  constructor(private clienteService: ClienteService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(
      clientes => this.dataSource = new MatTableDataSource(clientes)
    );
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  agendar(): void {
    this.roteador.navigate(['agendarservico']);
  }
}
