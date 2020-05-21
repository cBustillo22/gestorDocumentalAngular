import { Component, OnInit } from '@angular/core';
import {Documento} from '../../objects/documento';
import {ServicioCarpetaService} from '../../services/servicio-carpeta.service';
import {Carpeta} from '../../objects/carpeta';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import {ServicioDocumentoService} from '../../services/servicio-documento.service';
import {Version} from '../../objects/version';
import {ServicioVersionService} from '../../services/servicio-version.service';

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
              private ruta: ActivatedRoute,
              private servicioDocumento: ServicioDocumentoService,
              private servicioVersion: ServicioVersionService
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

  async addDocumento() {

    const { value: formValues } = await Swal.fire({
      title: 'Informacion del nuevo documento',
      html:
        '<input id="inputNombre" [textContent]="test" class="swal2-input" placeholder="Nombre del documento">' +
        '<input id="inputDescripcion" class="swal2-input" placeholder="Descripcion del documento">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          {
            carpetaRaiz: this.nombreCarpeta,
            nombre: document.getElementById('inputNombre').value,
            autor: 'Administrador',
            tamanio: 405.4,
            tipo: 'pdf',
            descripcion: document.getElementById('inputDescripcion').value,
            fechaCreacion: new Date(),
            estado: 'ACTIVO'
          }
        ];
      }
    });

    if (formValues[0].nombre && formValues[0].descripcion) {
      const documento: Documento = formValues;
      Swal.fire(JSON.stringify(formValues));
      console.log(JSON.stringify(documento[0]));

      const {value: file} = await Swal.fire({
        title: 'Seleccionar documento',
        input: 'file',
        inputAttributes: {
          accept: 'pdf/*',
          'aria-label': 'Subir Documento'
        }
      });
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const  version: Version = {
            uuid: null,
            version: null,
            base64File: this.getB64(e.target.result),
            esVersionMayor: null,
            documentoRaiz: formValues[0].nombre
          };
          debugger;
          console.log(e.target.result);
          this.añadirDocumento(documento[0]);
          this.getDocumentosCarpeta();
          console.log(version.documentoRaiz);
          console.log(JSON.stringify(version));
          const resultVer = this.añadirVersion(version);
          if (resultVer){
            // @ts-ignore
            Swal.fire({
              title: 'Documento subido',
              icon: 'success',
              text: 'Documento subido exitosamente'
            });
          }else {
            Swal.fire({
              title: 'Error al subir archivo',
              icon: 'error',
              text: 'Ocurrió un error subiendo el archivo'
            });
          }
        };
        reader.readAsDataURL(file);
      }else {
        Swal.fire({
          title: 'Error seleccionando archivo',
          icon: 'error',
          text: 'Debe seleccionar un archivo para el documento nuevo'
        });
      }
    }else {
      Swal.fire({
        title: 'Error creando archivo',
        icon: 'error',
        text: 'Debe completar la informacion del documento nuevo'
      });
    }
  }

  añadirDocumento(documento: Documento) {
    return this.servicioDocumento.addDocument(documento)
      .subscribe(data => {
        console.log(data);
      });
  }

  añadirVersion(version: Version) {
    return this.servicioVersion.addVersion(version)
      .subscribe(data => {
        console.log(data);
      });
  }

  getB64(str) {
    return str.split(';base64,')[1];
  }
}
