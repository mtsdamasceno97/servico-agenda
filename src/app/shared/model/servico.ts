import {Prestador} from './prestador';

export class Servico {
  id?: string;
  tipo?: string;
  prestador?: Prestador;
  constructor(id?: string, servico: Servico = {}) {
    this.id = id;
    this.tipo = servico.tipo;
    this.prestador = servico.prestador;
  }
}
