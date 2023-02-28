import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { rotas } from '../models/data';

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  private apiURL = 'http://127.0.0.1:8080';
  constructor(private http: HttpClient) {}

  getData(): Observable<rotas[]> {
    {
      return this.http
        .get<rotas[]>(this.apiURL)
        .pipe(map((data: any) => data.services));
    }
  }
}
