import React from "react";
import DateSelector from './DateSelector.js';
import SubmitButton from './SubmitButton.js';

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
                <SubmitButton />
            </div>
        </div>

    )
}

export default LogACourse;