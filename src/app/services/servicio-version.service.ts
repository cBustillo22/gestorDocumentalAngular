import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VersionDoc} from '../objects/versionDoc';

@Injectable({
  providedIn: 'root'
})
export class ServicioVersionService {

  url = 'http://localhost:8080/api/v1/version';

  constructor(private httpClient: HttpClient) { }

  getVersionesDocumento(documento: string){
    return this.httpClient.get<VersionDoc[]>(this.url + '/' + documento);
  }
}
