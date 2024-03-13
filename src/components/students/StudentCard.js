import React from 'react';

const StudentCard = ( props ) => {
    return (
        <div style={{border: '3px solid black'}} >
            <p>{props.name}</p>
        </div>
    )
}

export default StudentCard;