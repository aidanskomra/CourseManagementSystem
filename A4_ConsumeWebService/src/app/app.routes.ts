/* Aidan Skomra
   991645199
 */
import { Routes } from '@angular/router';
import { CourseListComponent } from "./components/course-list/course-list.component";
import {CourseDetailsComponent} from "./components/course-details/course-details.component";
import { CourseSearchComponent } from './components/course-search/course-search.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
export const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'search', component: CourseSearchComponent },
  { path: 'add-course', component: AddCourseComponent }
];
