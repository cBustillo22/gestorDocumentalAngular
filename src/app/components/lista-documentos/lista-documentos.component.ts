import { Component, OnInit } from '@angular/core';
import {Documento} from '../../objects/documento';
import {ServicioDocumentoService} from '../../services/servicio-documento.service';
import {ServicioCarpetaService} from '../../services/servicio-carpeta.service';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent implements OnInit {

  documentos: Documento[] = [];
  docsCarpeta: Documento[] = [];

  constructor(private servicioDocumento: ServicioDocumentoService,
              private servicioCarpeta: ServicioCarpetaService
  ) { }

  ngOnInit(): void {
    this.servicioDocumento.getAll()
      .subscribe(
        data => {
          this.documentos = data;
        }
      );
  }

  getDocumentosCarpeta(nombreCarpeta: string){
    this.servicioCarpeta.getDocumentos(nombreCarpeta)
      .subscribe(
        data => {
          this.docsCarpeta = data;
        }
      );
  }
}
