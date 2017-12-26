import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
// import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

// import { MessageService } from './message.service';
import { Predio } from './predio';
import { OperationResult } from '../../shared/base';

@Injectable()
export class PredioService {
  // private predioUrl = './api/predio/prediodata.json';
  private predioUrl = 'api/predios';

  constructor(private http: HttpClient) { }

  /*
  public obtenerPredios(): Observable<OperationResult<Predio[]>> {
    // return this.http.get<Predio[]>(this.predioUrl)
    return this.http.get(this.predioUrl)
      .map((response: OperationResult<Predio[]>) => response)
      // .map(response => response.data)
      ;
      // .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    const errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
  */

  public obtenerPredios(): Observable<Predio[]> {
    return this.http.get<Predio[]>(this.predioUrl)
      .pipe(
        tap(_ => this.log('get predio')),
        catchError(this.handleError2<any>('get predio'))
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
