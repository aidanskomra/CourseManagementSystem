/* Aidan Skomra
   991645199
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course: Course = { id: undefined, name: '' };

  constructor(private courseService: CourseService, private router: Router) {}

  addCourse(): void {
    if (!this.course.name) {
      alert('Course name is required');
      return;
    }
    this.courseService.addCourse(this.course).subscribe({
      next: () => {
        this.router.navigate(['/courses']).then(success => {
          if (success) {
            console.log('Navigation successful!');
          } else {
            console.log('Navigation has failed!');
          }
        }).catch(err => {
          console.error('Navigation error:', err);
        });
      }

    });
  }
}
