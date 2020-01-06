import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {PrzedmiotyData} from '../struktury/przedmioty-data';
import {Observable} from 'rxjs';
import {User} from '../struktury/user';

@Injectable({
  providedIn: 'root'
})
export class LoggService {
  baseUrl = 'http://localhost/apsi';

  Pupils: PrzedmiotyData[];
  TeachList: User[];



  constructor(private http: HttpClient) {
  }

  create(login: string, password: string) {
    return this.http.post(`${this.baseUrl}/add_teacher`, {
      username: login,
      pass: password
    });

  }


  getPplList(): Observable<PrzedmiotyData[]> {
    return this.http.get(`${this.baseUrl}/getPupils`).pipe(
      map((res) => {
        this.Pupils = res['data'];
        return this.Pupils;
      }));

  }

  getTeachList(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/getTeachList`).pipe(
      map((res) => {
        this.TeachList = res['data'];
        return this.TeachList;
      }));

  }


}
