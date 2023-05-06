import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';


const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private router: Router, private storageService: StorageService) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(
            AUTH_API + 'login',
            {
                username,
                password,
            },
            {responseType: 'text'},
        );
    }

    logout(): Observable<any>{
        this.storageService.removeLogin();
        this.router.navigate(['/login'])
        return this.http.post(AUTH_API + 'logout', {}, httpOptions)
    }

}