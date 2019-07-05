import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders(
        {'Content-Type' : 'application/json;charset=utf-8'}
  )
};


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  autenticacao(username:string, password:string) {
    return this.http.get(`${API_URL}/usuarios?username=${username}&password=${password}`)
  }

  
}
