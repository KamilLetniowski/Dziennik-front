import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { OcenyComponent } from './oceny/oceny.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path: '', component: CarComponent},
  {path: 'oceny', component: OcenyComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    OcenyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
