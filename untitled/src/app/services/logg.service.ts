import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggService {
  baseUrl = 'http://localhost/apsi';
  constructor(private http: HttpClient) {
  }

  create(login: string, password: string) {
    return this.http.post(`${this.baseUrl}/store`, {
      username: login,
      pass: password
    });

  }

}
