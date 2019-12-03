import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost/apsi';
  constructor(private http: HttpClient) {
  }

  signin(login: string, password: string) {
    return this.http.post(`${this.baseUrl}/logcheck`, {
      username: login,
      pass: password
    });
  }
}
