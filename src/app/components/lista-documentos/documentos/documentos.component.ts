import {Component, Input, OnInit} from '@angular/core';
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

  @Input() documento: Documento;

  constructor() {
  }

  ngOnInit(): void {
  }
}
