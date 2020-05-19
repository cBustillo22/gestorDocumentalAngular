import { Component, OnInit } from '@angular/core';
import { VersionDoc } from '../../objects/versionDoc';
import {ServicioVersionService} from '../../services/servicio-version.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lista-versiones',
  templateUrl: './lista-versiones.component.html',
  styleUrls: ['./lista-versiones.component.css']
})
export class ListaVersionesComponent implements OnInit {

  versionesDocumento: VersionDoc[] = [];
  nombreDocumento: string;

  constructor(private servicioVersion: ServicioVersionService,
              private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(data => {
      this.nombreDocumento = data.nombreDocumento;
    });

    this.getVersionesDocumento();
  }

  getVersionesDocumento(): void {
    this.servicioVersion.getVersionesDocumento(this.nombreDocumento)
      .subscribe(
        data => {
          this.versionesDocumento = data;
        }
      );
  }
}
