import { Component, OnInit } from '@angular/core';
import {LoggService} from '../services/logg.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name = '';
  pass = '';
  TeacherList: any;

  constructor(private logg: LoggService) {
  }

  ngOnInit() {
    this.TeacherList = this.logg.getTeachList().subscribe(
      ((res) => this.TeacherList = res));
  }

  create() {
    this.logg.create(this.name, this.pass).subscribe();
  }
}
