import { Component, OnInit } from '@angular/core';
import {ServicioCarpetaService} from '../../../services/servicio-carpeta.service';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Carpeta} from '../../../objects/carpeta';
import {ListaCarpetasComponent} from '../lista-carpetas.component';
import Swal from 'sweetalert2';

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
    private formBuilder: FormBuilder,
    private compListarCarpetas: ListaCarpetasComponent
  ) {
    this.userForm = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      fechaCreacion: new Date()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.carpeta = this.userForm.value;
    const object = this.añadirCarpeta(this.carpeta);
    if (object){
      Swal.fire({
        title: '<strong>Carpeta Insertada</strong>',
        icon: 'success'
      });
    } else {
      Swal.fire({
        title: '<strong>Ocurrio un problema</strong>',
        icon: 'error'
      });
    }
    this.compListarCarpetas.refreshFiles();
  }

  añadirCarpeta(carpeta: Carpeta){
    debugger;
    return this.servicioCarpeta.añadirCarpeta(carpeta)
      .subscribe(data => {
        console.log(data);
      });
  }

}
