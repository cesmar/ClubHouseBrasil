import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { PredioComponent } from './predio/predio.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaDetalleComponent } from './persona/persona-detalle.component';

// import { AppRoutingModule } from './/app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MenuService } from './menu.service';
import { PredioService } from './predio/shared';
import { PersonaService } from './persona/shared';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/base/data/in-memory-data.service';

// import { AppBootstrapModule } from './app-bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CuentaComponent,
    ProcesoComponent,
    PredioComponent,
    PersonaComponent,
    PersonaDetalleComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,HttpClientModule
    
    /* Si se importa la librería 'HttpClientInMemoryWebApiModule' no se van a poder leer los archivos json */
    ,HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    PredioService,
    MenuService,
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
