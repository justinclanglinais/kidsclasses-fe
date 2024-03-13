import React from 'react';

const StudentCard = ( props ) => {
    return (
        <div onClick={console.log("click")}>
            <p>{props.name}</p>
        </div>
    )
}

export default StudentCard;