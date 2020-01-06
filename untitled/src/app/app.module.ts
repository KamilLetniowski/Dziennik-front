import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PrzedmiotyComponent} from './przedmioty/przedmioty.component';
import {OcenyComponent} from './oceny/oceny.component';
import {HeaderComponent} from './header/header.component';
import {LoggComponent} from './logg/logg.component';
import {HomeComponent} from './home/home.component';
import {KursyComponent} from './kursy/kursy.component';
import {LoginComponent} from './login/login.component';
import {PrzedmiotyDatyComponent} from './przedmioty-daty/przedmioty-daty.component';
import {KursyOsobyComponent} from './kursy-osoby/kursy-osoby.component';
import {CourseManagementComponent} from './course-management/course-management.component';
import {PrzedmiotyDatyObecnosciComponent} from './przedmioty-daty-obecnosci/przedmioty-daty-obecnosci.component';
import {OcenyUczniowieComponent} from './oceny-uczniowie/oceny-uczniowie.component';
import {EdycjaOcenComponent} from './edycja-ocen/edycja-ocen.component';
import {UczniowieComponent} from './uczniowie/uczniowie.component';
import {AdminComponent} from './admin/admin.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {initializer} from './app.init';
import {AppAuthGuard} from './guard/app.authguard';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    PrzedmiotyComponent,
    OcenyComponent,
    HeaderComponent,
    LoggComponent,
    HomeComponent,
    KursyComponent,
    LoginComponent,
    PrzedmiotyDatyComponent,
    KursyOsobyComponent,
    CourseManagementComponent,
    PrzedmiotyDatyObecnosciComponent,
    OcenyUczniowieComponent,
    EdycjaOcenComponent,
    UczniowieComponent,
    AdminComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    KeycloakAngularModule,
    RouterModule
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
export class AppModule {
}
