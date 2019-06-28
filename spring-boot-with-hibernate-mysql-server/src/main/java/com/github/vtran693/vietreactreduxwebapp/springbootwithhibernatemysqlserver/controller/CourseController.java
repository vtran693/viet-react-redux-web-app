package com.github.vtran693.vietreactreduxwebapp.springbootwithhibernatemysqlserver.controller;

import com.github.vtran693.vietreactreduxwebapp.springbootwithhibernatemysqlserver.model.Course;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @GetMapping("")
    public List<Course> getAllUsers(){
        List<Course> allCourses = new ArrayList<>();
        allCourses.add( new Course("Object Oriented Programming", "CS211") );
        allCourses.add( new Course("Data Structure", "CS310") );
        return allCourses;
    }
}
