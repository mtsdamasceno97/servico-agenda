import { Component, OnInit } from '@angular/core';
import {Prestador} from '../../shared/model/prestador';
import {PrestadorService} from '../../shared/services/prestador.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inserir-prestador',
  templateUrl: './inserir-prestador.component.html',
  styleUrls: ['./inserir-prestador.component.scss']
})
export class InserirPrestadorComponent implements OnInit {

  prestador: Prestador;

  constructor(private prestadorService: PrestadorService, private roteador: Router) { }

  ngOnInit(): void {
  }

  inserirPrestador(): void{
      this.prestadorService.inserir(this.prestador).subscribe(
        prestadorInserido => {
          console.log(prestadorInserido);
          this.roteador.navigate(['listarcliente']);
        }
    );
  }
}
