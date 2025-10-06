/* Aidan Skomra
   991645199
 */
package sheridan.skomraa.a4_webservice.repository;

import sheridan.skomraa.a4_webservice.beans.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findCourseByName(String name);
}
