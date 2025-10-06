/* Aidan Skomra
   991645199
 */
package sheridan.skomraa.a4_webservice.controllers;

import sheridan.skomraa.a4_webservice.beans.Course;
import sheridan.skomraa.a4_webservice.repository.CourseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/students")
public class CourseController {

    private static final Logger log = LoggerFactory.getLogger(CourseController.class);
    private CourseRepository da;


    public CourseController(CourseRepository da){
        this.da = da;
    }


    @GetMapping
    public List<Course> getCourseCollection() {
        return da.findAll();
    }


    @GetMapping(value = "/{id}")  // "value" only here to illustrate our Mappings can //do more!
    public Course getIndividualCourse(@PathVariable Long id) {
        return da.findById(id).get();
    }


    @PostMapping(consumes = "application/json")
    public String postCourse(@RequestBody Course course) {
        return "http://localhost:8080/students/" + da.save(course);
    }

    @PutMapping(consumes = "application/json")
    public String putCourseCollection(@RequestBody List<Course> courseList) {
        da.deleteAll();
        da.saveAll(courseList);
        return "Total Records: " + da.count();
    }

    @PutMapping("/{id}")
    public String putIndividualCourse(@RequestBody Course course,@PathVariable Long id) {
        course.setId(id);
        da.save(course);
        log.info("student " + course);
        return "Total Records: " + da.count();
    }

    @DeleteMapping("/{id}")
    public String deleteIndividualCourse(@PathVariable Long id) {
        da.deleteById(id);
        return "Total Records: " + da.count();
    }
    @GetMapping("/search")
    public List<Course> searchCoursesByName(@RequestParam String name) {
        return da.findCourseByName(name);
    }
    @DeleteMapping
    public String deleteAllCourse() {
        da.deleteAll();
        return "Total Records: " + da.count();
    }


}
