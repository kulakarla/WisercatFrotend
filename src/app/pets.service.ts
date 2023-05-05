import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Pet } from './models/Pet';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class PetService {

    private url: string = 'http://localhost:8080/api/pet';
    
    
    constructor(private http: HttpClient) {}

    
    public getPets(): Observable<Pet[]>{
        console.log("Trying to fetch pets...")
        return this.http.get<Pet[]>(this.url);
    }

}