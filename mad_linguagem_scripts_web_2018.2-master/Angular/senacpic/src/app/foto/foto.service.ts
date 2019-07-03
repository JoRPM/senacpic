import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Foto } from './foto.model';

const httpOptions = {
    headers: new HttpHeaders(
        {'Content-Type' : 'application/json;charset=utf-8'}
    )
};
@Injectable({ providedIn: 'root' })
export class FotoService {
    
    // injeção de dependencia
    constructor(private http:HttpClient) {}

    // GET request 
    listaFotos() {
        return this.http.get<Foto[]>(`http://localhost:3000/fotos`, httpOptions);
    }
}