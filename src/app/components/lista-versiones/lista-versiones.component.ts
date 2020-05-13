import { Component, OnInit } from '@angular/core';
import { Version } from '../../objects/version';
import {ServicioVersionService} from '../../services/servicio-version.service';

@Component({
  selector: 'app-lista-versiones',
  templateUrl: './lista-versiones.component.html',
  styleUrls: ['./lista-versiones.component.css']
})
export class ListaVersionesComponent implements OnInit {

  versiones: Version[] = [];

  constructor(private servicioVersion: ServicioVersionService) { }

  ngOnInit(): void {
    this.servicioVersion.getAll()
      .subscribe(
        data => {
          this.versiones = data;
        }
      );
  }

}
