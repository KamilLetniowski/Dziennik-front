import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ObecnosciService} from '../services/obecnosci.service';
import {Przedmioty} from '../struktury/przedmioty';
import {Pupil} from '../struktury/Pupil';
import {Presence} from '../struktury/presence';

@Component({
  selector: 'app-przedmioty-daty-obecnosci',
  templateUrl: './przedmioty-daty-obecnosci.component.html',
  styleUrls: ['./przedmioty-daty-obecnosci.component.css']
})
export class PrzedmiotyDatyObecnosciComponent implements OnInit {

  subject: Pupil = new Pupil();
  PupilList: any;

  constructor(private route: ActivatedRoute, private  pupilService: ObecnosciService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.subject.name = params.get('name');
      this.subject.class = params.get('class_id');
      this.subject.date = params.get('date');
    });
    this.PupilList = this.pupilService.getPupilList(this.subject).subscribe(
      ((res) => this.PupilList = res)
    )
    ;
  }

  presenceCheck() {
    let presenceList = this.PupilList.map(pupil =>
      new Presence(pupil.id, pupil.presence , this.subject.name , this.subject.date)
    );
    this.PupilList = this.pupilService.updatePupilPresence(presenceList).subscribe(
      ((res) => this.PupilList = res)
    );
  }


}
