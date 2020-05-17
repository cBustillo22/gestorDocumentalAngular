import { Component, OnInit } from '@angular/core';
import {Documento} from '../../objects/documento';
import {ServicioDocumentoService} from '../../services/servicio-documento.service';
import {ServicioCarpetaService} from '../../services/servicio-carpeta.service';
import {Carpeta} from '../../objects/carpeta';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent implements OnInit {

  carpetas: Carpeta[] = [];

  constructor(private servicioCarpeta: ServicioCarpetaService,
  ) { }

  ngOnInit(): void {
    this.servicioCarpeta.getCarpetas()
      .subscribe(
        data => {
          this.carpetas = data;
        }
      );
  }
}
