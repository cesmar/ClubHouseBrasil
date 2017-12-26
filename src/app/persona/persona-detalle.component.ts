import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Persona, PersonaService } from './shared';

@Component({
  templateUrl: './persona-detalle.component.html'
})
export class PersonaDetalleComponent implements OnInit {
  @Input() persona: Persona;

  constructor(
      private personaService: PersonaService,
      private route: ActivatedRoute,
      private location: Location
    ) { }

  ngOnInit() {
    this.obtenerPersona();
  }

  obtenerPersona(): void {
    // debugger;
    console.log('detalle');
    const id = +this.route.snapshot.paramMap.get('id');
    this.personaService.obtenerPersona(id)
        .subscribe(response => {
        // debugger;
            this.persona = response;
      })
  }

  regresar(): void {
      this.location.back();
  }

}
