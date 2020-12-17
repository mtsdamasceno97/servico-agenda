export class Cliente {
  id?: string;
  nome?: string;
  cpf?: string;
  email?: string;
  senha?: string;
  telefone?: string;


  constructor(id?: string, cliente: Cliente = {}) {
    this.id = id;
    this.nome = cliente.nome;
    this.cpf = cliente.cpf;
    this.email = cliente.email;
    this.senha = cliente.senha;
    this.telefone = cliente.telefone;
  }
}
