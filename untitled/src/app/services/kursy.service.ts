import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Kursy} from '../struktury/kursy';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {Course} from '../struktury/course';

@Injectable({
  providedIn: 'root'
})
export class KursyService {
  baseUrl = 'http://localhost/apsi';

  courseList: Kursy[];
  courseList2: Course[];

  constructor(private httpClient: HttpClient) {
  }


  getCourseList(): Observable<Kursy[]> {
    return this.httpClient.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        console.log("w serwisie");
        console.log(res);
        this.courseList = res['data'];
        console.log(this.courseList);
        return this.courseList;
      }));
  }

  addNewCourse(cName: string, cLeader: string) {
    return this.httpClient.post(`${this.baseUrl}/course_add`, {
      cname: cName,
      cleader : cLeader
    });
  }

  getCoursePupilList(course: Course ): Observable<Course[]> {
    const params = {id: course.id};
    return this.httpClient.get(`${this.baseUrl}/course_pupil_list`, {params}).pipe(
      map((res) => {
        console.log("w serwisie");
        console.log(res);
        this.courseList2 = res['data'];
        console.log(this.courseList2);
        return this.courseList2;
      }));
  }
}
