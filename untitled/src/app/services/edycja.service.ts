import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {GradeTab} from '../struktury/gradeTab';
import {Pupil} from '../struktury/Pupil';

@Injectable({
  providedIn: 'root'
})
export class EdycjaService {

  baseUrl = 'http://localhost/apsi';


  constructor(private httpClient: HttpClient) {
  }

  PupilGrade = [];

  getPupilGrade(grade: Pupil) {
    const params = {name: grade.name, id: grade.id};
    return this.httpClient.get(`${this.baseUrl}/grades_edit`, {params}).pipe(
      map((res) => {
        this.PupilGrade = res['data'];

        return this.PupilGrade;
      }));
  }

  editPupilGrade(grade: any, id: any) {
    console.log(grade, id);
    return this.httpClient.post(`${this.baseUrl}/grades_update`, {
      grades: grade,
      ids: id
    });
  }
}
