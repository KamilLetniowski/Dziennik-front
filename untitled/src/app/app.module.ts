import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { OcenyComponent } from './oceny/oceny.component';
import { HeaderComponent } from './header/header.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';

const appRoutes: Routes = [
  {path: '', component: CarComponent},
  {path: 'oceny', component: OcenyComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    OcenyComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
