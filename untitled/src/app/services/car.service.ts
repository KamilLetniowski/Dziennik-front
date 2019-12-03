import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { CarComponent } from '../car/car.component';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost/api';
  cars: CarComponent[];
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  getAll(): Observable<CarComponent[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.cars = res['data'];
        return this.cars;
      }),
      catchError(this.handleError));
  }
}


