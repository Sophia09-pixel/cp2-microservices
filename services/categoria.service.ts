import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorias } from '../interfaces/Categorias';
import { Beneficio } from '../interfaces/Beneficio';

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {
  beneficio: Beneficio[] = [];
  private apiUrl = 'http://localhost:3000/beneficios';

  constructor(private http: HttpClient) { }

  list(): Observable<Beneficio[]>{
    return this.http.get<Beneficio[]>(this.apiUrl) as Observable<Beneficio[]>;
  }

    //método para adicionar um beneficio na lista
    add(beneficio: Beneficio) {
      const httpHeaders = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return this.http.post(this.apiUrl, beneficio, httpHeaders);
    }
}
