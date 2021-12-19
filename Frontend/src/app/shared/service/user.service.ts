import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    URL_USER ="http://localhost:3000/users"; 

    constructor(private httpClient: HttpClient) { }

    cadastrar(user: User): Observable<any> {
        return this.httpClient.post<any>(`${this.URL_USER}.json`,user);
    }

    login(loginDTO: any):  Observable<any> {
        return this.httpClient.post<any>('http://127.0.0.1:3000/login.json',loginDTO);
    }

    editar(user: User): Observable<any> {
        return this.httpClient.put<any>(`${this.URL_USER}/${user.id}.json`, user);
    }

    pesquisarPorId(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.URL_USER}/${id}.json`);
    }

    capturarLocalStorage(): number {
        let userId = localStorage.getItem('userId');

        if(userId != undefined) {
            return parseInt(userId); 
        }

        return 0;
    }

    setarLocalStorage(id: string) {
        localStorage.setItem('userId', id);
    }
}
