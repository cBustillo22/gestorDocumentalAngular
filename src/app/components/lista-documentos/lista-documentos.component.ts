import { Component, OnInit } from '@angular/core';
import {Documento} from '../../objects/documento';
import {ServicioDocumentoService} from '../../services/servicio-documento.service';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent implements OnInit {

  documentos: Documento[] = [];

  constructor(private servicioDocumento: ServicioDocumentoService) { }

  ngOnInit(): void {
    this.servicioDocumento.getAll()
      .subscribe(
        data => {
          this.documentos = data;
        }
      );
  }
}
