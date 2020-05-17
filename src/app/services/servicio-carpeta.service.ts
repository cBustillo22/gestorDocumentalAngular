import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Carpeta} from '../objects/carpeta';
import {logger} from 'codelyzer/util/logger';
import {Documento} from '../objects/documento';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarpetaService {

  url = 'http://localhost:8080/api/v1/carpeta';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCarpetas(){
    return this.httpClient.get<Carpeta[]>(this.url);
  }

  getCarpeta(nombre: string){
    return this.httpClient.get<Carpeta>(this.url + '/' + nombre);
  }

  añadirCarpeta(carpeta: Carpeta): Observable<any> {
    console.log(JSON.stringify(carpeta));
    const res = this.httpClient.post(this.url, carpeta);
    return res;
  }

  getDocumentos(carpeta: string) {
    return this.httpClient.get<Documento[]>(this.url + '/' + carpeta + '/documentos');
  }
}




