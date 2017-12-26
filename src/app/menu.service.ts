import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { OperationResult } from '../app/shared/base';

@Injectable()
export class MenuService {
  // private maestroUrl = './api/maestro/maestrodata.json';
  private maestroUrl = 'api/tipopersonas';

  constructor(
    private http: HttpClient
  ) { }

  /*
  public obtenerMenu() {
    return this.http.get<OperationResult<any>>(this.maestroUrl)
      .map(response =>  response)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    const errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
  */

  public obtenerMenu() {
    return this.http.get<any[]>(this.maestroUrl)
      .pipe(
        tap(_ => this.log('get menu')),
        catchError(this.handleError2<any>('get menu error'))
      );
  }

  private handleError2<T> (operation = 'operation', result?: T) {
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
