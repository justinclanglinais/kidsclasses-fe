import React from 'react';
import StudentCard from './StudentCard.js'
import test from '../../json/test.json'

const DynamicStudentList = () => {

    const AllStudents = () => test.students.map( (stud) => ( 
        <StudentCard name={stud.name} />
    ))
    return (
        <div>
            <div>
                <h2>Students</h2>
            </div>
            <div>
                {AllStudents()}
            </div>
        </div>
    );
};

export default DynamicStudentList;