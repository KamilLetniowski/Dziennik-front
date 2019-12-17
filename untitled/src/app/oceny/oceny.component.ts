import {Component, OnInit} from '@angular/core';
import {CarService} from '../services/car.service';
import {PrzedmiotyData} from '../struktury/przedmioty-data';

@Component({
  selector: 'app-oceny',
  templateUrl: './oceny.component.html',
  styleUrls: ['./oceny.component.css']
})
export class OcenyComponent implements OnInit {

  cars: PrzedmiotyData[] = [];
  error = '';

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
