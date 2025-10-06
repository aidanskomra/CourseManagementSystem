/* Aidan Skomra
   991645199
 */
import { Component } from '@angular/core';
import { CourseService } from "../../services/course.service";
import { Course } from "../../models/course.model";
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent {
  courseSearch?: Course[];
  searchName: string = ""; // Ensure this is always initialized to string

  constructor(private courseService: CourseService) { }

  searchCourses(): void { // Removed parameter from method
    if (this.searchName) { // Only proceed if searchName is not empty
      this.courseService.searchCoursesByName(this.searchName)
        .subscribe({
          next: (data: Course[]) => {
            this.courseSearch = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    } else {
      this.courseSearch = []; // Clear results if search input is empty
    }
  }
}
