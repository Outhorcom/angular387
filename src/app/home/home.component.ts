import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course/core/course.service';
import {CourseModel} from '../course/core/course.model';

@Component({
  selector: 'cm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: CourseModel[];
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courses = this.courseService.getAllCourses();
  }
  courseTitleSelect(courseName) {
    console.log('Emitted info from child component: ' + courseName);
  }

}
