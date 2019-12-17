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

  public pName = '';
  pCourse = '';
  private coursePupilAdd: any;
  private pupilShow: any;
  private pupilId: any;

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.cname = params.get('cname');
      this.cleader = params.get('cleader');
      this.course.id = params.get('cId');
    });
    this.courseAtendant = this.uczniowieServis.getCoursePupilList(this.course).subscribe(
      ((res) => this.courseAtendant = res)
    );
    this.showPupil();
  }

  addPupilCourse() {
    this.pupilId = this.pupilShow.find(x => x.name === this.pName).id;
    console.log(this.pupilId);
    this.coursePupilAdd = this.uczniowieServis.addNewPupilCourse(this.pupilId, this.course.id).subscribe();
  }

  showPupil() {
    this.uczniowieServis.showPupilCourse().subscribe((res) => {
      this.pupilShow = res;
      console.log(res);
    });
  }


}
