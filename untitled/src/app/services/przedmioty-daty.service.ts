import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {PrzedmiotyData} from '../struktury/przedmioty-data';
import {SubjectDates} from '../struktury/subjectDates';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PrzedmiotyDatyService {
  baseUrl = 'http://localhost/apsi';

  subjectDates: SubjectDates[];

  constructor(private httpClient: HttpClient) {
  }


  getListOfChoosenSubject(subjectData: PrzedmiotyData): Observable<SubjectDates[]> {
    const params = {name: subjectData.name, leader: subjectData.leader, class_id: subjectData.classId};
    return this.httpClient.get(`${this.baseUrl}/subject_date_list`, {params}).pipe(
      map((res) => {
        console.log("w serwisie");
        console.log(res);
        this.subjectDates = res['data'];
        console.log(this.subjectDates);
        return this.subjectDates;
      }));
  }
}
