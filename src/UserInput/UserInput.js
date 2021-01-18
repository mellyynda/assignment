import React from 'react';
import './UserInput.css';


const userInput = ({name, onChangeHandler}) => {

    return(<div className='form-wrapper'>
        <label for='name'>Enter your name:</label>
        <input type="text" name='name' value={name} onChange={onChangeHandler}></input>
    </div>)
}

export default userInput;