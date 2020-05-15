import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Documento} from '../objects/documento';

@Injectable({
  providedIn: 'root'
})
export class ServicioDocumentoService {

  url = 'http://localhost:8080/api/v1/documento';

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Documento[]>(this.url);
  }
}
