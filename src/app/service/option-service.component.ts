import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const OPTION_API = "http://localhost:8080/api/option/"
const headers = new HttpHeaders().set('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(private http: HttpClient) { }

  public getColors(): Observable<any[]>{
    return this.http.get<any[]>(OPTION_API + "color", { headers });
  }

  public getAnimals(): Observable<any[]>{
    return this.http.get<any[]>(OPTION_API + "animal", { headers });
  }

  public getCountries(): Observable<any[]>{
    return this.http.get<any[]>(OPTION_API + "country", { headers });
  }




}
