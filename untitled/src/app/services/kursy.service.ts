import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Kursy} from '../struktury/kursy';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {Course} from '../struktury/course';
import {Pupil} from '../struktury/Pupil';

@Injectable({
  providedIn: 'root'
})
export class KursyService {
  baseUrl = 'http://localhost/apsi';

  courseList: Kursy[];
  courseList2: Course[];
  coursePupilList: Pupil[];

  constructor(private httpClient: HttpClient) {
  }


  getCourseList(): Observable<Kursy[]> {
    return this.httpClient.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        console.log('w serwisie');
        console.log(res);
        this.courseList = res['data'];
        console.log(this.courseList);
        return this.courseList;
      }));
  }

  addNewCourse(cName: string, cLeader: string) {
    return this.httpClient.post(`${this.baseUrl}/course_add`, {
      cname: cName,
      cleader: cLeader
    });
  }

  getCoursePupilList(course: Course): Observable<Course[]> {
    const params = {id: course.id};
    return this.httpClient.get(`${this.baseUrl}/course_pupil_list`, {params}).pipe(
      map((res) => {
        console.log('w serwisie');
        console.log(res);
        this.courseList2 = res['data'];
        console.log(this.courseList2);
        return this.courseList2;
      }));
  }

  addNewPupilCourse(pName: string, pCourse: string) {
    return this.httpClient.post(`${this.baseUrl}/add_pupil_to_course`, {
      pid: pName,
      pcourse: pCourse
    });
  }

  showPupilCourse(): Observable<Pupil[]> {
    return this.httpClient.get(`${this.baseUrl}/getPupils`, {}).pipe(
      map((res) => {
        this.coursePupilList = res['data'];
        return this.coursePupilList;
      }));
  }
}
