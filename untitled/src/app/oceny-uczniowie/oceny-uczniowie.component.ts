import {Component, OnInit} from '@angular/core';
import {Pupil} from '../struktury/Pupil';
import {ActivatedRoute} from '@angular/router';
import {ObecnosciService} from '../services/obecnosci.service';

@Component({
  selector: 'app-oceny-uczniowie',
  templateUrl: './oceny-uczniowie.component.html',
  styleUrls: ['./oceny-uczniowie.component.css']
})
export class OcenyUczniowieComponent implements OnInit {

  grade = [];
  type = '';
  gradeName = '';
  ids = [];

  subject: Pupil = new Pupil();

  PupilList: any;
  Grades: any;


  constructor(private route: ActivatedRoute, private  pupilService: ObecnosciService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.subject.name = params.get('name');
      this.subject.class = params.get('class_id');
    });
    this.PupilList = this.pupilService.getPupilList(this.subject).subscribe(
      ((res) => this.PupilList = res)
    )
    ;
  }

  addGrade() {

     this.pupilService.addPupilGrade(this.grade, this.subject.class, this.subject.name , this.gradeName , this.type).subscribe(
      ((res) => this.PupilList = res)
    )
    ;


  }

  getGrades() {
    this.Grades = this.pupilService.getGradeList().subscribe(
      ((res) => this.PupilList = res)
    );
  }


  test(id: any) {
    console.log(id);
    this.ids.push(id);
  }
}
