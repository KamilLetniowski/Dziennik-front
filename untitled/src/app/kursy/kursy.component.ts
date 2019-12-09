import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {Kursy} from '../struktury/kursy';
import {KursyService} from '../services/kursy.service';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-kursy',
  templateUrl: './kursy.component.html',
  styleUrls: ['./kursy.component.css']
})
export class KursyComponent implements OnInit {
  cName = '';
  cLeader = '';

  course: Kursy = new Kursy();

  coursePack: Kursy[];

  constructor(private courseService: KursyService) {
  }

  ngOnInit() {
    this.reload();
  }


  reload() {
    this.courseService.getCourseList().subscribe(
      ((res) => this.coursePack = res));
  }

  addCourse() {
    this.courseService.addNewCourse(this.cName, this.cLeader).subscribe();
    this.reload();
  }

  redirect(kurs :Kursy)
  {

  }

  // getCourse(): void {
  //   this.carService.getAll().subscribe(
  //     (res: PrzedmiotyData[]) => {
  //       this.cars = res;
  //     },
  //     (err) => {
  //       this.error = err;
  //     }
  //   );
  // }
}

