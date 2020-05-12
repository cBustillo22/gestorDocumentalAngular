import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Carpeta} from '../objects/carpeta';
import {logger} from 'codelyzer/util/logger';

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

  añadirCarpeta(carpeta: Carpeta) {
    debugger;
    const res = this.httpClient.post<boolean>(this.url, carpeta);
    console.log(res);
    return res;
  }




}




