/* Aidan Skomra
   991645199
 */
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../models/course.model";

const baseUrl = 'http://localhost:8080/api/students';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(baseUrl);
  }
  getCourseById(id:number): Observable<Course> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  updateCourse(data: any, id:number): Observable<any> {

    return this.http.put(`${baseUrl}/${id}`,data);
  }
  searchCoursesByName(name: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseUrl}/search?name=${name}`);
  }
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(baseUrl, course);
  }

}
