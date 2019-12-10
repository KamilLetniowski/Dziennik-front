import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';
import {PrzedmiotyData} from '../struktury/przedmioty-data';


@Component({
  selector: 'app-car',
  templateUrl: './przedmioty.component.html',
  styleUrls: ['./przedmioty.component.css']
})
export class PrzedmiotyComponent implements OnInit {
  cars: PrzedmiotyData[] = [];
  error = '';
  success = '';
  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
    console.log(this.cars);
  }

  getCars(): void {
    this.carService.getAll().subscribe(
      (res: PrzedmiotyData[]) => {
        this.cars = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}

