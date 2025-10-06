/* Aidan Skomra
   991645199
 */
import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course.model";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";




@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courseList?: Course[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList() {
    this.courseService.getAllCourses()
      .subscribe({
        next: (data: Course[]) => {
          this.courseList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
