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

    cadastrar(user: User): Observable<any>{
        return this.httpClient.post<any>(`${this.URL_USER}.json`,user);
    }

}
