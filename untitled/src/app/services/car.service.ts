import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { PrzedmiotyComponent } from '../przedmioty/przedmioty.component';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost/apsi';
  cars: PrzedmiotyComponent[];
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  getAll(): Observable<PrzedmiotyComponent[]> {
    return this.http.get(`${this.baseUrl}/subject_list`).pipe(
      map((res) => {
        this.cars = res['data'];
        return this.cars;
      }),
      catchError(this.handleError));
  }
}


