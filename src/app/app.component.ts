import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Club House Brasil';
  
  listaTipoPersona: any[];

  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.obtenerMenu();
  }

  obtenerMenu(): void{
    this.menuService.obtenerMenu()
      .subscribe(
        (response) => {
          // this.listaTipoPersona = response.data.tipopersona
          this.listaTipoPersona = response;
        }
      );
  }
}
