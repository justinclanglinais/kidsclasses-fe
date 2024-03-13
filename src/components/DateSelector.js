import React from 'react';
import test from '../json/test.json'


const DateSelector = () => {
    const DropdownOptions = () => test.dates.map( (date) => ( 
        <option value={date.day}>{date.day} - {date.name}</option>
    ))
    return (
        <div>
            <div>
                Date Selector
            </div>
            <div>
                <select>
                    {DropdownOptions()}
                </select>
            </div>
        </div>
    );
};

export default DateSelector;