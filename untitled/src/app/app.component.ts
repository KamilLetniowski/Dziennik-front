import { Component, OnInit } from '@angular/core';

import { PrzedmiotyComponent } from './przedmioty/przedmioty.component';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor() {
  }

  ngOnInit() {}
}
