import { BrowserModule } from '@angular/platform-browser';


import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { InicioComponent } from './components/inicio/inicio.component';


import { AngularFullpageModule } from '@fullpage/angular-fullpage'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaCarpetasComponent,
    ListaDocumentosComponent,
    InfoCarpetaComponent,
    AgregarCarpetaComponent,
    InicioComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFullpageModule
  ],
  providers: [
    ServicioCarpetaService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
