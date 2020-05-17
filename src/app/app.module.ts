import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ListaCarpetasComponent } from './components/lista-carpetas/lista-carpetas.component';

import { HttpClientModule } from '@angular/common/http';
import { ListaDocumentosComponent } from './components/lista-documentos/lista-documentos.component';
import { InfoCarpetaComponent } from './components/lista-carpetas/info-carpeta/info-carpeta.component';
import {ServicioCarpetaService} from './services/servicio-carpeta.service';
import { AgregarCarpetaComponent } from './components/lista-carpetas/agregar-carpeta/agregar-carpeta.component';
import {DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListaVersionesComponent } from './components/lista-versiones/lista-versiones.component';
import { VersionDocumentoComponent } from './components/lista-versiones/version-documento/version-documento.component';
import { DocumentosComponent } from './components/lista-documentos/documentos/documentos.component';
import { CarpetaComponent } from './components/lista-carpetas/carpeta/carpeta.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaCarpetasComponent,
    ListaDocumentosComponent,
    InfoCarpetaComponent,
    AgregarCarpetaComponent,
    ListaVersionesComponent,
    VersionDocumentoComponent,
    DocumentosComponent,
    CarpetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServicioCarpetaService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
