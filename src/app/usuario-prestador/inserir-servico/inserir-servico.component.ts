import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Servico} from '../../shared/model/servico';
import {ServicoService} from '../../shared/services/servico.service';
import {Prestador} from "../../shared/model/prestador";

@Component({
  selector: 'app-inserir-servico',
  templateUrl: './inserir-servico.component.html',
  styleUrls: ['./inserir-servico.component.scss']
})
export class InserirServicoComponent implements OnInit {

  servico: Servico;

  operacaoCadastro = true;

  constructor(private servicoService: ServicoService, private rotalAtual: ActivatedRoute, private roteador: Router) {
    this.servico = new Servico();
    if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = this.rotalAtual.snapshot.paramMap.get('id');
      // pegar do banco usuario id=idParaEdicao
      this.servicoService.pesquisarPorId(idParaEdicao).subscribe(
        servicoRetornado => this.servico = servicoRetornado
      );
    }
  }

  ngOnInit(): void {
  }
  inserirServico(): void{

    if (this.servico.id) {
      this.servicoService.atualizar(this.servico).subscribe(
        servicoAlterado => {
          console.log(servicoAlterado);
          this.roteador.navigate(['listarcliente']);
        }
      );
    } else {
      this.servicoService.inserir(this.servico).subscribe(
        servicoInserido => {
          console.log(servicoInserido);
          this.roteador.navigate(['listarclientetabela']);
        }
      );
    }
  }

}
