import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteFirestoreService} from '../../shared/services/cliente-firestore.service';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {ServicoService} from "../../shared/services/servico.service";
import {Prestador} from "../../shared/model/prestador";
import {Servico} from "../../shared/model/servico";


@Component({
  selector: 'app-listar-cliente-tabela',
  templateUrl: './listar-cliente-tabela.component.html',
  styleUrls: ['./listar-cliente-tabela.component.scss']
})
export class ListarClienteTabelaComponent implements OnInit {

  dataSource: MatTableDataSource<Servico>;
  mostrarColunas = ['Id', 'Tipo', 'Prestador', 'Agendar'];

  constructor(private servicoService: ServicoService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.servicoService.listar().subscribe(
      servicos => this.dataSource = new MatTableDataSource(servicos)
    );
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  agendar(): void {
  }
}
