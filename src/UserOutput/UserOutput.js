import React from 'react';
import './UserOutput.css';

const userOutput = ({name}) => {
    return (<div className='user-wrapper'>
        {name
            ? <p>Hello there {name}!</p>
            : <p>Hello there{name}!</p>}
        
        <p>You are an aspiring Front-end developer that likes to play volleyball</p>
        </div>
    )
}

export default userOutput;