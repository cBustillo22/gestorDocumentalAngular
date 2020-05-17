import {Component, Input, OnInit} from '@angular/core';
import {Carpeta} from '../../../objects/carpeta';

@Component({
  selector: 'app-carpeta',
  templateUrl: './carpeta.component.html',
  styleUrls: ['./carpeta.component.css']
})
export class CarpetaComponent implements OnInit {

  @Input() carpeta: Carpeta;

  constructor() { }

  ngOnInit(): void {
  }

}
