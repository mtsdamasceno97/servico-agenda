import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Servico} from '../../shared/model/servico';
import {ServicoService} from '../../shared/services/servico.service';


@Component({
  selector: 'app-listar-servico',
  templateUrl: './listar-servico.component.html',
  styleUrls: ['./listar-servico.component.scss']
})
export class ListarServicoComponent implements OnInit {

  servicos: Array<Servico>;

  // para injetar o serviço, inicia ele dentro do parâmetro do construtor
  constructor(private servicoService: ServicoService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.servicoService.listar().subscribe(
      servicos => this.servicos = servicos
    );
  }

  editar(servico: Servico): void {
    this.roteador.navigate(['inserirservico', servico.id]);
  }

  remover(servico: Servico): void {
    this.servicoService.remover(servico.id).subscribe(
      resposta => {
        const indxServicoARemover = this.servicos.findIndex(s => s.id === servico.id);
        if (indxServicoARemover > -1) {
          this.servicos.splice(indxServicoARemover, 1);
        }
      }
    );
  }
}
