import { Component, OnInit } from '@angular/core';
import {Documento} from '../../objects/documento';
import {ServicioCarpetaService} from '../../services/servicio-carpeta.service';
import {Carpeta} from '../../objects/carpeta';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent implements OnInit {

  carpetas: Carpeta[] = [];
  nombreCarpeta: string;
  documentosCarpeta: Documento[];

  constructor(private servicioCarpeta: ServicioCarpetaService,
              private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.servicioCarpeta.getCarpetas()
      .subscribe(
        data => {
          this.carpetas = data;
        }
      );

    this.ruta.params.subscribe(data => {
      this.nombreCarpeta = data.nombreCarpeta;
    });

    this.getDocumentosCarpeta();
  }

  getDocumentosCarpeta(){
    console.log(this.nombreCarpeta);
    this.servicioCarpeta.getDocumentos(this.nombreCarpeta)
      .subscribe(
        data => {
          this.documentosCarpeta = data;
        }
      );

    console.log(this.documentosCarpeta);
  }
}
