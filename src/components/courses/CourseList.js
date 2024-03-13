import React from 'react';
import CourseCard from './CourseCard.js'
import test from '../../json/test.json'

const CourseList = () => {
    const AllCourses = () => test.courses.map( (course) => ( 
        <CourseCard name={course.name} />
    ))
    return (
        <div>
            <div>
                <h2>Courses</h2>
            </div>
            <div>
                {AllCourses()}
            </div>
        </div>
    );
};

export default CourseList;