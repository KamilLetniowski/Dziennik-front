import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ObecnosciService} from '../services/obecnosci.service';
import {EdycjaService} from '../services/edycja.service';
import {Pupil} from '../struktury/Pupil';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edycja-ocen',
  templateUrl: './edycja-ocen.component.html',
  styleUrls: ['./edycja-ocen.component.css']
})
export class EdycjaOcenComponent implements OnInit, OnDestroy {

  PupilGrades: any;

  grade: Pupil;
  private subs: Subscription;

  gradeId = [];
  gradeValue = [];



  constructor(private route: ActivatedRoute, private edycjaSerwis: EdycjaService) {
  }

  ngOnInit() {
    this.subs = this.route.queryParamMap.subscribe(params => {
      this.grade = {
        name: params.get('name'),
        pname: params.get('pname'),
        id: params.get('id')
      };
    });

    this.PupilGrades = this.edycjaSerwis.getPupilGrade(this.grade).subscribe(
      ((res) => this.PupilGrades = res));
  }

  gradeUpdate() {
    this.edycjaSerwis.editPupilGrade(this.gradeValue, this.gradeId).subscribe(
      ((res) => this.PupilGrades = res));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();

  }

  test(sub: any) {
    this.gradeId.push(sub);
  }
}
