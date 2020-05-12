import { Component, OnInit } from '@angular/core';
import {Carpeta} from '../../../objects/carpeta';
import {ActivatedRoute} from '@angular/router';
import {ServicioCarpetaService} from '../../../services/servicio-carpeta.service';

@Component({
  selector: 'app-info-carpeta',
  templateUrl: './info-carpeta.component.html',
  styleUrls: ['./info-carpeta.component.css']
})
export class InfoCarpetaComponent implements OnInit {

  carpeta: Carpeta;
  nombreCarpeta: string;

  constructor(
    private ruta: ActivatedRoute,
    private servicioCarpeta: ServicioCarpetaService
  ) {
    this.ruta.params.subscribe(data => {
      this.nombreCarpeta = data.nombre;
    });

    this.servicioCarpeta.getCarpeta(this.nombreCarpeta).subscribe((aux) => {
      this.carpeta = aux;
    });

  }

  ngOnInit(): void {
  }

  convertDate(date: Date){
    return new Date(date);
  }

}
