import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EdycjaOcenComponent} from './edycja-ocen/edycja-ocen.component';
import {PrzedmiotyComponent} from './przedmioty/przedmioty.component';
import {OcenyUczniowieComponent} from './oceny-uczniowie/oceny-uczniowie.component';
import {PrzedmiotyDatyObecnosciComponent} from './przedmioty-daty-obecnosci/przedmioty-daty-obecnosci.component';
import {PrzedmiotyDatyComponent} from './przedmioty-daty/przedmioty-daty.component';
import {OcenyComponent} from './oceny/oceny.component';
import {LoggComponent} from './logg/logg.component';
import {AdminComponent} from './admin/admin.component';
import {AppAuthGuard} from './guard/app.authguard';
import {UczniowieComponent} from './uczniowie/uczniowie.component';
import {KursyComponent} from './kursy/kursy.component';
import {LoginComponent} from './login/login.component';
import {CourseManagementComponent} from './course-management/course-management.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'edycja-oceny', component: EdycjaOcenComponent,
    data:
      {
        name: '',
        pname: '',
        id: ''
      }
  },
  {path: 'obecnosci', component: PrzedmiotyComponent},
  {path: 'oceny_uczniowie', component: OcenyUczniowieComponent},
  {
    path: 'przedmioty_daty_obecnosci', component: PrzedmiotyDatyObecnosciComponent,
    data:
      {
        name: '',
        date: '',
        class_id: ''
      }
  },
  {
    path: 'przedmioty_daty', component: PrzedmiotyDatyComponent,
    data:
      {
        name: '',
        leader: '',
        class_id: ''
      }
  },
  {
    path: 'oceny',
    component: OcenyComponent
  },
  {
    path: 'rejestracja',
    component: LoggComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['admin']}
  },
  {
    path: 'uczniowie',
    component: UczniowieComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['admin']}
  },
  {
    path: 'kursy',
    component: KursyComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'zarzadzanie_kursem',
    component: CourseManagementComponent,
    data:
      {
        cId: '',
      }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

