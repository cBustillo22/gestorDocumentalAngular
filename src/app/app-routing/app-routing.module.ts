import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaCarpetasComponent} from '../components/lista-carpetas/lista-carpetas.component';
import {ListaDocumentosComponent} from '../components/lista-documentos/lista-documentos.component';
import {InfoCarpetaComponent} from '../components/lista-carpetas/info-carpeta/info-carpeta.component';
import {AgregarCarpetaComponent} from '../components/lista-carpetas/agregar-carpeta/agregar-carpeta.component';
import {ListaVersionesComponent} from '../components/lista-versiones/lista-versiones.component';
import {InfoVersionComponent} from '../components/lista-versiones/info-version/info-version.component';

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
    path: 'documentos/:nombreCarpeta',
    component: ListaDocumentosComponent
  },
  {
    path: 'versiones/:nombreDocumento',
    component: ListaVersionesComponent
  },
  {
    path: 'infoVersion/:nombreDocumento/:numeroVersion',
    component: InfoVersionComponent
  },
  {
    path: '**', redirectTo: 'carpetas', pathMatch: 'full'
  }
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
