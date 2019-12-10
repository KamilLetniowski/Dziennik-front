import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {KursyService} from '../services/kursy.service';
import {Przedmioty} from '../struktury/przedmioty';
import {Course} from '../struktury/course';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {

  course: Course = new Course();
  courseAtendant: any;


  cname: string;
  cleader: string;

  constructor(private route: ActivatedRoute, private uczniowieServis: KursyService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.cname = params.get('cname');
      this.cleader = params.get('cleader');
      this.course.id = params.get('cId');
    });
    console.log(this.course);
    this.courseAtendant = this.uczniowieServis.getCoursePupilList(this.course).subscribe(
      ((res) => this.courseAtendant = res)
    );
  }

}
