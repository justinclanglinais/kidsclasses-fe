import React from "react";
import DateSelector from './DateSelector.js';
import SubmitButton from './SubmitButton.js';
import DynamicStudentList from './students/DynamicStudentList.js';

const LogACourse = () => {
    return (
        <div>
            <div>
                <h2>
                    Logging A Course
                </h2>
            </div>
            <div>
                <DateSelector />
                <DynamicStudentList />
                <SubmitButton />
            </div>
        </div>

    )
}

// Date Selector
    // Populates Courses for that day
        // Select a course
// Eligible Students populate, based on that course
    // Select (highlight) multiple students
    // Submit attendance

export default LogACourse;