import { Component, OnInit } from '@angular/core';
import { Predio, PredioService } from './shared';

@Component({
  // selector: 'app-predio',
  templateUrl: './predio.component.html',
  styleUrls: ['./predio.component.css']
})
export class PredioComponent implements OnInit {
  predios: Predio[];

  constructor(private predioService: PredioService) { }

  ngOnInit() {
    this.obtenerPredios();
  }

  obtenerPredios(): void {
    // debugger;
    this.predioService.obtenerPredios()
      .subscribe(response => {
        // debugger;
        this.predios = response;
        // this.predios = response.data;
      })
  }

}
