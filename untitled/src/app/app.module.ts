import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { PrzedmiotyDatyComponent } from './przedmioty-daty/przedmioty-daty.component';
import { KursyOsobyComponent } from './kursy-osoby/kursy-osoby.component';
import { CourseManagementComponent } from './course-management/course-management.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'przedmioty', component: PrzedmiotyComponent},
  {path: 'przedmioty_daty', component: PrzedmiotyDatyComponent,
    data:
      {
        name: '',
        leader: '',
        class_id: ''
      }
  },
  {path: 'oceny', component: OcenyComponent},
  {path: 'rejestracja', component: LoggComponent },
  {path: 'login', component: LoginComponent } ,
  {path: 'kursy', component: KursyComponent},
  {path: 'zarzadzanie_kursem', component: CourseManagementComponent,
    data:
      {
        cId: '',
      }
  }
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
    LoginComponent,
    PrzedmiotyDatyComponent,
    KursyOsobyComponent,
    CourseManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
