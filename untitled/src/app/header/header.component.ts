import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token: string;
  tokenParsed: string;
  constructor(protected keycloakAngular: KeycloakService) { }

  ngOnInit() {
    this.token = this.keycloakAngular.getKeycloakInstance().token;
    this.tokenParsed = JSON.stringify(this.keycloakAngular.getKeycloakInstance().tokenParsed);

  }

  logout(): void {
    this.keycloakAngular.getKeycloakInstance().logout();
  }
  isAdmin(): boolean  {
    return this.keycloakAngular.getUserRoles().includes('admin');
  }
}
