import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Pet } from '../models/Pet';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

const PET_API = 'http://localhost:8080/api/pet/';



@Injectable({
    providedIn: 'root'
})
export class PetService {

    
    
    constructor(private http: HttpClient, private storageService: StorageService) {}
    
 
    public addPet(pet: Pet){
        return this.http.post(PET_API, pet);
    }

    
    public getPets(): Observable<Pet[]>{
        console.log("Trying to fetch pets...")
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<Pet[]>(PET_API + this.storageService.getUser(), { headers});
    }

}