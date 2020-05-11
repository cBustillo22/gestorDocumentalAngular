import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaCarpetasComponent} from '../components/lista-carpetas/lista-carpetas.component';
import {HeaderComponent} from '../components/header/header.component';
import {ListaDocumentosComponent} from '../components/lista-documentos/lista-documentos.component';
import {InfoCarpetaComponent} from '../components/lista-carpetas/info-carpeta/info-carpeta.component';

const routes: Routes = [
  {
    path: 'carpetas',
    component: ListaCarpetasComponent,
    children:[
      {
        path: 'infoCarpeta',
        component: InfoCarpetaComponent
      }
    ]
  },
  {
    path: 'documentos',
    component: ListaDocumentosComponent
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
