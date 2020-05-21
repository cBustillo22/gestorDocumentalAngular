import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Version} from '../objects/version';
import {Documento} from '../objects/documento';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioVersionService {

  url = 'http://localhost:8080/api/v1/version';

  constructor(private httpClient: HttpClient) { }

  getAll(documento: string){
    return this.httpClient.get<Version[]>(this.url + '/' + documento);
  }

  addVersion(version: Version): Observable<any> {
    const res = this.httpClient.post(this.url, version);
    return res;
  }

  getB64VersionMayor(nombreDocumento: string) {
    const res = this.httpClient.get<Version>(this.url + '/' + nombreDocumento + '/versionMayor');
    return res;
  }


}
