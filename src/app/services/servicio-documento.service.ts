import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Documento} from '../objects/documento';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDocumentoService {

  url = 'http://localhost:8080/api/v1/documento';

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Documento[]>(this.url);
  }

  addDocument(documento: Documento): Observable<any> {
    const res = this.httpClient.post(this.url, documento);
    return res;
  }
}
