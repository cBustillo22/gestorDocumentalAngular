import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Carpeta} from '../objects/carpeta';

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




}




