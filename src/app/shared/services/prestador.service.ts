import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../model/cliente';
import {Prestador} from '../model/prestador';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  URL_PRESTADORES = 'http://localhost:8080/prestadores';
  constructor(private httpClient: HttpClient) {

  }

  listar(): Observable<Prestador[]> {
    return this.httpClient.get<Prestador[]>(this.URL_PRESTADORES);
  }

  inserir(prestador: Prestador): Observable<Prestador> {
    return this.httpClient.post<Prestador>(this.URL_PRESTADORES, prestador);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_PRESTADORES}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.URL_PRESTADORES}/${id}`);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.URL_PRESTADORES}/${cliente.id}`, cliente);
  }

}
