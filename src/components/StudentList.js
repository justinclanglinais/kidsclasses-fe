import React from 'react';
import StudentCard from './students/StudentCard.js'
import test from '../json/test.json'

const StudentList = () => {
    const AllStudents = () => test.students.map( (stud) => ( 
        <StudentCard onClick={console.log("click", stud.name)} name={stud.name} />
    ))
    return (
        <div>
            {AllStudents()}
        </div>
    );
};

export default StudentList;