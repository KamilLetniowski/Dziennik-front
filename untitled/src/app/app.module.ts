import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrzedmiotyComponent } from './przedmioty/przedmioty.component';
import { OcenyComponent } from './oceny/oceny.component';
import { HeaderComponent } from './header/header.component';
import { LoggComponent } from './logg/logg.component';
import { HomeComponent } from './home/home.component';
import { KursyComponent } from './kursy/kursy.component';
import { LoginComponent } from './login/login.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {initializer} from './app.init';
import {AppAuthGuard} from './guard/app.authguard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AppAuthGuard]},
  {path: 'przedmioty', component: PrzedmiotyComponent, canActivate: [AppAuthGuard]},
  {path: 'oceny', component: OcenyComponent,  canActivate: [AppAuthGuard]},
  {path: 'rejestracja', component: LoggComponent },
  {path: 'login', component: LoginComponent } ,
  {path: 'kursy', component: KursyComponent,  canActivate: [AppAuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    PrzedmiotyComponent,
    OcenyComponent,
    HeaderComponent,
    LoggComponent,
    HomeComponent,
    KursyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    KeycloakAngularModule,
    FormsModule
  ],
  providers: [
    AppAuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
