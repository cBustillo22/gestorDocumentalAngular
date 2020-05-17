import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Version} from '../objects/version';

@Injectable({
  providedIn: 'root'
})
export class ServicioVersionService {

  url = 'http://localhost:8080/api/v1/version';

  constructor(private httpClient: HttpClient) { }

  getAll(documento: string){
    return this.httpClient.get<Version[]>(this.url + '/' + documento);
  }


}
