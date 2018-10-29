import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {CourseModel} from '../core/course.model';

@Component({
  selector: 'cm-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, OnDestroy {
  @Input() course: CourseModel;
  @Input() recenica = 'recenica';

  @Output() titleClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('Stigao kurs: ' + this.course.name);
  }

  titleClickedEvent() {
    this.titleClicked.emit(this.course.name);
  }
  ngOnDestroy() {
    this.titleClicked.unsubscribe();
  }

}
