import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Persona } from './persona';
import { OperationResult } from '../../shared/base';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PersonaService {
  private personaUrl = 'api/personas';

  constructor(private http: HttpClient) { }

  public obtenerPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personaUrl)
      .pipe(
        tap(_ => this.log('get menu')),
        catchError(this.handleError<any>('get menu'))
      );
  }

  public obtenerPersona(id: number): Observable<Persona> {
    // debugger;
    const url = `${this.personaUrl}/${id}`;
    return this.http.get<Persona>(url).pipe(
      tap(_ => this.log(`fetched persona id=${id}`)),
      catchError(this.handleError<Persona>(`obtenerPersona id=${id}`))
    );
  }




  private handleError<T> (operation = 'operation', result?: T) {
    // debugger;
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
