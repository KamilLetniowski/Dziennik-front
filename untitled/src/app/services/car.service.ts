import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { PrzedmiotyComponent } from '../przedmioty/przedmioty.component';
import {PrzedmiotyData} from '../struktury/przedmioty-data';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost/apsi';
  cars: PrzedmiotyData[];
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  getAll(): Observable<PrzedmiotyData[]> {
    return this.http.get(`${this.baseUrl}/subject_list`).pipe(
      map((res) => {
        this.cars = res['data'];
        console.log(this.cars);
        return this.cars;
      }),
      catchError(this.handleError));
  }
}

