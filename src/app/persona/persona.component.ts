import { Component, OnInit } from '@angular/core';
import { Persona, PersonaService } from './shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personas: Persona[];

  constructor(
    private personaService: PersonaService
    , private router: Router
  ) { }

  ngOnInit() {
    this.obtenerPersonas();
  }

  obtenerPersonas(): void {
    // debugger;
    this.personaService.obtenerPersonas()
      .subscribe(response => {
        // debugger;
        this.personas = response;
      })
  }

  // irEditar(id: number) {
  //   // debugger;
  //   this.router.navigate(['/persona/editar', id]);
  // }
}
