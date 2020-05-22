import { Component, OnInit } from '@angular/core';
import {ServicioVersionService} from '../../../services/servicio-version.service';
import {ServicioDocumentoService} from '../../../services/servicio-documento.service';
import { Version } from '../../../objects/version';
import {Documento} from '../../../objects/documento';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-info-version',
  templateUrl: './info-version.component.html',
  styleUrls: ['./info-version.component.css']
})
export class InfoVersionComponent implements OnInit {

  nombreDocumento: string;
  numeroVersion: number;
  version: Version;
  documento: Documento;

  constructor(
    private servicioVersion: ServicioVersionService,
    private servicioDocumento: ServicioDocumentoService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(data => {
      this.nombreDocumento = data.nombreDocumento;
    });

    this.ruta.params.subscribe(data => {
      this.numeroVersion = data.numeroVersion;
    });

    console.log(this.nombreDocumento + ' - ' + this.numeroVersion);
    this.setDocumento();
    this.setVersion();
  }

  setDocumento(): void{
    this.servicioDocumento.getDocumento(this.nombreDocumento)
      .subscribe(
        data => {
          this.documento = data;
        }
      );
  }

  setVersion(): void{
    this.servicioVersion.getVersion(this.nombreDocumento, this.numeroVersion)
      .subscribe(
        data => {
          this.version = data;
        }
      );
  }
}
