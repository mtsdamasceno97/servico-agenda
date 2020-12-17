import { Injectable } from '@angular/core';
import {Servico} from '../model/servico';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  URL_SERVICOS = 'http://localhost:8080/servicos';

  constructor(private httpClient: HttpClient) {

  }

  listar(): Observable<Servico[]> {
    return this.httpClient.get<Servico[]>(this.URL_SERVICOS);
  }

  inserir(servico: Servico): Observable<Servico> {
    return this.httpClient.post<Servico>(this.URL_SERVICOS, servico);
  }

  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_SERVICOS}/${id}`);
  }

  pesquisarPorId(id: string): Observable<Servico> {
    return this.httpClient.get<Servico>(`${this.URL_SERVICOS}/${id}`);
  }

  atualizar(servico: Servico): Observable<Servico> {
    return this.httpClient.put<Servico>(`${this.URL_SERVICOS}/${servico.id}`, servico);
  }

}
