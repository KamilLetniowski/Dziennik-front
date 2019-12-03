import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  model: any;
  price: any;

  cars: CarComponent[];
  error = '';
  success = '';
  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getAll().subscribe(
      (res: CarComponent[]) => {
        this.cars = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
