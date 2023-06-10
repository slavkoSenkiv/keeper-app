import React from 'react';
import ReactDOM from 'react-dom/client';

function Note(props){
    return (
        <div className='note'>
            <h1>{props.noteTitle}</h1>
            <p>{props.noteContent}</p>
        </div>
    )
}

export default Note;