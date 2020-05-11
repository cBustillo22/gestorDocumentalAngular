import { Component, OnInit } from '@angular/core';
import {Carpeta} from '../../objects/carpeta';
import {ServicioCarpetaService} from '../../services/servicio-carpeta.service';

@Component({
  selector: 'app-lista-carpetas',
  templateUrl: './lista-carpetas.component.html',
  styleUrls: ['./lista-carpetas.component.css']
})
export class ListaCarpetasComponent implements OnInit {

  carpetas: Carpeta[];

  constructor(
    private servicioCarpeta: ServicioCarpetaService
  ) {
    this.servicioCarpeta.getCarpetas().subscribe((aux) => {
      this.carpetas = aux;
    });
  }

  ngOnInit(): void {
  }

}
