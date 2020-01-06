import {Component, OnInit} from '@angular/core';
import {LoggService} from '../services/logg.service';

@Component({
  selector: 'app-uczniowie',
  templateUrl: './uczniowie.component.html',
  styleUrls: ['./uczniowie.component.css']
})
export class UczniowieComponent implements OnInit {
  name = '';
  sClass = '';
  PupilList: any;


  constructor(private logg: LoggService) {
  }

  ngOnInit() {
    this.PupilList = this.logg.getPplList().subscribe(
      ((res) => this.PupilList = res));
  }

  create() {
    this.logg.create(this.name, this.sClass).subscribe();
  }


}
