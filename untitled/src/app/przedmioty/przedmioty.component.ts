import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './przedmioty.component.html',
  styleUrls: ['./przedmioty.component.css']
})
export class PrzedmiotyComponent implements OnInit {
  model: any;
  price: any;

  cars: PrzedmiotyComponent[];
  error = '';
  success = '';
  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getAll().subscribe(
      (res: PrzedmiotyComponent[]) => {
        this.cars = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
