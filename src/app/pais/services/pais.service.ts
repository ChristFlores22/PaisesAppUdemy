import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private _url: string = 'https://restcountries.eu/rest/v2';

  constructor(
    private http:HttpClient
  ) { }
  buscarPais( termino:string): Observable<Country[]>{
    const url = `${ this._url}/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }
  buscarCapital( termino:string): Observable<Country[]>{
    const url = `${ this._url}/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }
  
}
