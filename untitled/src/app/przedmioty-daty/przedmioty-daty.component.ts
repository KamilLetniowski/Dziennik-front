import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {Przedmioty} from '../struktury/przedmioty';
import {PrzedmiotyDatyService} from '../services/przedmioty-daty.service';

@Component({
  selector: 'app-przedmioty-daty',
  templateUrl: './przedmioty-daty.component.html',
  styleUrls: ['./przedmioty-daty.component.css']
})
export class PrzedmiotyDatyComponent implements OnInit {

  subject: Przedmioty = new Przedmioty();
  subjectsDates: any;

  constructor(private route: ActivatedRoute, private przedmiotyService: PrzedmiotyDatyService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.subject.classId = params.get('class_id');
      this.subject.leader = params.get('leader');
      this.subject.name = params.get('name');
    });
    console.log(this.subject);
    this.subjectsDates = this.przedmiotyService.getListOfChoosenSubject(this.subject).subscribe(
      ((res) => this.subjectsDates = res)
    )
    ;
  }


}
