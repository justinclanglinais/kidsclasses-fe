import React from 'react';
import StudentCard from './StudentCard.js'
import test from '../../json/test.json'

const DynamicStudentList = () => {

    const FilteredStudents = () => test.students.map( (stud) => ( 
        <StudentCard name={stud.name} />
    ))
    return (
        <div>
            <div>
                <h2>Filtered Students</h2>
            </div>
            <div>
                {FilteredStudents()}
            </div>
        </div>
    );
};

export default DynamicStudentList;