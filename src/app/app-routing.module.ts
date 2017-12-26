import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { InicioComponent } from './inicio/inicio.component';
import { PredioComponent } from './predio/predio.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaDetalleComponent } from './persona/persona-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
  ,{ path: 'inicio', component: InicioComponent }
  ,{ path: 'persona', component: PersonaComponent }
  // ,{ path: 'persona', loadChildren: 'app/persona/persona.module#PersonaModule' }
  // ,{ path: 'inicio', component: InicioComponent, children: [
  //     { path: 'persona', loadChildren: 'app/persona/persona.module#PersonaModule' }
  //   ]
  // }
  ,{ path: 'persona/editar/:id', component: PersonaDetalleComponent }
  ,{ path: 'predio', component: PredioComponent },


  // ,{ path: '404', component: InicioComponent }  //implementar un componente NotFoundComponent
  // ,{ path: '**', redirectTo: '/404' }  

  // { path: 'detallePredio/:id', component: DetallePredioComponent }
]

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

// export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true }); 