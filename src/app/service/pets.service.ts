import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Pet } from '../models/Pet';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

const PET_API = 'http://localhost:8080/api/pet/';
const headers = new HttpHeaders().set('Content-Type', 'application/json');


@Injectable({
    providedIn: 'root'
})
export class PetService {

    
    
    constructor(private http: HttpClient, private storageService: StorageService) {}
    
 
    public addPet(pet: any): Observable<any>{
        return this.http.post(PET_API + this.storageService.getUser() + "/add", pet, { headers });
    }

    
    public getPets(): Observable<Pet[]>{
        return this.http.get<Pet[]>(PET_API + this.storageService.getUser(), { headers });
    }

    public editPet(pet: any): Observable<any>{
        return this.http.put(PET_API + this.storageService.getUser() + "/edit", pet, { headers })
    }

}