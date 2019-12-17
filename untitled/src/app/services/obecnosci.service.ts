import {Injectable} from '@angular/core';
import {PrzedmiotyData} from '../struktury/przedmioty-data';
import {Observable} from 'rxjs';
import {SubjectDates} from '../struktury/subjectDates';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Pupil} from '../struktury/Pupil';
import {Presence} from '../struktury/presence';

@Injectable({
  providedIn: 'root'
})
export class ObecnosciService {

  baseUrl = 'http://localhost/apsi';

  PupilList: Pupil[];

  constructor(private httpClient: HttpClient) {
  }


  getPupilList(pup: Pupil): Observable<Pupil[]> {
    const params = {name: pup.name, date: pup.date, class_id: pup.class};
    return this.httpClient.get(`${this.baseUrl}/subject_pupil_list`, {params}).pipe(
      map((res) => {
        console.log('w serwisie');
        console.log(res);
        this.PupilList = res['data'];
        console.log(this.PupilList);

        return this.PupilList;
      }));
  }

  getGradeList() {
    return this.httpClient.get(`${this.baseUrl}/grades_edit`).pipe(
      map((res) => {
        console.log('w serwisie');
        console.log(res);
        this.PupilList = res['data'];
        console.log(this.PupilList);

        return this.PupilList;
      }));
  }

  addPupilGrade(grade: any, classes: any, name: any, gType: any, gRate: any) {
    console.log(classes);
    console.log(grade);
    console.log(gRate);
    console.log(name);
    console.log(gType);
    return this.httpClient.post(`${this.baseUrl}/subject_pupil_list_add`, {
      grades: grade,
      class: classes,
      names: name,
      gTypes: gType,
      gRates: gRate
    });
  }

  updatePupilPresence(presence: Presence[]) {
    return this.httpClient.post(`${this.baseUrl}/presence`, {
      pres: presence
    });
  }


}
