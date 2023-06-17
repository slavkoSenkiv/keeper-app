import React from 'react';

function Note(props){

    function deleteNote(key) {
        props.updArr(prevNotes => prevNotes.filter(note => note.key !== props.noteKey));
    }
    return (
        <div className='note'>
            <h1>{props.noteTitle}</h1>
            <p>{props.noteContent}</p>
            <button onClick={()=>deleteNote(props.noteKey)}>Delele</button>
        </div>
    );
}

export default Note;