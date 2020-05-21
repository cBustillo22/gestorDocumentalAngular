import {Component, Input, OnInit} from '@angular/core';
import {Documento} from '../../../objects/documento';
import Swal from 'sweetalert2';
import {ServicioVersionService} from '../../../services/servicio-version.service';
import {Version} from '../../../objects/version';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  @Input() documento: Documento;
  base64Documento: Version;

  constructor(
    private servicioVersionService: ServicioVersionService
  ) {
  }

  ngOnInit(): void {
  }

  mostrarPDF() {
    this.obtenerB64VersionMayor(this.documento.nombre);
    Swal.fire({
      title: '<strong>Visualizador de documentos</strong>',
      icon: 'info',
      grow: 'fullscreen',
      html:
        '<iframe src="data:application/pdf;base64,' + this.base64Documento.base64File + '" width="100%" height="600px"></iframe>'
    });
  }

  obtenerB64VersionMayor(nombreDocumento: string){
    return this.servicioVersionService.getB64VersionMayor(nombreDocumento)
      .subscribe(data => {
        console.log(data);
        this.base64Documento = data;
      });
  }
}
