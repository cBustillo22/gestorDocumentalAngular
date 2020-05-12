import { Component, OnInit } from '@angular/core';
import {ServicioCarpetaService} from '../../../services/servicio-carpeta.service';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Carpeta} from '../../../objects/carpeta';
@Component({
  selector: 'app-agregar-carpeta',
  templateUrl: './agregar-carpeta.component.html',
  styleUrls: ['./agregar-carpeta.component.css']
})
export class AgregarCarpetaComponent implements OnInit {

  carpeta: Carpeta;
  userForm: FormGroup;

  constructor(
    private servicioCarpeta: ServicioCarpetaService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      fechaCreacion: '2020-05-09T00:00:55.621+0000' //new Date()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.carpeta = this.userForm.value;
    this.añadirCarpeta(this.carpeta);
  }

  añadirCarpeta(carpeta: Carpeta){
    this.servicioCarpeta.añadirCarpeta(carpeta);
  }

}
