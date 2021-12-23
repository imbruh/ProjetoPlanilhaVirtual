import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cost } from '../model/cost';

@Injectable({
  providedIn: 'root'
})
export class CostService {

  URL_COST ="http://localhost:3000/costs"; 

constructor(private httpClient: HttpClient) { }

  inserir(cost: Cost): Observable<any> {
    return this.httpClient.post<any>(`${this.URL_COST}.json`, cost)
  }

  apagar(cost_id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL_COST}/${cost_id}.json`)
  }

  editar(cost: Cost): Observable<any> {
    return this.httpClient.put<any>(`${this.URL_COST}/${cost.id}.json`, cost)
  }

  listarCustos(user_id: number, mes: number, ano: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:3000/list-costs.json?user_id=${user_id}&mes=${mes}&ano=${ano}`)
  }

}
