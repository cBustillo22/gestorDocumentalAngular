import { Component, OnInit } from '@angular/core';
import {Documento} from '../../../objects/documento';
import {ServicioDocumentoService} from '../../../services/servicio-documento.service';
import {ActivatedRoute} from '@angular/router';
import {ServicioCarpetaService} from '../../../services/servicio-carpeta.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  documentos: Documento[] = [];
  nombreCarpeta: string;

  constructor(private servicioDocumento: ServicioDocumentoService,
              private servicioCarpeta: ServicioCarpetaService,
              private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(data => {
      this.nombreCarpeta = data.nombre;
    });

    this.servicioDocumento.getAll()
      .subscribe(
        data => {
          this.documentos = data;
        }
      );
  }
}
