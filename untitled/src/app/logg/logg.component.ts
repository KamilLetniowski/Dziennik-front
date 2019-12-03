import {Component, OnInit} from '@angular/core';
import {LoggService} from '../services/logg.service';

@Component({
  selector: 'app-logg',
  templateUrl: './logg.component.html',
  styleUrls: ['./logg.component.css', './css/style.css'],
})
export class LoggComponent implements OnInit {
  name = '';
  pass = '';


  constructor(private logg: LoggService) {
  }

  ngOnInit() {
  }

  create() {
    this.logg.create(this.name, this.pass).subscribe();
  }


}

