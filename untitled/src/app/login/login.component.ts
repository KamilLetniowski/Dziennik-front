import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './css/style1.css'],
})
export class LoginComponent implements OnInit {
  nameLog = '';
  passLog = '';

  constructor(private login: LoginService) {
  }

  ngOnInit() {
  }

  signin() {
    this.login.signin(this.nameLog, this.passLog).subscribe();
  }

}
