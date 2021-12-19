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

}
