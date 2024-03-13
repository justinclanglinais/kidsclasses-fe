import React from 'react';
import CourseCard from './courses/CourseCard.js'
import test from '../../json/test.json'

const DynamicCourseList = () => {

    const FilteredCourses = () => test.courses.map( (course) => ( 
        <CourseCard name={course.name} />
    ))
    return (
        <div>
            <div>
                <h2>Filtered Courses</h2>
            </div>
            <div>
                {FilteredCourses()}
            </div>
        </div>
    );
};

export default DynamicCourseList;