import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import {CourseListComponent} from './course/course-list/course-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'course',
        component: CourseListComponent
      },
      {
        path: 'student',
        component: StudentListComponent
      },
      {
        path: 'teacher',
        component: TeacherListComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
 imports: [
   CommonModule,
   RouterModule.forRoot(routes)
 ],
 exports: [
   RouterModule
 ]
})

export class AppRoutingModule {}
