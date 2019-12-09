import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {


  cname: string;
  cleader: string;
  cId: string;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.cname = params.get('cname');
      this.cleader = params.get('cleader');
      this.cId = params.get('cId');
    });
  }

}
