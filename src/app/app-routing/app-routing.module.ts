import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaCarpetasComponent} from '../components/lista-carpetas/lista-carpetas.component';
import {HeaderComponent} from '../components/header/header.component';
import {ListaDocumentosComponent} from '../components/lista-documentos/lista-documentos.component';
import {InfoCarpetaComponent} from '../components/lista-carpetas/info-carpeta/info-carpeta.component';
import {AgregarCarpetaComponent} from '../components/lista-carpetas/agregar-carpeta/agregar-carpeta.component';
import {ListaVersionesComponent} from '../components/lista-versiones/lista-versiones.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'carpetas', pathMatch: 'full'
  },
  {
    path: 'carpetas',
    component: ListaCarpetasComponent,
    children: [
      {
        path: 'infoCarpeta/:nombre',
        component: InfoCarpetaComponent
      },
      {
        path: 'agregarCarpeta',
        component: AgregarCarpetaComponent
      }
    ]
  },
  {
    path: 'documentos',
    component: ListaDocumentosComponent
  },
  {
    path: '**', redirectTo: 'carpetas', pathMatch: 'full'
  },
  { path: 'documentos', component: ListaDocumentosComponent },
  { path: 'versiones', component: ListaVersionesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
