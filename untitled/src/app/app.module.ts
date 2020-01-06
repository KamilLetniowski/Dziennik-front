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
import { PrzedmiotyDatyObecnosciComponent } from './przedmioty-daty-obecnosci/przedmioty-daty-obecnosci.component';
import { OcenyUczniowieComponent } from './oceny-uczniowie/oceny-uczniowie.component';
import { EdycjaOcenComponent } from './edycja-ocen/edycja-ocen.component';
import { UczniowieComponent } from './uczniowie/uczniowie.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'edycja-oceny', component: EdycjaOcenComponent,
    data:
      {
        name: '',
        pname: '',
        id: ''
      }},
  {path: 'obecnosci', component: PrzedmiotyComponent},
  {path: 'oceny_uczniowie', component: OcenyUczniowieComponent},
  {path: 'przedmioty_daty_obecnosci', component: PrzedmiotyDatyObecnosciComponent,
    data:
      {
        name: '',
        date: '',
        class_id: ''
      }},
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
  {path: 'admin', component: AdminComponent },
  {path: 'login', component: LoginComponent } ,
  {path: 'uczniowie', component: UczniowieComponent } ,
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
    CourseManagementComponent,
    PrzedmiotyDatyObecnosciComponent,
    OcenyUczniowieComponent,
    EdycjaOcenComponent,
    UczniowieComponent,
    AdminComponent
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
